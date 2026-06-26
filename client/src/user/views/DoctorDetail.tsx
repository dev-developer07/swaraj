import { type FunctionComponent, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Section3 from "../components/Section3";
import Background1 from "../components/Background1";
import Section7 from "../components/Section7";
import { DOCTORS_DATA } from "./MeetTheTeam";

const DoctorDetail: FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const doctor = DOCTORS_DATA.find((doc) => doc.id === Number(id));

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!doctor) {
    return (
      <Box className="w-full min-h-screen bg-web-white flex flex-col items-center justify-center gap-6">
        <Typography variant="h4" className="font-stack-sans-text uppercase text-[#0B0C0F]">
          Doctor Not Found
        </Typography>
        <button
          onClick={() => navigate("/meet-the-team")}
          className="flex items-center gap-2 px-6 py-3 bg-[#1F2A44] text-[#FFFFFF] font-lilex text-[16px] leading-[24px] uppercase rounded-[8px] border-none cursor-pointer hover:bg-[#151c2e] active:scale-[0.98] transition-all duration-300"
        >
          Back to Meet the Team
        </button>
      </Box>
    );
  }

  return (
    <Box className="h-auto relative w-full flex flex-col items-start !pt-num-0 !pb-[0.1px] !pl-num-0 !pr-num-0 box-border leading-[normal] tracking-[normal] bg-[#FFFFFF]">
      <Box className="sticky top-0 z-[100] w-full bg-[#FFFFFF] shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
        <Navbar />
      </Box>

      {/* Main content container */}
      <Box className="w-full flex flex-col items-center py-20 px-[280px] mq925:px-10 mq1350:px-[140px] mq925:py-10 box-border relative bg-[#ffffff]">
        <Box className="w-full max-w-[1360px] flex flex-col items-start gap-10">
          
          {/* Back to Team Link */}
          <button
            onClick={() => navigate("/meet-the-team")}
            className="group flex items-center gap-2 text-[#7791A5] font-lilex font-normal text-[16px] leading-[24px] uppercase bg-transparent border-none cursor-pointer outline-none hover:text-[#1F2A44] transition-colors duration-200"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transform group-hover:-translate-x-1 transition-transform duration-200"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Team
          </button>

          {/* Columns Flex Container */}
          <Box className="w-full flex flex-row justify-between items-start gap-12 mq1350:flex-col mq1350:items-stretch relative">
            
            {/* Left Column - Doctor Info */}
            <Box
              className="flex-1 max-w-[640px] flex flex-col items-start gap-10 relative box-border"
              style={{ paddingTop: "56px" }}
            >
              
              {/* Doctor Info Badge */}
              <Box
                className="flex flex-row items-center bg-[#F1F2F1] rounded-[4px] absolute left-0 select-none"
                style={{
                  padding: "4px 8px 4px 6px",
                  gap: "4px",
                  width: "144px",
                  height: "32px",
                  top: "12px",
                }}
              >
                <Box
                  className="flex flex-col justify-center items-start flex-none order-0 grow-0"
                  style={{ width: "20px", height: "20px", padding: 0 }}
                >
                  <img
                    className="self-stretch grow flex-none order-0"
                    style={{ width: "20px", height: "20px" }}
                    alt=""
                    src="/SVG.svg"
                  />
                </Box>
                <Box
                  className="flex flex-col items-start flex-none order-1 grow-0"
                  style={{ width: "106px", height: "24px", padding: 0 }}
                >
                  <span
                    className="flex items-center text-left font-lilex font-medium text-[16px] leading-[24px] uppercase text-[#0B0C0F] flex-none order-0 grow-0"
                    style={{ width: "106px", height: "24px" }}
                  >
                    DOCTOR INFO
                  </span>
                </Box>
              </Box>

              {/* Name and Specialty Header */}
              <Box className="flex flex-col items-start gap-3 w-full border-b border-[#E6E6E6] pb-8">
                <Typography
                  className="!m-0 text-left font-stack-sans-text uppercase"
                  variant="inherit"
                  variantMapping={{ inherit: "h1" }}
                  sx={{
                    fontWeight: "600",
                    fontSize: "48px",
                    lineHeight: "58px",
                    letterSpacing: "-1.5px",
                    color: "#0B0C0F",
                  }}
                >
                  {doctor.name}
                </Typography>
                <Typography
                  className="text-left font-inter font-normal text-[20px] leading-[30px] text-[#505050]"
                >
                  {doctor.specialty} · {doctor.qualifications.split(" · ")[1] || "Senior Consultant"}
                </Typography>
              </Box>

              {/* Bio Paragraphs */}
              <Box className="flex flex-col items-start gap-6 w-full text-left font-inter font-normal text-[18px] leading-[28px] text-[#505050]">
                <p className="m-0">
                  With over 10 years of clinical experience, {doctor.name} brings specialist expertise and a patient-first approach to every consultation. Having trained at leading medical institutions across India, they deliver care that meets the highest standards of diagnosis and treatment.
                </p>
                <p className="m-0">
                  At Swaraj Hospital, we believe medicine is as much about listening as it is about treating. {doctor.name} takes time to understand each patient's history, concerns and goals — ensuring every decision is informed, transparent and compassionate.
                </p>
                <p className="m-0">
                  An active contributor to medical research and continuing education, {doctor.name} is committed to bringing the latest evidence-based practices to the families of western Odisha.
                </p>
              </Box>

              {/* Qualification Badges */}
              <Box className="flex flex-wrap items-start gap-4 w-full pt-4">
                <Box
                  className="rounded-[4px] w-max flex items-center justify-center gap-3 bg-[#f1f2f1]"
                  style={{ height: "48px", paddingLeft: "36px", paddingRight: "36px" }}
                >
                  <Box className="rounded-full h-2.5 w-2.5 bg-[#7791a5]" />
                  <span className="font-lilex font-normal text-[14px] leading-[20px] uppercase text-[#0B0C0F]">
                    BOARD CERTIFIED
                  </span>
                </Box>
                <Box
                  className="rounded-[4px] w-max flex items-center justify-center gap-3 bg-[#f1f2f1]"
                  style={{ height: "48px", paddingLeft: "36px", paddingRight: "36px" }}
                >
                  <Box className="rounded-full h-2.5 w-2.5 bg-[#7791a5]" />
                  <span className="font-lilex font-normal text-[14px] leading-[20px] uppercase text-[#0B0C0F]">
                    MBBS
                  </span>
                </Box>
                <Box
                  className="rounded-[4px] w-max flex items-center justify-center gap-3 bg-[#f1f2f1]"
                  style={{ height: "48px", paddingLeft: "36px", paddingRight: "36px" }}
                >
                  <Box className="rounded-full h-2.5 w-2.5 bg-[#7791a5]" />
                  <span className="font-lilex font-normal text-[14px] leading-[20px] uppercase text-[#0B0C0F]">
                    {doctor.qualifications.split(",")[1]?.trim()?.split(" · ")[0] || "MD / MS / DM"}
                  </span>
                </Box>
                <Box
                  className="rounded-[4px] w-max flex items-center justify-center gap-3 bg-[#f1f2f1]"
                  style={{ height: "48px", paddingLeft: "36px", paddingRight: "36px" }}
                >
                  <Box className="rounded-full h-2.5 w-2.5 bg-[#7791a5]" />
                  <span className="font-lilex font-normal text-[14px] leading-[20px] uppercase text-[#0B0C0F]">
                    10 YRS EXPERIENCE
                  </span>
                </Box>
              </Box>

              {/* Contacts Info */}
              <Box className="flex flex-col items-start gap-4 w-full pt-6 border-t border-[#E6E6E6]">
                <Typography className="text-left font-lilex font-semibold text-[20px] leading-[30px] text-[#0B0C0F] uppercase tracking-[0.5px]">
                  Contacts
                </Typography>
                <Box className="flex flex-col items-start gap-3 w-full">
                  <Box className="flex items-center gap-3">
                    <Box className="rounded-full h-2 w-2 bg-[#7791a5] shrink-0" />
                    <span className="font-inter font-normal text-[18px] leading-[28px] text-[#505050]">
                      info@swarajhospital.in
                    </span>
                  </Box>
                  <Box className="flex items-center gap-3">
                    <Box className="rounded-full h-2 w-2 bg-[#7791a5] shrink-0" />
                    <span className="font-inter font-normal text-[18px] leading-[28px] text-[#505050]">
                      +91 63708 22507
                    </span>
                  </Box>
                </Box>
              </Box>

              {/* Make an Appointment Button */}
              <button
                onClick={() => alert(`Booking an appointment with ${doctor.name}...`)}
                className="flex flex-row justify-center items-center gap-4 w-full max-w-[340px] h-[56px] bg-[#1f2a44] rounded-[8px] border-none cursor-pointer hover:bg-[#151c2e] active:scale-[0.98] transition-all duration-300 outline-none mt-4 shrink-0"
              >
                <span className="font-lilex font-medium text-[16px] leading-[24px] uppercase text-[#FFFFFF] text-left align-middle w-max">
                  Make an Appointment
                </span>
                <div className="w-[32px] h-[32px] rounded-full bg-[#000000]/10 flex items-center justify-center shrink-0">
                  <div className="w-[12px] h-[12px] rounded-full bg-[#FFFFFF]/20 flex items-center justify-center">
                    <div className="w-[6px] h-[6px] rounded-full bg-[#FFFFFF]" />
                  </div>
                </div>
              </button>

            </Box>

            {/* Right Column - Large Image */}
            <Box
              className="flex items-center justify-center relative box-border shrink-0 mq1350:w-full"
              style={{ width: "750.2px" }}
            >
              <Box 
                className="rounded-[12px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative flex items-center justify-center bg-[#F1F2F1]"
                style={{ width: "750.2px", height: "751.3px" }}
              >
                <img
                  className="w-full h-full object-cover object-center"
                  src={doctor.image}
                  alt={doctor.name}
                />
              </Box>
            </Box>

          </Box>
        </Box>
      </Box>

      {/* Our Specialists Section */}
      <Box 
        className="w-full flex flex-col items-center px-[280px] mq925:px-10 mq1350:px-[140px] box-border relative bg-[#ffffff]"
        style={{ paddingTop: "240px", paddingBottom: "240px" }}
      >
        <Box className="w-full max-w-[1360px] flex flex-row justify-between items-start gap-[80px] mq1350:flex-col mq1350:items-stretch">
          
          {/* Left Column */}
          <Box className="flex flex-col items-start w-[550px] mq1350:w-full">
            {/* Badge */}
            <Box
              className="flex flex-row items-center bg-[#F1F2F1] rounded-[4px] select-none"
              style={{
                padding: "4px 8px 4px 6px",
                gap: "4px",
                width: "max-content",
                height: "32px",
              }}
            >
              <Box
                className="flex flex-col justify-center items-start flex-none"
                style={{ width: "20px", height: "20px" }}
              >
                <img
                  style={{ width: "20px", height: "20px" }}
                  alt=""
                  src="/SVG.svg"
                />
              </Box>
              <span
                className="flex items-center text-left font-lilex font-medium text-[16px] leading-[24px] uppercase text-[#0B0C0F] whitespace-nowrap"
              >
                our SPECIALISTS
              </span>
            </Box>

            {/* Title */}
            <Typography
              className="!m-0 text-left font-stack-sans-text uppercase"
              variant="inherit"
              variantMapping={{ inherit: "h2" }}
              sx={{
                fontWeight: "600",
                fontSize: "48px",
                lineHeight: "58px",
                letterSpacing: "-1.5px",
                color: "#0B0C0F",
                paddingTop: "24px",
              }}
            >
              The Team<br />Behind the Care
            </Typography>

            {/* Subtitle */}
            <Typography
              className="text-left font-inter font-normal text-[18px] leading-[28px] text-[#505050]"
              sx={{ paddingTop: "44px" }}
            >
              From emergency medicine to advanced surgery, our specialists cover every dimension of your family's health.
            </Typography>
          </Box>

          {/* Right Column - Specialists Grid */}
          <Box className="w-[730px] max-w-full mq1350:w-full flex flex-col items-start">
            <Box
              className="grid gap-[12px] w-full"
              sx={{
                gridTemplateColumns: "repeat(2, 359px)",
                "@media (max-width: 925px)": {
                  gridTemplateColumns: "1fr",
                },
              }}
            >
              
              {/* Card 1: Dr. Suraj Samal */}
              <Box
                onClick={() => navigate("/doctor/2")}
                className="bg-[#f1f2f1] rounded-[16px] flex flex-row justify-between items-center cursor-pointer hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300"
                style={{
                  width: "100%",
                  maxWidth: "359px",
                  height: "120px",
                  padding: "16px",
                  boxSizing: "border-box",
                }}
              >
                <Box className="flex flex-col justify-between items-start h-full flex-1">
                  <Box className="w-1.5 h-1.5 bg-[#0B0C0F]" />
                  <Box className="flex flex-col gap-0.5 pr-2">
                    <Typography
                      className="font-lilex font-semibold text-[13px] leading-[18px] uppercase text-[#0B0C0F]"
                    >
                      DR. SURAJ SAMAL
                    </Typography>
                    <Typography
                      className="font-inter font-normal text-[11px] leading-[14px] text-[#505050]"
                    >
                      Neurology
                    </Typography>
                  </Box>
                </Box>
                <Box
                  className="overflow-hidden bg-[#E6E6E6] shrink-0"
                  style={{
                    width: "88px",
                    height: "88px",
                    borderRadius: "4px",
                  }}
                >
                  <img
                    src="/Container8@2x.png"
                    alt="DR. SURAJ SAMAL"
                    className="w-full h-full object-cover"
                  />
                </Box>
              </Box>

              {/* Card 2: DR. Priyanka Patra */}
              <Box
                onClick={() => navigate("/doctor/3")}
                className="bg-[#f1f2f1] rounded-[16px] flex flex-row justify-between items-center cursor-pointer hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300"
                style={{
                  width: "100%",
                  maxWidth: "359px",
                  height: "120px",
                  padding: "16px",
                  boxSizing: "border-box",
                }}
              >
                <Box className="flex flex-col justify-between items-start h-full flex-1">
                  <Box className="w-1.5 h-1.5 bg-[#0B0C0F]" />
                  <Box className="flex flex-col gap-0.5 pr-2">
                    <Typography
                      className="font-lilex font-semibold text-[13px] leading-[18px] uppercase text-[#0B0C0F]"
                    >
                      DR. PRIYANKA PATRA
                    </Typography>
                    <Typography
                      className="font-inter font-normal text-[11px] leading-[14px] text-[#505050]"
                    >
                      Obstetrics & Gynaecology
                    </Typography>
                  </Box>
                </Box>
                <Box
                  className="overflow-hidden bg-[#E6E6E6] shrink-0"
                  style={{
                    width: "88px",
                    height: "88px",
                    borderRadius: "4px",
                  }}
                >
                  <img
                    src="/Container6@2x.png"
                    alt="DR. PRIYANKA PATRA"
                    className="w-full h-full object-cover"
                  />
                </Box>
              </Box>

              {/* Card 3: DR. Anuradha Acharya */}
              <Box
                onClick={() => navigate("/doctor/4")}
                className="bg-[#f1f2f1] rounded-[16px] flex flex-row justify-between items-center cursor-pointer hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300"
                style={{
                  width: "100%",
                  maxWidth: "359px",
                  height: "120px",
                  padding: "16px",
                  boxSizing: "border-box",
                }}
              >
                <Box className="flex flex-col justify-between items-start h-full flex-1">
                  <Box className="w-1.5 h-1.5 bg-[#0B0C0F]" />
                  <Box className="flex flex-col gap-0.5 pr-2">
                    <Typography
                      className="font-lilex font-semibold text-[13px] leading-[18px] uppercase text-[#0B0C0F]"
                    >
                      DR. ANURADHA ACHARYA
                    </Typography>
                    <Typography
                      className="font-inter font-normal text-[11px] leading-[14px] text-[#505050]"
                    >
                      Orthopaedics & Joint Replacement
                    </Typography>
                  </Box>
                </Box>
                <Box
                  className="overflow-hidden bg-[#E6E6E6] shrink-0"
                  style={{
                    width: "88px",
                    height: "88px",
                    borderRadius: "4px",
                  }}
                >
                  <img
                    src="/Container9@2x.png"
                    alt="DR. ANURADHA ACHARYA"
                    className="w-full h-full object-cover"
                  />
                </Box>
              </Box>

              {/* Card 4: DR. Barsha Dash */}
              <Box
                onClick={() => navigate("/doctor/5")}
                className="bg-[#f1f2f1] rounded-[16px] flex flex-row justify-between items-center cursor-pointer hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300"
                style={{
                  width: "100%",
                  maxWidth: "359px",
                  height: "120px",
                  padding: "16px",
                  boxSizing: "border-box",
                }}
              >
                <Box className="flex flex-col justify-between items-start h-full flex-1">
                  <Box className="w-1.5 h-1.5 bg-[#0B0C0F]" />
                  <Box className="flex flex-col gap-0.5 pr-2">
                    <Typography
                      className="font-lilex font-semibold text-[13px] leading-[18px] uppercase text-[#0B0C0F]"
                    >
                      DR. BARSHA DASH
                    </Typography>
                    <Typography
                      className="font-inter font-normal text-[11px] leading-[14px] text-[#505050]"
                    >
                      Pediatrics & Neonatology
                    </Typography>
                  </Box>
                </Box>
                <Box
                  className="overflow-hidden bg-[#E6E6E6] shrink-0"
                  style={{
                    width: "88px",
                    height: "88px",
                    borderRadius: "4px",
                  }}
                >
                  <img
                    src="/Container10@2x.png"
                    alt="DR. BARSHA DASH"
                    className="w-full h-full object-cover"
                  />
                </Box>
              </Box>

            </Box>
          </Box>

        </Box>
      </Box>

      {/* Advanced Hospitality Care Section */}
      <Box className="w-full overflow-hidden flex flex-col items-start isolate shrink-0 max-w-full bg-[#FFFFFF]">
        <Section3 />
        <Background1 />
      </Box>

      {/* Footer */}
      <Section7 />
    </Box>
  );
};

export default DoctorDetail;
