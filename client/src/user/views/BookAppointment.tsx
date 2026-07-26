import { type FunctionComponent, useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Section3 from "../components/Section3";
import Section6 from "../components/Section6";
import Background1 from "../components/Background1";
import Section7 from "../components/Section7";
import SectionBadge from "../components/SectionBadge";
import {
  requestOTP,
  verifyOTP,
  getUserProfile,
  updateUserProfile,
  getPublicDoctors,
  requestBooking,
  verifyPayment,
} from "../../services/user.service";

type FormStatus = "idle" | "submitting" | "success" | "error";
type Step = "phone" | "otp" | "form" | "book" | "success";

const RESEND_COOLDOWN = 30;
const NAVY = "#1F2A44";
const TEXT_DARK = "#0B0C0F";
const TEXT_MUTED = "#7E7F80";
const INPUT_BG = "#F1F2F1";
const BORDER = "#E6E6E6";
const RED = "#ef4444";

const BookAppointment: FunctionComponent = () => {
  const [searchParams] = useSearchParams();
  const preselectedDoctorId = searchParams.get("doctor");

  const [step, setStep] = useState<Step>("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [token, setToken] = useState<string | null>(() => localStorage.getItem("auth_token"));
  const [isRegistered, setIsRegistered] = useState(false);

  const [resendTimer, setResendTimer] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [name, setName] = useState("");
  const [careof, setCareof] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const [doctors, setDoctors] = useState<any[]>([]);
  const [selectedDoctorId, setSelectedDoctorId] = useState(preselectedDoctorId || "");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingNotes, setBookingNotes] = useState("");
  const [bookingResult, setBookingResult] = useState<any>(null);
  const [scheduleDays, setScheduleDays] = useState<string[]>([]);
  const [scheduleTime, setScheduleTime] = useState("");

  useEffect(() => {
    if (!selectedDoctorId) { setScheduleDays([]); setScheduleTime(""); return; }
    const doc = doctors.find((d) => d.id === selectedDoctorId);
    if (!doc || !doc.schedules) { setScheduleDays([]); setScheduleTime(""); return; }
    let sched = doc.schedules;
    try { while (typeof sched === "string") { const t = JSON.parse(sched); if (t === sched) break; sched = t; } } catch { }
    const parsed = Array.isArray(sched) ? sched : [];
    setScheduleDays(parsed.map((s: any) => s.day).filter(Boolean));
    if (parsed[0]?.startTime) {
      const fmt = (t: string) => { const [h, m] = t.split(":"); const hr = parseInt(h); return `${hr > 12 ? hr - 12 : hr}:${m || "00"} ${hr >= 12 ? "PM" : "AM"}`; };
      setScheduleTime(`${fmt(parsed[0].startTime)}${parsed[0].endTime ? ` - ${fmt(parsed[0].endTime)}` : ""}`);
    } else { setScheduleTime(""); }
  }, [selectedDoctorId, doctors]);

  const scheduleError = (() => {
    if (!bookingDate || scheduleDays.length === 0) return "";
    const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date(bookingDate).getDay()];
    return scheduleDays.some((d) => d.toLowerCase() === dayName.toLowerCase()) ? "" : `Doctor is not available on ${dayName}s. Available: ${scheduleDays.join(", ")}`;
  })();

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const phoneRef = useRef<HTMLInputElement>(null);
  const otpRef = useRef<HTMLInputElement>(null);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);

  useEffect(() => {
    if (step === "phone") phoneRef.current?.focus();
    if (step === "otp") setTimeout(() => otpRef.current?.focus(), 100);
  }, [step]);

  useEffect(() => {
    if (token) {
      getUserProfile(token)
        .then((res) => {
          if (res.success && res.data) {
            const u = res.data;
            setPhone(u.phone || "");
            setName(u.name || "");
            setCareof(u.careof || "");
            setEmail(u.email || "");
            setAddress(u.address || "");
            setIsRegistered(!!u.name);
            setStep("book");
            getPublicDoctors().then((r) => {
              if (r.success && Array.isArray(r.data)) setDoctors(r.data.filter((d: any) => d.isActive !== false));
            }).catch(() => { });
          }
        })
        .catch(() => {
          localStorage.removeItem("auth_token");
          setToken(null);
        });
    }
  }, []);

  useEffect(() => {
    if (preselectedDoctorId) {
      setSelectedDoctorId(preselectedDoctorId);
    }
  }, [preselectedDoctorId]);

  const startTimer = useCallback(() => {
    setResendTimer(RESEND_COOLDOWN);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, []);

  useEffect(() => () => { if (timerRef.current) clearInterval(timerRef.current); }, []);

  const selectedDoctor = doctors.find((d) => d.id === selectedDoctorId);

  const handleSendOTP = async () => {
    const cleaned = phone.replace(/\D/g, "");
    if (cleaned.length < 10) { setStatus("error"); setErrorMessage("Enter a valid 10-digit phone number"); return; }
    setStatus("submitting"); setErrorMessage("");
    try {
      const res = await requestOTP(phone);
      if (res.success) {
        setStep("otp"); startTimer(); setStatus("idle");
      } else { setStatus("error"); setErrorMessage(res.message || "Failed to send OTP"); }
    } catch (err: any) { setStatus("error"); setErrorMessage(err?.message || "Something went wrong"); }
  };

  const handleVerifyOTP = async () => {
    const cleaned = otp.replace(/\D/g, "");
    if (cleaned.length < 4) { setStatus("error"); setErrorMessage("Enter the 6-digit code sent to your phone"); return; }
    setStatus("submitting"); setErrorMessage("");
    try {
      const res = await verifyOTP(phone, otp);
      if (res.success) {
        const t = res.data?.token;
        if (t) { localStorage.setItem("auth_token", t); setToken(t); }
        setIsRegistered(res.data?.isRegistered || false);
        const u = res.data?.user;
        if (u) { setName(u.name || ""); setCareof(u.careof || ""); setEmail(u.email || ""); setAddress(u.address || ""); }
        setStep("form"); setStatus("idle");
      } else { setStatus("error"); setErrorMessage(res.message || "Invalid OTP"); }
    } catch (err: any) { setStatus("error"); setErrorMessage(err?.message || "Something went wrong"); }
  };

  const handleResend = async () => {
    setOtp(""); setErrorMessage(""); setStatus("submitting");
    try { await requestOTP(phone); startTimer(); setStatus("idle"); } catch { setStatus("error"); setErrorMessage("Failed to resend OTP"); }
  };

  const handleSaveProfile = async () => {
    if (!name.trim()) { setStatus("error"); setErrorMessage("Name is required"); return; }
    setStatus("submitting"); setErrorMessage("");
    try {
      const t = token || localStorage.getItem("auth_token");
      if (!t) throw new Error("Not authenticated");
      await updateUserProfile({ name: name.trim(), careof: careof.trim() || undefined, email: email.trim() || undefined, address: address.trim() || undefined }, t);
      setStatus("idle");
      if (!selectedDoctorId) {
        setStep("success");
      } else {
        setStep("book");
        const docRes = await getPublicDoctors();
        if (docRes.success && Array.isArray(docRes.data)) {
          setDoctors(docRes.data.filter((d: any) => d.isActive !== false));
        }
        setBookingDate("");
        setBookingNotes("");
      }
    } catch (err: any) { setStatus("error"); setErrorMessage(err?.message || "Failed to save details"); }
  };

  const loadRazorpayScript = () =>
    new Promise<void>((resolve) => {
      if ((window as any).Razorpay) return resolve();
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve();
      script.onerror = () => resolve();
      document.body.appendChild(script);
    });

  const handleConfirmBooking = async () => {
    if (!selectedDoctorId) { setStatus("error"); setErrorMessage("Please select a doctor"); return; }
    if (!bookingDate) { setStatus("error"); setErrorMessage("Please select an appointment date"); return; }
    setStatus("submitting"); setErrorMessage("");
    try {
      const t = token || localStorage.getItem("auth_token");
      if (!t) throw new Error("Not authenticated");
      if (scheduleError) { setStatus("error"); setErrorMessage(scheduleError); return; }

      const res = await requestBooking({
        doctorId: selectedDoctorId,
        appointmentDate: bookingDate,
        notes: bookingNotes.trim() || undefined,
        patientName: name,
        phone,
        email: email || undefined,
        careof: careof || undefined,
        address: address || undefined,
      }, t);

      if (!res.success) {
        setStatus("error"); setErrorMessage(res.message || "Booking failed. Please try again.");
        return;
      }

      const order = res.data?.razorpayOrder;
      const keyId = res.data?.razorpayKeyId;

      // Mock mode — no real Razorpay order
      if (!keyId || !order || order.id?.startsWith("order_mock_")) {
        setBookingResult(res.data);
        setStep("success");
        setStatus("idle");
        return;
      }

      // Real Razorpay — open checkout
      await loadRazorpayScript();
      if (!(window as any).Razorpay) {
        setStatus("error"); setErrorMessage("Payment gateway failed to load. Please try again.");
        return;
      }

      const options = {
        key: keyId,
        amount: order.amount,
        currency: order.currency || "INR",
        name: "Swaraj Hospital",
        description: selectedDoctor ? `Appointment with ${selectedDoctor.name}` : "Appointment Booking",
        order_id: order.id,
        prefill: { name: name || "", contact: phone, email: email || "" },
        theme: { color: "#1F2A44" },
        handler: async (response: any) => {
          try {
            const vRes = await verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }, t);
            if (vRes.success) {
              setBookingResult(vRes.data);
              setStep("success");
              setStatus("idle");
            } else {
              setStatus("error"); setErrorMessage("Payment verification failed. Please contact support.");
            }
          } catch {
            setStatus("error"); setErrorMessage("Payment verification failed. Please contact support.");
          }
        },
        modal: {
          ondismiss: () => {
            setStatus("idle");
            setErrorMessage("");
          },
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.on("payment.failed", (response: any) => {
        setStatus("error"); setErrorMessage(response.error?.description || "Payment failed. Please try again.");
      });
      rzp.open();
    } catch (err: any) { setStatus("error"); setErrorMessage(err?.message || "Something went wrong"); }
  };

  const handleLogout = () => {
    localStorage.removeItem("auth_token"); setToken(null); setPhone(""); setOtp("");
    setName(""); setCareof(""); setEmail(""); setAddress(""); setAge(""); setGender("");
    setBookingResult(null); setBookingDate(""); setBookingNotes("");
    setStep("phone"); setStatus("idle"); setErrorMessage("");
    if (timerRef.current) clearInterval(timerRef.current); setResendTimer(0);
  };

  const handleEditPhone = () => {
    setStep("phone"); setOtp(""); setStatus("idle"); setErrorMessage("");
    if (timerRef.current) clearInterval(timerRef.current); setResendTimer(0);
  };

  const stepLabels = ["Verify", "Details", "Book", "Confirm"];
  const currentIdx = step === "phone" || step === "otp" ? 0 : step === "form" ? 1 : step === "book" ? 2 : 3;

  const stl = (overrides: React.CSSProperties = {}): React.CSSProperties => ({
    boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start",
    padding: "16px 14px", width: "100%", height: "52px", background: "#FFFFFF",
    border: "1px solid #E6E6E6", borderRadius: "8px", outline: "none",
    fontFamily: "'Inter'", fontSize: "15px", color: TEXT_DARK, transition: "all 0.2s",
    ...overrides,
  });

  const formField = (label: string, value: string, onChange: (v: string) => void, placeholder: string, type = "text", required = false) => (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%", flexGrow: 1 }}>
      <Typography sx={{ fontFamily: "'Lilex'", fontWeight: 500, fontSize: "12px", lineHeight: "18px", textTransform: "uppercase", color: NAVY, letterSpacing: "0.3px" }}>
        {label}{required ? " *" : ""}
      </Typography>
      <input
        ref={type === "tel" ? phoneRef : undefined}
        type={type} placeholder={placeholder} value={value}
        onChange={(e) => onChange(e.target.value)}
        style={stl()}
        className="placeholder:text-[#A0A0A0] focus:border-[#1F2A44]"
        onFocus={(e) => { e.target.style.borderColor = NAVY; }}
        onBlur={(e) => { if (!value) { e.target.style.borderColor = "#E6E6E6"; } }}
      />
    </Box>
  );

  const Spinner = () => (
    <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.3" />
      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );

  const ErrorBox = () => errorMessage ? (
    <Box sx={{ display: "flex", alignItems: "center", gap: "10px", p: "12px 16px", borderRadius: "10px", bgcolor: "#FEF2F2", border: "1px solid #FECACA", width: "100%" }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={RED} strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>
      <Typography sx={{ fontFamily: "'Inter'", fontSize: "14px", color: RED }}>{errorMessage}</Typography>
    </Box>
  ) : null;

  const today = new Date().toISOString().split("T")[0];

  const renderContent = () => {
    if (step === "phone") {
      return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "28px", width: "100%", maxWidth: "480px", mx: "auto", py: 2 }}>
          {/* <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ fontFamily: "'Inter'", fontSize: "15px", color: TEXT_MUTED, lineHeight: "24px" }}>
              Enter your mobile number to receive a one-time passcode
            </Typography>
          </Box> */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Typography sx={{ fontFamily: "'Lilex'", fontWeight: 500, fontSize: "12px", textTransform: "uppercase", color: NAVY, letterSpacing: "0.3px" }}>
              Phone Number *
            </Typography>
            <input
              ref={phoneRef}
              type="tel" placeholder="Enter your 10-digit mobile number" value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendOTP()}
              style={stl({ fontSize: "18px", letterSpacing: "1px", textAlign: "center" })}
              className="placeholder:text-[#A0A0A0] placeholder:text-[14px] placeholder:tracking-normal focus:border-[#1F2A44]"
              onFocus={(e) => { e.target.style.borderColor = NAVY; }}
              onBlur={(e) => { if (!phone) { e.target.style.borderColor = "#E6E6E6"; } }}
            />
          </Box>
          <button onClick={handleSendOTP} disabled={status === "submitting"}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "fit-content", minWidth: "160px", height: "48px", background: NAVY, borderRadius: "8px", border: "none", color: "#FFFFFF", fontFamily: "'Lilex'", fontSize: "14px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.5px", cursor: "pointer", transition: "all 0.25s" }}
            className="hover:bg-[#151c2e] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed">
            {status === "submitting" ? <><Spinner /> SENDING...</> : "SEND OTP"}
          </button>
          <ErrorBox />
        </Box>
      );
    }

    if (step === "otp") {
      return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "28px", width: "100%", maxWidth: "480px", mx: "auto", py: 2 }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ fontFamily: "'Inter'", fontSize: "15px", color: TEXT_MUTED, lineHeight: "24px" }}>
              A 6-digit code sent to{" "}
              <strong style={{ color: TEXT_DARK }}>{phone}</strong>
              <button onClick={handleEditPhone} style={{ background: "none", border: "none", color: NAVY, textDecoration: "underline", cursor: "pointer", fontFamily: "'Inter'", fontSize: "14px", marginLeft: "8px" }}>Edit</button>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Typography sx={{ fontFamily: "'Lilex'", fontWeight: 500, fontSize: "12px", textTransform: "uppercase", color: NAVY, letterSpacing: "0.3px" }}>
              Enter OTP *
            </Typography>
            <input
              ref={otpRef}
              type="text" inputMode="numeric" placeholder="000000" value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
              onKeyDown={(e) => e.key === "Enter" && handleVerifyOTP()}
              maxLength={6}
              style={stl({ fontSize: "28px", letterSpacing: "12px", textAlign: "center", fontWeight: 600, fontFamily: "'Inter', monospace" })}
              className="placeholder:text-[#A0A0A0] placeholder:text-[20px] placeholder:tracking-[12px] focus:border-[#1F2A44]"
              onFocus={(e) => { e.target.style.borderColor = NAVY; }}
              onBlur={(e) => { if (!otp) { e.target.style.borderColor = "#E6E6E6"; } }}
            />
          </Box>
          <button onClick={handleVerifyOTP} disabled={status === "submitting"}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "fit-content", minWidth: "160px", height: "48px", background: NAVY, borderRadius: "8px", border: "none", color: "#FFFFFF", fontFamily: "'Lilex'", fontSize: "14px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.5px", cursor: "pointer", transition: "all 0.25s" }}
            className="hover:bg-[#151c2e] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed">
            {status === "submitting" ? <><Spinner /> VERIFYING...</> : "VERIFY OTP"}
          </button>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {resendTimer > 0 ? (
              <Typography sx={{ fontFamily: "'Inter'", fontSize: "14px", color: TEXT_MUTED }}>Resend code in {resendTimer}s</Typography>
            ) : (
              <button onClick={handleResend} disabled={status === "submitting"}
                style={{ background: "none", border: "none", color: NAVY, cursor: "pointer", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, textDecoration: "underline" }}>
                Resend OTP
              </button>
            )}
          </Box>
          <ErrorBox />
        </Box>
      );
    }

    if (step === "book") {
      return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "28px", width: "100%", maxWidth: "640px", mx: "auto" }}>
          {selectedDoctor && (
            <Box sx={{ display: "flex", alignItems: "center", gap: "16px", p: "16px", bgcolor: "#F8F9FA", borderRadius: "8px", border: "1px solid #EEEEEE" }}>
              <Box sx={{ width: "56px", height: "56px", borderRadius: "8px", overflow: "hidden", bgcolor: "#E6E6E6", flexShrink: 0 }}>
                <img src={selectedDoctor.profileImage || "/Container5@2x.png"} alt={selectedDoctor.name} className="w-full h-full object-cover" />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontFamily: "'Lilex'", fontSize: "14px", fontWeight: 600, textTransform: "uppercase", color: TEXT_DARK }}>{selectedDoctor.name}</Typography>
                <Typography sx={{ fontFamily: "'Inter'", fontSize: "14px", color: TEXT_MUTED, mb: 0.5 }}>{selectedDoctor.specialization?.name}</Typography>
                {scheduleTime && (
                  <Typography sx={{ fontFamily: "'Inter'", fontSize: "13px", color: "#7791A5" }}>{scheduleTime}</Typography>
                )}
              </Box>
            </Box>
          )}
          {scheduleDays.length > 0 && (
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
              {scheduleDays.map((day) => (
                <Box key={day} sx={{ width: "44px", height: "44px", borderRadius: "50%", border: "1px solid #E6E6E6", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "#FFFFFF" }}>
                  <Typography sx={{ fontFamily: "'Lilex'", fontSize: "12px", textTransform: "uppercase", color: TEXT_DARK }}>{day.slice(0, 3)}</Typography>
                </Box>
              ))}
            </Box>
          )}

          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Typography sx={{ fontFamily: "'Lilex'", fontWeight: 500, fontSize: "12px", textTransform: "uppercase", color: NAVY, letterSpacing: "0.3px" }}>
              Select Doctor *
            </Typography>
            <Box sx={{ position: "relative", width: "100%" }}>
              <select value={selectedDoctorId} onChange={(e) => setSelectedDoctorId(e.target.value)}
                style={{ ...stl({ padding: "16px 14px", appearance: "none", cursor: "pointer", color: selectedDoctorId ? TEXT_DARK : "#A0A0A0" }) }}
                className="focus:border-[#1F2A44]">
                <option value="" disabled>Select a doctor...</option>
                {doctors.map((doc) => (
                  <option key={doc.id} value={doc.id} style={{ color: TEXT_DARK }}>{doc.name} — {doc.specialization?.name || ""}</option>
                ))}
              </select>
              <Box className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                <svg className="fill-current h-4 w-4 text-[#A0A0A0]" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Typography sx={{ fontFamily: "'Lilex'", fontWeight: 500, fontSize: "12px", textTransform: "uppercase", color: NAVY, letterSpacing: "0.3px" }}>
              Appointment Date *
            </Typography>
            <input type="date" min={today} value={bookingDate} onChange={(e) => { setBookingDate(e.target.value); setErrorMessage(""); }}
              style={{ ...stl({ cursor: "pointer" }), borderColor: scheduleError && bookingDate ? RED : "#E6E6E6" }}
              className="focus:border-[#1F2A44]" />
            {scheduleError && bookingDate && (
              <Typography sx={{ fontFamily: "'Inter'", fontSize: "13px", color: RED, mt: "2px" }}>
                {scheduleError}
              </Typography>
            )}
          </Box>

          {/* Fee Display */}
          {selectedDoctor && selectedDoctor.bookingFee && (
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: "16px 20px", bgcolor: "#F8F9FA", borderRadius: "8px", border: "1px solid #EEEEEE" }}>
              <Typography sx={{ fontFamily: "'Inter'", fontSize: "14px", color: TEXT_DARK }}>Consultation Fee</Typography>
              <Typography sx={{ fontFamily: "'Lilex'", fontSize: "18px", fontWeight: 600, color: NAVY }}>
                ₹{Number(selectedDoctor.bookingFee).toLocaleString("en-IN")}
              </Typography>
            </Box>
          )}

          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Typography sx={{ fontFamily: "'Lilex'", fontWeight: 500, fontSize: "12px", textTransform: "uppercase", color: NAVY, letterSpacing: "0.3px" }}>
              Notes (optional)
            </Typography>
            <textarea placeholder="Enter your message" value={bookingNotes} onChange={(e) => setBookingNotes(e.target.value)}
              style={{ ...stl({ height: "100px", padding: "16px", resize: "none" }) }}
              className="placeholder:text-[#A0A0A0] focus:border-[#1F2A44]" />
          </Box>

          <button onClick={handleConfirmBooking} disabled={status === "submitting" || (!!scheduleError && !!bookingDate)}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "fit-content", minWidth: "180px", height: "48px", background: NAVY, borderRadius: "8px", border: "none", color: "#FFFFFF", fontFamily: "'Lilex'", fontSize: "14px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.5px", cursor: "pointer", transition: "all 0.25s", marginTop: "8px" }}
            className="hover:bg-[#151c2e] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed">
            {status === "submitting" ? <><Spinner /> REDIRECTING...</> : "PROCEED TO PAY"}
          </button>
          <ErrorBox />
        </Box>
      );
    }

    if (step === "success") {
      const ref = bookingResult?.booking?.bookingReference || bookingResult?.bookingReference;
      return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", py: 4, px: 3, textAlign: "center" }}>
          <Box sx={{ width: "80px", height: "80px", borderRadius: "50%", bgcolor: "#E8F5E9", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </Box>
          <Typography sx={{ fontFamily: "'Stack Sans Text'", fontSize: "28px", fontWeight: 500, color: TEXT_DARK }}>
            {ref ? "Booking Confirmed!" : "Details Saved Successfully!"}
          </Typography>
          {ref ? (
            <>
              <Typography sx={{ fontFamily: "'Inter'", fontSize: "15px", color: TEXT_MUTED, maxWidth: "400px", lineHeight: "24px" }}>
                Your appointment has been booked. Your reference number is:
              </Typography>
              <Typography sx={{ fontFamily: "'Inter', monospace", fontSize: "22px", fontWeight: 600, color: NAVY, bgcolor: INPUT_BG, px: 4, py: 2, borderRadius: "8px", letterSpacing: "1px" }}>
                {ref}
              </Typography>
              <Typography sx={{ fontFamily: "'Inter'", fontSize: "14px", color: TEXT_MUTED, maxWidth: "400px", lineHeight: "22px" }}>
                Our team will contact you shortly to confirm your slot. Please bring the reference number when visiting.
              </Typography>
            </>
          ) : (
            <Typography sx={{ fontFamily: "'Inter'", fontSize: "15px", color: TEXT_MUTED, maxWidth: "400px", lineHeight: "24px" }}>
              Your profile has been updated. To book an appointment, select a doctor above.
            </Typography>
          )}
          <button onClick={handleLogout} style={{ marginTop: "8px", display: "flex", alignItems: "center", gap: "8px", padding: "12px 32px", background: NAVY, color: "#FFFFFF", fontFamily: "'Lilex'", fontSize: "14px", textTransform: "uppercase", borderRadius: "8px", border: "none", cursor: "pointer", transition: "all 0.2s" }}
            className="hover:bg-[#151c2e] active:scale-[0.98]">
            {ref ? "Book Another Appointment" : "Start Over"}
          </button>
        </Box>
      );
    }

    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%", maxWidth: "640px", mx: "auto" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
          <Typography sx={{ fontFamily: "'Inter'", fontSize: "14px", color: TEXT_MUTED }}>
            {isRegistered ? "Welcome back! Your details are pre-filled." : "Fill in your details to complete your profile."}
          </Typography>
          <Typography sx={{ fontFamily: "'Inter'", fontSize: "14px", color: TEXT_MUTED }}>
            (<strong style={{ color: TEXT_DARK }}>{phone}</strong>)
          </Typography>
          <button onClick={handleLogout} style={{ background: "none", border: "none", color: NAVY, textDecoration: "underline", cursor: "pointer", fontFamily: "'Inter'", fontSize: "13px" }}>Change</button>
        </Box>

        <Box sx={{ display: "flex", gap: "16px", flexDirection: { xs: "column", sm: "row" } }}>
          {formField("Name", name, setName, "Enter your legal name", "text", true)}
          {formField("C/O Name", careof, setCareof, "Enter name")}
        </Box>

        <Box sx={{ display: "flex", gap: "16px", flexDirection: { xs: "column", sm: "row" } }}>
          {formField("Age", age, setAge, "Enter your age", "number")}
          {formField("Address", address, setAddress, "Enter your address")}
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography sx={{ fontFamily: "'Lilex'", fontWeight: 500, fontSize: "12px", textTransform: "uppercase", color: NAVY, letterSpacing: "0.3px" }}>
            Gender
          </Typography>
          <select value={gender} onChange={(e) => setGender(e.target.value)}
            style={{ ...stl({ padding: "16px 14px", appearance: "none", cursor: "pointer" }), color: gender ? TEXT_DARK : "#A0A0A0" }}
            className="focus:border-[#1F2A44]">
            <option value="" disabled>Select one...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography sx={{ fontFamily: "'Inter'", fontSize: "13px", color: TEXT_MUTED }}>
            Book your slot. Our team will call you soon to confirm your slot.
          </Typography>
        </Box>

        <button onClick={handleSaveProfile} disabled={status === "submitting"}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "fit-content", minWidth: "180px", height: "48px", background: NAVY, borderRadius: "8px", border: "none", color: "#FFFFFF", fontFamily: "'Lilex'", fontSize: "14px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.5px", cursor: "pointer", transition: "all 0.25s", marginTop: "8px" }}
          className="hover:bg-[#151c2e] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed">
          {status === "submitting" ? <><Spinner /> SAVING...</> : "PROCEED TO PAY"}
        </button>
        <ErrorBox />
      </Box>
    );
  };

  return (
    <Box className="h-auto relative w-full flex flex-col items-start leading-[normal] tracking-[normal] bg-[#F1F2F1]">
      <Box className="sticky top-0 z-[100] w-full bg-[#FFFFFF] shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
        <Navbar />
      </Box>

      <Box className="w-full flex flex-col items-center py-[60px] px-6 box-border">
        <Box sx={{ width: "100%", maxWidth: "808px", bgcolor: "#FFFFFF", borderRadius: "24px", boxShadow: "0 1px 12px rgba(0,0,0,0.04)", overflow: "hidden" }}>
          {/* Step Progress */}
          <Box sx={{ px: { xs: 3, sm: 5 }, pt: { xs: 3, sm: 4 } }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0, justifyContent: "center", mb: 3 }}>
              {stepLabels.map((label, i) => (
                <Box key={label} sx={{ display: "flex", alignItems: "center" }}>
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                    <Box sx={{
                      width: "32px", height: "32px", borderRadius: "50%",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      bgcolor: i <= currentIdx ? NAVY : "#E6E6E6",
                      color: i <= currentIdx ? "#FFFFFF" : TEXT_MUTED,
                      fontFamily: "'Inter'", fontSize: "13px", fontWeight: 600,
                      transition: "all 0.3s",
                    }}>
                      {i < currentIdx ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : i + 1}
                    </Box>
                    <Typography sx={{ fontFamily: "'Inter'", fontSize: "11px", color: i <= currentIdx ? NAVY : TEXT_MUTED, fontWeight: i === currentIdx ? 600 : 400, textTransform: "uppercase", letterSpacing: "0.3px" }}>
                      {label}
                    </Typography>
                  </Box>
                  {i < stepLabels.length - 1 && (
                    <Box sx={{
                      width: { xs: "16px", sm: "36px" }, height: "2px",
                      bgcolor: i < currentIdx ? NAVY : "#E6E6E6", mx: "4px", mb: "18px",
                      transition: "all 0.3s",
                    }} />
                  )}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Header */}
          <Box sx={{ px: { xs: 3, sm: 5 }, mb: 2 }}>
            <Box sx={{ mb: 1.5 }}>
              <SectionBadge
                icon="/SVG.svg"
                label={step === "book" ? "CONFIRM APPOINTMENT" : step === "form" ? "YOUR DETAILS" : step === "success" ? (bookingResult ? "BOOKING CONFIRMED" : "DONE") : "BOOK APPOINTMENT"}
                variant="dark"
              />
            </Box>
            <Typography sx={{ fontFamily: "'Stack Sans Text'", fontSize: { xs: "32px", sm: "42px" }, fontWeight: 400, color: TEXT_DARK, letterSpacing: "-0.5px" }}>
              {step === "book" ? "Confirm Appointment" : step === "form" ? "Your Details" : step === "success" ? "All Set!" : "Book an Appointment"}
            </Typography>
          </Box>

          <Box sx={{ height: "1px", bgcolor: BORDER, mx: { xs: 3, sm: 5 } }} />

          <Box sx={{ px: { xs: 3, sm: 5 }, py: { xs: 3, sm: 4 } }}>
            {renderContent()}
          </Box>
        </Box>
      </Box>

      <Box className="w-full pb-[80px]">
        <Background1 className="!bg-web-white" icon="/Vector(2).png" />
      </Box>
      <Box className="w-full bg-[#ffffff]"><Section6 /></Box>
      <Box className="w-full overflow-hidden flex flex-col items-start isolate shrink-0 max-w-full bg-[#ffffff]"><Section3 /></Box>
      <Box className="w-full"><Section7 /></Box>
    </Box>
  );
};

export default BookAppointment;
