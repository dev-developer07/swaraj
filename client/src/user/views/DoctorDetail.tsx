import { type FunctionComponent, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Section3 from "../components/Section3";
import Section7 from "../components/Section7";
import NavyButton from "../components/NavyButton";
import { getPublicDoctors } from "../../services/user.service";
import { parseDoctorSchedules } from "../../utils/scheduleUtils";

const FALLBACK_IMAGE = "/Container5@2x.png";

const DoctorDetail: FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState<any>(null);
  const [allDoctors, setAllDoctors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  useEffect(() => {
    (async () => {
      try {
        const res = await getPublicDoctors();
        if (res.success && Array.isArray(res.data)) {
          const active = res.data.filter((d: any) => d.isActive !== false);
          setAllDoctors(active);
          const found = active.find((d: any) => d.id === id);
          setDoctor(found || null);
        }
      } catch {
        setDoctor(null);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) {
    return (
      <Box className="w-full min-h-screen bg-web-white flex items-center justify-center">
        <svg className="animate-spin" width="40" height="40" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#E6E6E6" strokeWidth="3" />
          <path d="M12 2a10 10 0 0 1 10 10" stroke="#1F2A44" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </Box>
    );
  }

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

  const schedules = parseDoctorSchedules(doctor.schedules);
  const image = doctor.profileImage || FALLBACK_IMAGE;

  return (
    <Box className="h-auto relative w-full flex flex-col items-start !pt-num-0 !pb-[0.1px] !pl-num-0 !pr-num-0 box-border leading-[normal] tracking-[normal] bg-[#FFFFFF]">
      <Box className="sticky top-0 z-[100] w-full bg-[#FFFFFF] shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
        <Navbar />
      </Box>

      <Box className="w-full flex flex-col items-center py-8 lg:py-16 px-4 sm:px-8 lg:px-12 xl:px-16 box-border relative bg-[#ffffff]">
        <Box className="w-full max-w-[1440px] flex flex-col items-start gap-8 lg:gap-10">

          <button
            onClick={() => navigate("/meet-the-team")}
            className="group flex items-center gap-2 text-[#7791A5] font-lilex font-normal text-[16px] leading-[24px] uppercase bg-transparent border-none cursor-pointer outline-none hover:text-[#1F2A44] transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:-translate-x-1 transition-transform duration-200">
              <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Team
          </button>

          <Box className="w-full flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12 relative">

            <Box className="flex-1 flex flex-col items-start gap-8 lg:gap-10 relative box-border pt-8 lg:pt-0">

              <Box className="flex flex-row items-center bg-[#F1F2F1] rounded-[4px] select-none px-3 py-1 gap-1">
                <Box className="flex flex-col justify-center items-start shrink-0" style={{ width: "20px", height: "20px" }}>
                  <img style={{ width: "20px", height: "20px" }} alt="" src="/SVG.svg" />
                </Box>
                <span className="font-lilex font-medium text-[14px] sm:text-[16px] uppercase text-[#0B0C0F]">
                  DOCTOR INFO
                </span>
              </Box>

              <Box className="flex flex-col items-start gap-3 w-full border-b border-[#E6E6E6] pb-6 sm:pb-8">
                <Typography
                  className="!m-0 text-left font-stack-sans-text uppercase text-[28px] sm:text-[36px] lg:text-[48px] leading-[36px] sm:leading-[46px] lg:leading-[58px] tracking-[-1px] font-semibold text-[#0B0C0F]"
                  variant="inherit"
                  variantMapping={{ inherit: "h1" }}
                >
                  {doctor.name}
                </Typography>
                <Typography className="text-left font-inter font-normal text-[16px] sm:text-[20px] leading-[24px] sm:leading-[30px] text-[#505050]">
                  {doctor.specialization?.name}{doctor.experienceYears ? ` · ${doctor.experienceYears} yrs experience` : ""}
                </Typography>
              </Box>

              <Box className="flex flex-col items-start gap-4 sm:gap-6 w-full text-left font-inter font-normal text-[15px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-[#505050]">
                {doctor.description ? (
                  doctor.description
                    .split("\n")
                    .filter((p: string) => p.trim().length > 0)
                    .map((paragraph: string, idx: number) => (
                      <p key={idx} className="m-0">
                        {paragraph}
                      </p>
                    ))
                ) : (
                  <>
                    <p className="m-0">
                      With over {doctor.experienceYears || 10} years of clinical experience, {doctor.name} brings specialist expertise and a patient-first approach to every consultation. Having trained at leading medical institutions across India, they deliver care that meets the highest standards of diagnosis and treatment.
                    </p>
                    <p className="m-0">
                      At Swaraj Hospital, we believe medicine is as much about listening as it is about treating. {doctor.name} takes time to understand each patient's history, concerns and goals — ensuring every decision is informed, transparent and compassionate.
                    </p>
                    <p className="m-0">
                      An active contributor to medical research and continuing education, {doctor.name} is committed to bringing the latest evidence-based practices to the families of western Odisha.
                    </p>
                  </>
                )}
              </Box>

              <Box className="flex flex-wrap items-center gap-3 sm:gap-4 w-full pt-2">
                <Box className="rounded-[8px] flex items-center justify-start gap-3 bg-[#f1f2f1] px-4 py-2.5 min-w-[200px] h-[44px]">
                  <Box className="rounded-full h-2.5 w-2.5 bg-[#7791a5] shrink-0" />
                  <span className="font-lilex font-normal text-[12px] sm:text-[14px] leading-[20px] uppercase text-[#0B0C0F]">
                    BOARD CERTIFIED
                  </span>
                </Box>
                <Box className="rounded-[8px] flex items-center justify-start gap-3 bg-[#f1f2f1] px-4 py-2.5 min-w-[200px] h-[44px]">
                  <Box className="rounded-full h-2.5 w-2.5 bg-[#7791a5] shrink-0" />
                  <span className="font-lilex font-normal text-[12px] sm:text-[14px] leading-[20px] uppercase text-[#0B0C0F]">
                    {doctor.experienceYears || 10}+ YRS EXPERIENCE
                  </span>
                </Box>
              </Box>

              <Box className="flex flex-col items-start gap-3 sm:gap-4 w-full pt-6 border-t border-[#E6E6E6]">
                <Typography className="text-left font-lilex font-semibold text-[16px] sm:text-[20px] leading-[24px] sm:leading-[30px] text-[#0B0C0F] uppercase tracking-[0.5px]">
                  Contacts
                </Typography>
                <Box className="flex flex-col items-start gap-2.5 w-full">
                  <Box className="flex items-center gap-3">
                    <Box className="rounded-full h-2 w-2 bg-[#7791a5] shrink-0" />
                    <span className="font-inter font-normal text-[15px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-[#505050]">
                      {doctor.email || "info@swarajhospital.in"}
                    </span>
                  </Box>
                  <Box className="flex items-center gap-3">
                    <Box className="rounded-full h-2 w-2 bg-[#7791a5] shrink-0" />
                    <span className="font-inter font-normal text-[15px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-[#505050]">
                      {doctor.phone || "+91 63708 22507"}
                    </span>
                  </Box>
                </Box>
              </Box>

              {schedules.length > 0 && (
                <Box className="flex flex-col items-start gap-3 w-full pt-6 border-t border-[#E6E6E6]">
                  <Typography className="text-left font-lilex font-semibold text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px] text-[#7791A5] uppercase tracking-[0.5px]">
                    CONSULTATION SCHEDULE & TIMINGS
                  </Typography>

                  <Box className="flex flex-col items-start gap-2.5 w-full">
                    {schedules.map((s, idx) => (
                      <Box
                        key={idx}
                        className="flex flex-row items-center justify-between bg-[#F1F2F1] border border-solid border-[#E6E6E6] rounded-[8px] px-4 py-3 w-full max-w-[500px]"
                      >
                        <span className="font-lilex font-semibold text-[13px] sm:text-[15px] uppercase text-[#1F2A44]">
                          {s.day}
                        </span>
                        <span className="font-inter font-medium text-[12px] sm:text-[14px] text-[#505050]">
                          {s.timingText}
                        </span>
                      </Box>
                    ))}
                  </Box>
                </Box>
              )}

              <Box className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-6">
                <NavyButton
                  label="BOOK CONSULTATION"
                  variant="filled"
                  endIcon="/69959585702a1a429f59d932-frame-svg.png"
                  className="!h-[52px] !px-8 font-medium uppercase text-[15px]"
                  onClick={() => navigate(`/book?doctor=${doctor.id}`)}
                />
                <NavyButton
                  label="ENQUIRE NOW"
                  variant="outline"
                  className="!h-[52px] !px-8 font-medium uppercase text-[15px]"
                  onClick={() => navigate(`/enquire?doctor=${doctor.id}`)}
                />
              </Box>

            </Box>

            <Box className="w-full lg:w-[460px] xl:w-[540px] 2xl:w-[600px] aspect-square rounded-2xl overflow-hidden shadow-md shrink-0 flex items-center justify-center bg-[#F1F2F1] self-center">
              <img className="w-full h-full object-cover object-center" src={image} alt={doctor.name} />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Our Specialists — dynamic grid */}
      <Box className="w-full flex flex-col items-center py-12 lg:py-20 px-4 sm:px-8 lg:px-12 xl:px-16 box-border relative bg-[#ffffff]">
        <Box className="w-full max-w-[1360px] flex flex-row justify-between items-start gap-[80px] mq1350:flex-col mq1350:items-stretch mq925:flex-col mq925:items-stretch mq450:flex-col mq450:items-stretch mq450:!gap-8">

          <Box className="flex flex-col items-start w-[550px] mq1350:w-full mq925:w-full mq450:w-full">
            <Box className="flex flex-row items-center bg-[#F1F2F1] rounded-[4px] select-none" style={{ padding: "4px 8px 4px 6px", gap: "4px", width: "max-content", height: "32px" }}>
              <Box className="flex flex-col justify-center items-start flex-none" style={{ width: "20px", height: "20px" }}>
                <img style={{ width: "20px", height: "20px" }} alt="" src="/SVG.svg" />
              </Box>
              <span className="flex items-center text-left font-lilex font-medium text-[16px] leading-[24px] uppercase text-[#0B0C0F] whitespace-nowrap">our SPECIALISTS</span>
            </Box>
            <Typography
              className="!m-0 text-left font-stack-sans-text uppercase mq450:!text-[32px] mq450:!leading-[40px] mq450:!tracking-[-0.5px]"
              variant="inherit"
              variantMapping={{ inherit: "h2" }}
              sx={{ fontWeight: "600", fontSize: "48px", lineHeight: "58px", letterSpacing: "-1.5px", color: "#0B0C0F", paddingTop: "24px" }}
            >
              The Team<br />Behind the Care
            </Typography>
            <Typography className="text-left font-inter font-normal text-[18px] leading-[28px] text-[#505050] mq450:!text-[14px] mq450:!leading-[22px] mq450:!pt-4" sx={{ paddingTop: "44px" }}>
              From emergency medicine to advanced surgery, our specialists cover every dimension of your family's health.
            </Typography>
          </Box>

          <Box className="w-[730px] max-w-full mq1350:w-full mq925:w-full mq450:w-full flex flex-col items-start">
            <Box className="grid gap-[12px] w-full" sx={{
              gridTemplateColumns: "repeat(2, 359px)",
              "@media (max-width: 925px)": { gridTemplateColumns: "1fr" },
              "@media (max-width: 450px)": { gridTemplateColumns: "1fr !important" },
            }}>
              {allDoctors.filter((d: any) => d.id !== doctor.id).slice(0, 4).map((doc: any) => (
                <Box
                  key={doc.id}
                  onClick={() => navigate(`/doctor/${doc.id}`)}
                  className="bg-[#f1f2f1] rounded-[16px] flex flex-row justify-between items-center cursor-pointer hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 mq450:!max-w-full"
                  style={{ width: "100%", maxWidth: "359px", height: "120px", padding: "16px", boxSizing: "border-box" }}
                >
                  <Box className="flex flex-col justify-between items-start h-full flex-1">
                    <Box className="w-1.5 h-1.5 bg-[#0B0C0F]" />
                    <Box className="flex flex-col gap-0.5 pr-2">
                      <Typography className="font-lilex font-semibold text-[13px] leading-[18px] uppercase text-[#0B0C0F]">{doc.name}</Typography>
                      <Typography className="font-inter font-normal text-[11px] leading-[14px] text-[#505050]">{doc.specialization?.name || ""}</Typography>
                    </Box>
                  </Box>
                  <Box className="overflow-hidden bg-[#E6E6E6] shrink-0" style={{ width: "88px", height: "88px", borderRadius: "4px" }}>
                    <img src={doc.profileImage || FALLBACK_IMAGE} alt={doc.name} className="w-full h-full object-cover" />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="w-full overflow-hidden flex flex-col items-start isolate shrink-0 max-w-full bg-[#FFFFFF]">
        <Section3 />
      </Box>
      <Section7 />
    </Box>
  );
};

export default DoctorDetail;
