import { type FunctionComponent, useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Section3 from "../components/Section3";
import Section6 from "../components/Section6";
import Background1 from "../components/Background1";
import Section7 from "../components/Section7";
import { submitLead, getPublicDoctors } from "../../services/user.service";

type FormStatus = "idle" | "submitting" | "success" | "error";

const AppointmentInquiry: FunctionComponent = () => {
  const [searchParams] = useSearchParams();
  const preselectedDoctorId = searchParams.get("doctor");

  // ─── Form State ───────────────────────────────────────────
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [doctorId, setDoctorId] = useState(preselectedDoctorId || "");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [doctors, setDoctors] = useState<any[]>([]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Set default doctor from URL params
  useEffect(() => {
    if (preselectedDoctorId) {
      setDoctorId(preselectedDoctorId);
    }
  }, [preselectedDoctorId]);

  // Fetch doctors list from backend
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await getPublicDoctors();
        if (res.success && Array.isArray(res.data)) {
          setDoctors(res.data);
        }
      } catch (err) {
        console.error("Error fetching doctors:", err);
      }
    };
    fetchDoctors();
  }, []);

  const handleSubmit = async () => {
    // Validation
    if (!name.trim()) {
      setErrorMessage("Name is required");
      setStatus("error");
      return;
    }
    if (!phone.trim()) {
      setErrorMessage("Phone number is required");
      setStatus("error");
      return;
    }
    if (!preferredDate) {
      setErrorMessage("Preferred date is required");
      setStatus("error");
      return;
    }
    if (!doctorId) {
      setErrorMessage("Please select a doctor");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      await submitLead({
        name: name.trim(),
        phone: phone.trim(),
        preferredDate,
        doctorId,
        notes: message.trim() || undefined,
      });

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(
        err?.message || "Something went wrong. Please try again."
      );
    }
  };

  // Get today's date for min date
  const today = new Date().toISOString().split("T")[0];

  return (
    <Box className="h-auto relative w-full flex flex-col items-start !pt-num-0 !pb-[0.1px] !pl-num-0 !pr-num-0 box-border leading-[normal] tracking-[normal] bg-[#F1F2F1]">
      {/* Sticky Navbar */}
      <Box className="sticky top-0 z-[100] w-full bg-[#FFFFFF] shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
        <Navbar />
      </Box>

      {/* ─── Inquiry Form Section ─────────────────────────────── */}
      <Box className="w-full flex flex-col items-center !py-[80px] !px-6 box-border mq925:!py-10 mq450:!py-6">
        {/* Figma styled Box container */}
        <Box 
          style={{
            width: "100%",
            maxWidth: "808px",
            background: "#FFFFFF",
            borderRadius: "24px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "36px 32px 40px",
            gap: "24px"
          }}
          className="shadow-[0_4px_30px_rgba(0,0,0,0.03)] mq925:!p-6 mq450:!p-4 mq925:!gap-5 mq450:!gap-4"
        >
          {/* Badge: GET AN Appointment */}
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "4px 8px 4px 6px",
              gap: "4px",
              width: "max-content",
              height: "32px",
              background: "#F1F2F1",
              borderRadius: "4px",
              boxSizing: "border-box"
            }}
          >
            {/* Badge Icon Container */}
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                padding: "0px",
                width: "20px",
                height: "20px"
              }}
            >
              <img
                style={{
                  width: "20px",
                  height: "20px",
                  alignSelf: "stretch",
                  flexGrow: 1
                }}
                alt=""
                src="/SVG.svg"
              />
            </Box>

            {/* Badge Text */}
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0px"
              }}
            >
              <span
                style={{
                  height: "24px",
                  fontFamily: "'Lilex'",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "24px",
                  display: "flex",
                  alignItems: "center",
                  textTransform: "uppercase",
                  color: "#0B0C0F",
                  whiteSpace: "nowrap"
                }}
              >
                GET AN Appointment
              </span>
            </Box>
          </Box>

          {/* Heading 1 */}
          <h1
            style={{
              width: "100%",
              maxWidth: "612.12px",
              margin: 0,
              fontFamily: "'Stack Sans Text'",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "64px",
              lineHeight: "77px",
              display: "flex",
              alignItems: "center",
              letterSpacing: "-1.5px",
              color: "#0B0C0F"
            }}
            className="mq925:!text-[32px] mq925:!leading-[40px] mq450:!text-[28px] mq450:!leading-[36px]"
          >
            Appointment Inquiry
          </h1>

          {/* Horizontal Divider */}
          <Box style={{ width: "100%", height: "1px", background: "#E6E6E6" }} />

          {/* Success State Overlay */}
          {status === "success" ? (
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "24px 28px",
                width: "100%",
                background: "#F1F2F1",
                borderRadius: "12px",
                boxSizing: "border-box"
              }}
              className="mq925:!p-6 mq450:!p-4"
            >
              <span
                style={{
                  fontFamily: "'Inter'",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "22px",
                  lineHeight: "33px",
                  color: "#0B0C0F"
                }}
                className="mq925:!text-[18px] mq925:!leading-[26px] mq450:!text-[16px] mq450:!leading-[24px]"
              >
                Thank you! Your submission has been received!
              </span>
            </Box>
          ) : (
            /* Form Container */
            <Box
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0px",
                gap: "24px"
              }}
            >
              {/* Row 1: Name + Phone Number */}
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  padding: "0px",
                  gap: "16px",
                  width: "100%"
                }}
                className="w-full flex flex-row mq925:!flex-col mq925:!gap-6 mq450:!flex-col mq450:!gap-5"
              >
                {/* Name */}
                <Box style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px", gap: "12px", flexGrow: 1 }} className="w-full">
                  <Box style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px 0px 5px", width: "100%", height: "29px" }}>
                    <label style={{ width: "100%", height: "24px", fontFamily: "'Lilex'", fontStyle: "normal", fontWeight: "500", fontSize: "16px", lineHeight: "24px", display: "flex", alignItems: "center", textTransform: "uppercase", color: "#1F2A44" }}>
                      Name *
                    </label>
                  </Box>
                  <input
                    type="text"
                    placeholder="Enter your legal name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      padding: "14px 12px",
                      width: "100%",
                      height: "50px",
                      background: "#F1F2F1",
                      border: "1px solid #E6E6E6",
                      borderRadius: "12px",
                      outline: "none",
                      fontFamily: "'Inter'",
                      fontSize: "16px",
                      color: "#0B0C0F"
                    }}
                    className="placeholder:text-[#7E7F80] focus:border-[#1F2A44] focus:bg-[#FFFFFF] transition-all duration-200"
                  />
                </Box>

                {/* Phone Number */}
                <Box style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px", gap: "12px", flexGrow: 1 }} className="w-full">
                  <Box style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px 0px 5px", width: "100%", height: "29px" }}>
                    <label style={{ width: "100%", height: "24px", fontFamily: "'Lilex'", fontStyle: "normal", fontWeight: "500", fontSize: "16px", lineHeight: "24px", display: "flex", alignItems: "center", textTransform: "uppercase", color: "#1F2A44" }}>
                      Phone Number *
                    </label>
                  </Box>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      padding: "14px 12px",
                      width: "100%",
                      height: "50px",
                      background: "#F1F2F1",
                      border: "1px solid #E6E6E6",
                      borderRadius: "12px",
                      outline: "none",
                      fontFamily: "'Inter'",
                      fontSize: "16px",
                      color: "#0B0C0F"
                    }}
                    className="placeholder:text-[#7E7F80] focus:border-[#1F2A44] focus:bg-[#FFFFFF] transition-all duration-200"
                  />
                </Box>
              </Box>

              {/* Row 2: Preferred Date + Select Doctor */}
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  padding: "0px",
                  gap: "16px",
                  width: "100%"
                }}
                className="w-full flex flex-row mq925:!flex-col mq925:!gap-6 mq450:!flex-col mq450:!gap-5"
              >
                {/* Preferred Date */}
                <Box style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px", gap: "12px", flexGrow: 1 }} className="w-full">
                  <Box style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px 0px 5px", width: "100%", height: "29px" }}>
                    <label style={{ width: "100%", height: "24px", fontFamily: "'Lilex'", fontStyle: "normal", fontWeight: "500", fontSize: "16px", lineHeight: "24px", display: "flex", alignItems: "center", textTransform: "uppercase", color: "#1F2A44" }}>
                      Preferred Date *
                    </label>
                  </Box>
                  <input
                    type="date"
                    min={today}
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      padding: "14px 12px",
                      width: "100%",
                      height: "50px",
                      background: "#F1F2F1",
                      border: "1px solid #E6E6E6",
                      borderRadius: "12px",
                      outline: "none",
                      fontFamily: "'Inter'",
                      fontSize: "16px",
                      color: "#0B0C0F",
                      cursor: "pointer"
                    }}
                    className="placeholder:text-[#7E7F80] focus:border-[#1F2A44] focus:bg-[#FFFFFF] transition-all duration-200"
                  />
                </Box>

                {/* Select Doctor */}
                <Box style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px", gap: "12px", flexGrow: 1 }} className="w-full">
                  <Box style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px 0px 5px", width: "100%", height: "29px" }}>
                    <label style={{ width: "100%", height: "24px", fontFamily: "'Lilex'", fontStyle: "normal", fontWeight: "500", fontSize: "16px", lineHeight: "24px", display: "flex", alignItems: "center", textTransform: "uppercase", color: "#1F2A44" }}>
                      SELECT DOCTOR *
                    </label>
                  </Box>
                  <Box style={{ position: "relative", width: "100%" }}>
                    <select
                      value={doctorId}
                      onChange={(e) => setDoctorId(e.target.value)}
                      style={{
                        boxSizing: "border-box",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        padding: "12px 28px 12px 16px",
                        width: "100%",
                        height: "50px",
                        background: "#F1F2F1",
                        border: "1px solid #E6E6E6",
                        borderRadius: "12px",
                        outline: "none",
                        fontFamily: "'Inter'",
                        fontSize: "16px",
                        color: doctorId ? "#0B0C0F" : "#7E7F80",
                        appearance: "none",
                        cursor: "pointer"
                      }}
                      className="focus:border-[#1F2A44] focus:bg-[#FFFFFF] transition-all duration-200"
                    >
                      <option value="" disabled>Select one...</option>
                      {doctors.map((doc) => (
                        <option key={doc.id} value={String(doc.id)} style={{ color: "#0B0C0F" }}>
                          {doc.name} — {doc.specialization?.name || doc.specializationId}
                        </option>
                      ))}
                    </select>
                    <Box className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                      <svg className="fill-current h-4 w-4 text-[#7E7F80]" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Row 3: Write Message */}
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "0px",
                  gap: "8px",
                  width: "100%"
                }}
              >
                <span
                  style={{
                    fontFamily: "'Lilex'",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "20px",
                    display: "flex",
                    alignItems: "center",
                    textTransform: "uppercase",
                    color: "#1F2A44"
                  }}
                >
                  WRITE MESSAGE
                </span>
                <textarea
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    padding: "16px",
                    width: "100%",
                    height: "180px",
                    background: "#F1F2F1",
                    border: "1px solid #E6E6E6",
                    borderRadius: "12px",
                    outline: "none",
                    fontFamily: "'Inter'",
                    fontSize: "16px",
                    color: "#0B0C0F",
                    resize: "none"
                  }}
                  className="focus:border-[#1F2A44] focus:bg-[#FFFFFF] transition-all duration-200 placeholder:text-[#7E7F80]"
                />
                <span
                  style={{
                    fontFamily: "'Inter'",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: "#0B0C0F",
                    marginTop: "4px"
                  }}
                  className="mq925:!leading-[20px] mq450:!leading-[20px]"
                >
                  Request only. Our team will call you soon to confirm your slot.
                </span>
              </Box>

              {/* Submit Button Section */}
              <Box 
                style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "8px 0px 0px", width: "100%" }}
                className="w-full"
              >
                <button
                  onClick={handleSubmit}
                  disabled={status === "submitting"}
                  style={{
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "12px 20px",
                    width: "213px",
                    height: "48px",
                    background: "#1F2A44",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    outline: "none"
                  }}
                  className="hover:bg-[#151c2e] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed mq925:!w-full mq450:!w-full"
                >
                  <span
                    style={{
                      width: "100%",
                      fontFamily: "'Lilex'",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#FFFFFF",
                      textAlign: "center",
                      textTransform: "uppercase",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    {status === "submitting" ? "PLEASE WAIT..." : "GET AN APPOINTMENT"}
                  </span>
                </button>
              </Box>

              {/* Error Message */}
              {status === "error" && errorMessage && (
                <Box className="w-[100%] rounded-[8px] bg-[#FEF2F2] border border-solid border-[#FECACA] flex items-center gap-3"
                  style={{ padding: "12px 16px", marginTop: "8px" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                  <span className="font-inter text-[14px] text-[#ef4444]">{errorMessage}</span>
                </Box>
              )}
            </Box>
          )}
        </Box>
      </Box>

      {/* ─── Scrolling Ticker Banner ──────────────────────────── */}
      <Box className="w-full !pb-[80px]">
        <Background1 className="!bg-web-white" icon="/Vector(2).png" />
      </Box>

      {/* ─── FAQ Section ──────────────────────────────────────── */}
      <Box className="w-full bg-[#ffffff]">
        <Section6 />
      </Box>

      {/* ─── Advanced Multispecialty Care ──────────────────────── */}
      <Box className="w-full overflow-hidden flex flex-col items-start isolate shrink-0 max-w-full bg-[#ffffff]">
        <Section3 />
      </Box>

      {/* ─── Footer ───────────────────────────────────────────── */}
      <Box className="w-full">
        <Section7 />
      </Box>
    </Box>
  );
};

export default AppointmentInquiry;
