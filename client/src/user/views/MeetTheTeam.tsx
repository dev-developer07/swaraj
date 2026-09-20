import { type FunctionComponent, useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import SectionBadge from "../components/SectionBadge";
import Section3 from "../components/Section3";
import Section7 from "../components/Section7";
import NavyButton from "../components/NavyButton";
import { getPublicDoctors } from "../../services/user.service";
import { parseDoctorSchedules } from "../../utils/scheduleUtils";

const FALLBACK_IMAGE = "/Container5@2x.png";

const MeetTheTeam: FunctionComponent = () => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState<any[]>([]);
  const [specialties, setSpecialties] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      try {
        const res = await getPublicDoctors();
        if (res.success && Array.isArray(res.data)) {
          const active = res.data.filter((d: any) => d.isActive !== false);
          setDoctors(active);
          const docSpecs = active.map((d: any) => d.specialization?.name).filter(Boolean);
          const defaultSpecs = [
            "Cardiology",
            "Neurology",
            "Orthopaedics & Joint Replacement",
            "Paediatrics & Neonatology",
            "Minimal Access & Laparoscopic Surgery",
            "Obstetrics & Gynaecology",
            "General Medicine",
            "General Surgery",
            "Gastroenterology",
            "Nephrology",
            "Urology",
            "Radiodiagnosis & Imaging",
            "Dermatology",
            "ENT (Ear, Nose & Throat)",
            "Dental & Maxillofacial Surgery",
            "Critical Care & Anesthesiology"
          ];
          const allSpecs = Array.from(new Set([...defaultSpecs, ...docSpecs])).sort();
          setSpecialties(allSpecs);
        }
      } catch (err) {
        console.error("Failed to load doctors:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const filteredDoctors = useMemo(() => {
    if (loading) return [];
    return doctors.filter((doc) => {
      const matchesSpecialty = selectedSpecialty === "All" || doc.specialization?.name === selectedSpecialty;
      const matchesName = doc.name?.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSpecialty && matchesName;
    });
  }, [selectedSpecialty, searchTerm, doctors, loading]);

  return (
    <Box className="h-auto relative w-full flex flex-col items-start !pt-num-0 !pb-[0.1px] !pl-num-0 !pr-num-0 box-border leading-[normal] tracking-[normal]">
      <Box className="sticky top-0 z-[100] w-full bg-[#FFFFFF] shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
        <Navbar />
      </Box>

      <Box className="w-full bg-web-gray-nurse flex flex-col items-start !pt-[80px] !pb-[80px] !px-6 box-border min-h-[1400px] mq450:!px-0 mq450:!pt-0 mq450:!pb-0 mq450:!bg-[#FFFFFF]">
        <Box className="w-full max-w-[1872px] mx-auto rounded-num-16 bg-web-white flex flex-col items-start !pt-[80px] !pb-[80px] !px-[216px] mq925:!px-10 mq1350:!px-[108px] min-h-[1240px] box-border shadow-[0_4px_30px_rgba(0,0,0,0.03)] relative overflow-hidden mq450:!px-5 mq450:!pt-10 mq450:!pb-10 mq450:!rounded-none mq450:!shadow-none mq450:!min-h-0">
          <Box className="w-full max-w-[1440px] flex flex-col items-start gap-10 !px-10 box-border min-h-[1080px] mq450:!px-0 mq450:!min-h-0 mq450:!gap-8">
            {/* Header */}
            <Box className="w-full flex flex-row justify-between items-start mq925:flex-col mq925:gap-4 mq450:flex-col mq450:gap-4">
              <Box className="pt-[12px]">
                <SectionBadge icon="/SVG.svg" label="THE SPECIALISTS" variant="dark" />
              </Box>
              <Typography
                className="!m-0 relative font-stack-sans-text text-right mq925:text-left mq450:!text-[28px] mq450:!leading-[38px] mq450:!tracking-[-0.42px] mq450:!w-[345px] mq450:!text-left mq450:!font-semibold"
                variant="inherit"
                variantMapping={{ inherit: "h1" }}
                sx={{ fontWeight: "400", lineHeight: "65px", letterSpacing: "-0.72px", fontSize: "48px", color: "#0b0c0f", width: "450px", maxWidth: "100%" }}
              >
                <span className="mq450:hidden">Expert hands in Health</span>
                <span className="hidden mq450:inline">Expert hands in<br />Health</span>
              </Typography>
            </Box>

            {/* Filters */}
            <Box className="w-[760px] max-w-full flex flex-row justify-start items-start gap-[16px] mq925:flex-col mq925:items-stretch mq450:flex-col mq450:items-stretch">
              <div className="relative w-[372px] h-[50px] mq925:w-full mq450:w-full">
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full h-full bg-[#F1F2F1] text-[#7E7F80] border-none rounded-[12px] appearance-none outline-none font-inter text-num-14 leading-[19px] cursor-pointer transition-all duration-200 hover:bg-[#e6e7e6]"
                  style={{ paddingLeft: "28px", paddingRight: "52px" }}
                >
                  <option value="All">All specialties</option>
                  {specialties.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-[16px] text-[#7E7F80]">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>

              <div className="relative w-[372px] h-[50px] mq925:w-full mq450:w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-[16px] pointer-events-none">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#7E7F80" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 14.0001L11.1 11.1001" stroke="#7E7F80" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search doctor's name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-full bg-[#F1F2F1] text-[#7E7F80] border-none rounded-[12px] outline-none font-inter text-num-14 leading-[19px] transition-all duration-200 focus:bg-[#e6e7e6] placeholder:text-[#7E7F80]"
                  style={{ paddingLeft: "52px", paddingRight: "28px" }}
                />
              </div>
            </Box>

            {/* Doctor Cards */}
            <Box
              className="w-full max-w-[1360px] mx-auto relative transition-all duration-300 mq925:!h-auto mq925:!flex mq925:!flex-col mq450:!h-auto mq450:!flex mq450:!flex-col"
              style={{ height: loading ? "auto" : `${filteredDoctors.length * 341 - 33}px` }}
            >
              {loading ? (
                <Box className="w-full flex items-center justify-center py-20">
                  <svg className="animate-spin" width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#E6E6E6" strokeWidth="3" />
                    <path d="M12 2a10 10 0 0 1 10 10" stroke="#1F2A44" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </Box>
              ) : filteredDoctors.length > 0 ? (
                filteredDoctors.map((doc, index) => {
                  const schedules = parseDoctorSchedules(doc.schedules);
                  const image = doc.profileImage || FALLBACK_IMAGE;

                  return (
                    <Box
                      key={doc.id}
                      onClick={() => navigate(`/doctor/${doc.id}`)}
                      className="w-full max-w-[1360px] h-[308px] flex flex-row items-center justify-between bg-[#FFFFFF] hover:bg-web-gray-nurse border-t border-solid border-[#f1f2f1] group p-[32px] box-border absolute left-0 transition-all duration-300 ease-in-out cursor-pointer rounded-3xl mq925:!relative mq925:!top-auto mq925:!left-auto mq925:!flex-col mq925:!items-start mq925:!gap-6 mq450:!relative mq450:!top-auto mq450:!left-auto mq450:!flex-col mq450:!items-start mq450:!gap-6 mq450:!h-auto mq450:!px-0 mq450:!py-8 mq450:!rounded-none mq450:hover:!bg-[#FFFFFF]"
                      style={{ top: `${index * 341}px` }}
                    >
                      <Box className="w-[640px] max-w-[640px] flex flex-col items-start justify-between mq925:w-full h-[276px] relative z-10 m-0 p-0 mq925:!h-auto mq925:!max-w-full mq925:!gap-6 mq450:w-full mq450:!h-auto mq450:!max-w-full mq450:!gap-6">
                        <Box className="w-[640px] max-w-full flex flex-col items-start gap-[8px] relative m-0 p-0 mq450:!w-full">
                          {schedules.length > 0 && (
                            <Box className="w-[640px] max-w-full flex flex-col items-start gap-2 relative m-0 p-0 mq450:!w-full">
                              <span className="text-left font-lilex font-semibold text-[13px] leading-[18px] uppercase text-[#7791A5] tracking-[0.5px]">
                                Schedule & Timings:
                              </span>
                              <Box className="flex flex-wrap items-center gap-2 max-w-full">
                                {schedules.map((s, idx) => (
                                  <Box
                                    key={idx}
                                    className="flex flex-row items-center gap-2 bg-[#F1F2F1] border border-solid border-[#E6E6E6] rounded-[8px] px-3 py-1.5"
                                  >
                                    <span className="font-lilex font-semibold text-[13px] uppercase text-[#1F2A44]">
                                      {s.day.slice(0, 3)}:
                                    </span>
                                    <span className="font-inter font-medium text-[13px] text-[#505050]">
                                      {s.timingText}
                                    </span>
                                  </Box>
                                ))}
                              </Box>
                            </Box>
                          )}
                        </Box>

                        <Box className="w-[640px] max-w-full pb-0 px-0 flex flex-col items-start relative box-border mq450:!max-w-full">
                          <Box className="w-[640px] max-w-full pb-[0.8px] flex flex-col items-start relative box-border mq450:!max-w-full">
                            <Typography
                              className="!m-0 text-left font-stack-sans-text uppercase mq450:!text-[24px] mq450:!leading-[32px] mq450:!tracking-[-0.5px]"
                              variant="inherit"
                              variantMapping={{ inherit: "h2" }}
                              sx={{ fontWeight: "600", fontSize: "36px", lineHeight: "47px", letterSpacing: "-1px", color: "#0B0C0F" }}
                            >
                              {doc.name}
                            </Typography>
                          </Box>
                          <Box className="w-[640px] max-w-full pb-[0.8px] flex flex-col items-start relative box-border mq450:!max-w-full">
                            <span className="text-left font-inter font-normal text-[18px] leading-[29px] text-[#505050] h-auto flex items-center mq450:!text-[14px] mq450:!leading-[22px]">
                              {doc.specialization?.name}{doc.experienceYears ? ` · ${doc.experienceYears} yrs` : ""}
                            </span>
                          </Box>
                        </Box>

                        <Box className="w-full max-w-[640px] min-h-[48px] flex flex-row items-center gap-[16px] relative mq450:flex-col mq450:items-start mq450:h-auto mq450:!gap-3">
                          <NavyButton
                            label="Book an Appointment"
                            variant="filled"
                            onClick={(e) => { e.stopPropagation(); navigate(`/book?doctor=${doc.id}`); }}
                            className="flex-1 !h-[48px] !px-5 mq450:!w-[80%] mq450:!flex-none"
                          />
                          <NavyButton
                            label="Request your session"
                            variant="outline"
                            onClick={(e) => { e.stopPropagation(); navigate(`/enquire?doctor=${doc.id}`); }}
                            className="flex-1 !h-[48px] !px-5 mq450:!bg-transparent mq450:hover:!bg-transparent mq450:!shadow-none mq450:!text-[#1F2A44] mq450:!w-[80%] mq450:!justify-start mq450:!px-0 mq450:!py-2 mq450:!flex-none"
                          />
                        </Box>
                      </Box>

                      <Box className="h-[276px] w-[276px] mq925:hidden overflow-hidden rounded-[16px] relative flex items-center justify-center m-0 p-0 mq450:flex mq450:w-full mq450:h-[276px]">
                        <img
                          className="h-[276px] w-[276px] object-cover object-center transition-transform duration-300 group-hover:scale-105 rounded-[16px] mq450:w-full mq450:h-full"
                          src={image}
                          alt={doc.name}
                        />
                      </Box>
                    </Box>
                  );
                })
              ) : (
                <Box className="w-full flex flex-col items-center justify-center py-20 text-center border-t border-solid border-web-mercury">
                  <span className="text-[18px] font-medium text-web-rolling-stone font-inter">
                    No specialists match your criteria.
                  </span>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="self-stretch overflow-hidden flex flex-col items-start isolate shrink-0 max-w-full">
        <Section3 />
      </Box>
      <Section7 />
    </Box>
  );
};

export default MeetTheTeam;
