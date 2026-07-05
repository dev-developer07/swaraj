import { type FunctionComponent, useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Section3 from "../components/Section3";
import Section6 from "../components/Section6";
import Background1 from "../components/Background1";
import Section7 from "../components/Section7";
import { DOCTORS_DATA } from "./MeetTheTeam";
import { submitLead } from "../../services/user.service";

type FormStatus = "idle" | "submitting" | "success" | "error";

const AppointmentInquiry: FunctionComponent = () => {
  const [searchParams] = useSearchParams();
  const preselectedDoctorId = searchParams.get("doctor");

  // ─── Form State ───────────────────────────────────────────
  const [name, setName] = useState("");
  const [careof, setCareof] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [doctorId, setDoctorId] = useState(preselectedDoctorId || "");
  const [gender, setGender] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleSubmit = async () => {
    // Validation
    if (!name.trim()) {
      setErrorMessage("Name is required");
      setStatus("error");
      return;
    }
    if (!careof.trim()) {
      setErrorMessage("C/O Name is required");
      setStatus("error");
      return;
    }
    if (!age.trim()) {
      setErrorMessage("Age is required");
      setStatus("error");
      return;
    }
    if (!address.trim()) {
      setErrorMessage("Address is required");
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
    if (!gender) {
      setErrorMessage("Please select your gender");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const notes = [
        careof ? `C/O: ${careof}` : "",
        age ? `Age: ${age}` : "",
        address ? `Address: ${address}` : "",
        gender ? `Gender: ${gender}` : "",
        message || "",
      ]
        .filter(Boolean)
        .join(" | ");

      await submitLead({
        name: name.trim(),
        phone: phone.trim(),
        preferredDate,
        doctorId,
        notes: notes || undefined,
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
      <Box className="w-full flex flex-col items-center !py-[80px] !px-6 box-border">
        {/* Figma styled Box container */}
        <Box 
          style={{
            width: "100%",
            maxWidth: "808px",
            minHeight: "1149px",
            background: "#FFFFFF",
            borderRadius: "24px",
            position: "relative",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column"
          }}
          className="shadow-[0_4px_30px_rgba(0,0,0,0.03)] mq925:min-h-0 mq925:pb-10"
        >
          {/* Badge: GET AN Appointment */}
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "4px 12px 4px 6px",
              gap: "4px",
              position: "absolute",
              height: "32px",
              left: "24px",
              top: "36px",
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

          {/* Heading 1 Container */}
          <Box
            style={{
              position: "absolute",
              height: "76.8px",
              left: "24px",
              right: "24px",
              top: "92px",
              display: "flex",
              alignItems: "center"
            }}
          >
            <h1
              style={{
                width: "100%",
                maxWidth: "612.12px",
                height: "77px",
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
              className="mq925:text-[42px] mq925:leading-[52px]"
            >
              Appointment Inquiry
            </h1>
          </Box>

          {/* Horizontal Divider */}
          <Box
            style={{
              boxSizing: "border-box",
              position: "absolute",
              height: "2px",
              left: "24px",
              right: "24px",
              top: "206.8px",
              border: "1px solid #E6E6E6"
            }}
          />

          {/* Success State Overlay */}
          {status === "success" ? (
            <Box 
              style={{
                position: "absolute",
                left: "24px",
                right: "24px",
                top: "252.8px",
                bottom: "24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "24px"
              }}
            >
              <Box className="w-[72px] h-[72px] rounded-full bg-[#E8F5E9] flex items-center justify-center">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </Box>
              <Typography
                className="font-stack-sans-text text-center"
                sx={{ fontSize: "32px", lineHeight: "40px", fontWeight: 500, color: "#0B0C0F" }}
              >
                Inquiry Submitted!
              </Typography>
              <Typography
                className="font-inter text-center max-w-[440px]"
                sx={{ fontSize: "16px", lineHeight: "24px", color: "#505050" }}
              >
                Our team will call you soon to confirm your slot.
                Please keep your phone reachable.
              </Typography>
              <button
                onClick={() => {
                  setStatus("idle");
                  setName("");
                  setCareof("");
                  setAge("");
                  setAddress("");
                  setPhone("");
                  setPreferredDate("");
                  setDoctorId(preselectedDoctorId || "");
                  setGender("");
                  setMessage("");
                }}
                className="mt-4 flex items-center gap-2 px-8 py-3 bg-[#1F2A44] text-[#FFFFFF] font-lilex text-[16px] leading-[24px] uppercase rounded-[8px] border-none cursor-pointer hover:bg-[#151c2e] active:scale-[0.98] transition-all duration-300"
              >
                Submit Another
              </button>
            </Box>
          ) : (
            /* Form Container */
            <Box
              style={{
                position: "absolute",
                left: "24px",
                right: "24px",
                top: "252.8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0px",
                gap: "32px"
              }}
              className="mq925:position-relative mq925:top-0 mq925:left-0 mq925:right-0 mq925:!pt-[230px] mq925:px-6"
            >
              {/* Row 1: Name + C/O Name */}
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  padding: "0px",
                  gap: "16px",
                  width: "100%",
                  maxWidth: "760px"
                }}
                className="mq700:flex-col"
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

                {/* C/O Name */}
                <Box style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px", gap: "12px", flexGrow: 1 }} className="w-full">
                  <Box style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px 0px 5px", width: "100%", height: "29px" }}>
                    <label style={{ width: "100%", height: "24px", fontFamily: "'Lilex'", fontStyle: "normal", fontWeight: "500", fontSize: "16px", lineHeight: "24px", display: "flex", alignItems: "center", textTransform: "uppercase", color: "#1F2A44" }}>
                      C/O Name *
                    </label>
                  </Box>
                  <input
                    type="text"
                    placeholder="Enter name"
                    value={careof}
                    onChange={(e) => setCareof(e.target.value)}
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

              {/* Row 2: Age + Address */}
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  padding: "0px",
                  gap: "16px",
                  width: "100%",
                  maxWidth: "760px"
                }}
                className="mq700:flex-col"
              >
                {/* Age */}
                <Box style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px", gap: "12px", flexGrow: 1 }} className="w-full">
                  <Box style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px 0px 5px", width: "100%", height: "29px" }}>
                    <label style={{ width: "100%", height: "24px", fontFamily: "'Lilex'", fontStyle: "normal", fontWeight: "500", fontSize: "16px", lineHeight: "24px", display: "flex", alignItems: "center", textTransform: "uppercase", color: "#1F2A44" }}>
                      Age *
                    </label>
                  </Box>
                  <input
                    type="number"
                    placeholder="Enter your age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
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

                {/* Address */}
                <Box style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px", gap: "12px", flexGrow: 1 }} className="w-full">
                  <Box style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px 0px 5px", width: "100%", height: "29px" }}>
                    <label style={{ width: "100%", height: "24px", fontFamily: "'Lilex'", fontStyle: "normal", fontWeight: "500", fontSize: "16px", lineHeight: "24px", display: "flex", alignItems: "center", textTransform: "uppercase", color: "#1F2A44" }}>
                      Address *
                    </label>
                  </Box>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      padding: "12px 16px",
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

              {/* Row 3: Phone + Preferred Date */}
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  padding: "0px",
                  gap: "16px",
                  width: "100%",
                  maxWidth: "760px"
                }}
                className="mq700:flex-col"
              >
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
              </Box>

              {/* Row 4: Doctor + Gender */}
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  padding: "0px",
                  gap: "16px",
                  width: "100%",
                  maxWidth: "760px"
                }}
                className="mq700:flex-col"
              >
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
                      {DOCTORS_DATA.map((doc) => (
                        <option key={doc.id} value={String(doc.id)} style={{ color: "#0B0C0F" }}>
                          {doc.name} — {doc.specialty}
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

                {/* Gender */}
                <Box style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px", gap: "12px", flexGrow: 1 }} className="w-full">
                  <Box style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px 0px 5px", width: "100%", height: "29px" }}>
                    <label style={{ width: "100%", height: "24px", fontFamily: "'Lilex'", fontStyle: "normal", fontWeight: "500", fontSize: "16px", lineHeight: "24px", display: "flex", alignItems: "center", textTransform: "uppercase", color: "#1F2A44" }}>
                      Gender *
                    </label>
                  </Box>
                  <Box style={{ position: "relative", width: "100%" }}>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
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
                        color: gender ? "#0B0C0F" : "#7E7F80",
                        appearance: "none",
                        cursor: "pointer"
                      }}
                      className="focus:border-[#1F2A44] focus:bg-[#FFFFFF] transition-all duration-200"
                    >
                      <option value="" disabled>Select one...</option>
                      <option value="Male" style={{ color: "#0B0C0F" }}>Male</option>
                      <option value="Female" style={{ color: "#0B0C0F" }}>Female</option>
                      <option value="Other" style={{ color: "#0B0C0F" }}>Other</option>
                    </select>
                    <Box className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                      <svg className="fill-current h-4 w-4 text-[#7E7F80]" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Row 5: Message */}
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  padding: "0px",
                  width: "100%",
                  maxWidth: "760px",
                  height: "368px"
                }}
              >
                <Box style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px", gap: "12px", width: "100%", height: "368px" }}>
                  <Box style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px 0px 5px", width: "100%", height: "29px" }}>
                    <label style={{ width: "100%", height: "24px", fontFamily: "'Lilex'", fontStyle: "normal", fontWeight: "500", fontSize: "16px", lineHeight: "24px", display: "flex", alignItems: "center", textTransform: "uppercase", color: "#1F2A44" }}>
                      Write Message
                    </label>
                  </Box>
                  <textarea
                    placeholder="Enter your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      padding: "12px",
                      width: "100%",
                      height: "195px",
                      overflowY: "scroll",
                      background: "#F1F2F1",
                      border: "1px solid #E6E6E6",
                      borderRadius: "12px",
                      outline: "none",
                      fontFamily: "'Inter'",
                      fontSize: "16px",
                      color: "#0B0C0F",
                      resize: "none"
                    }}
                    className="focus:border-[#1F2A44] focus:bg-[#FFFFFF] transition-all duration-200"
                  />
                  <Box style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px", width: "100%", height: "24px" }}>
                    <span style={{ width: "100%", height: "24px", fontFamily: "'Inter'", fontStyle: "normal", fontWeight: "400", fontSize: "14px", lineHeight: "24px", display: "flex", alignItems: "center", color: "#0B0C0F" }}>
                      Request only. Our team will call you soon to confirm your slot.
                    </span>
                  </Box>

                  {/* Submit Button Section */}
                  <Box style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "36px 0px 0px", width: "100%", height: "84px" }}>
                    <Box style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "0px", width: "100%", height: "48px" }}>
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
                        className="hover:bg-[#151c2e] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        <span
                          style={{
                            width: "173px",
                            height: "24px",
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
                  </Box>
                </Box>
              </Box>

              {/* Error Message */}
              {status === "error" && errorMessage && (
                <Box className="w-[100%] max-w-[760px] rounded-[8px] bg-[#FEF2F2] border border-solid border-[#FECACA] flex items-center gap-3"
                  style={{ padding: "12px 16px", marginTop: "16px" }}
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
