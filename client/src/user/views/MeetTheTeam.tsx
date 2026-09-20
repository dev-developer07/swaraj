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

      <Box className="w-full bg-web-gray-nurse flex flex-col items-start py-8 lg:py-16 px-4 sm:px-6 lg:px-12 box-border">
        <Box className="w-full max-w-[1440px] mx-auto rounded-3xl bg-web-white flex flex-col items-start py-8 lg:py-16 px-4 sm:px-8 lg:px-12 box-border shadow-[0_4px_30px_rgba(0,0,0,0.03)] relative overflow-hidden">
          <Box className="w-full flex flex-col items-start gap-8 lg:gap-10 box-border">
            {/* Header */}
            <Box className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <Box>
                <SectionBadge icon="/SVG.svg" label="THE SPECIALISTS" variant="dark" />
              </Box>
              <Typography
                className="!m-0 relative font-stack-sans-text text-left sm:text-right font-normal text-[28px] sm:text-[36px] lg:text-[48px] leading-[36px] sm:leading-[48px] lg:leading-[60px] tracking-[-0.72px] text-[#0b0c0f]"
                variant="inherit"
                variantMapping={{ inherit: "h1" }}
              >
                Expert hands in Health
              </Typography>
            </Box>

            {/* Filters */}
            <Box className="w-full max-w-[760px] flex flex-col sm:flex-row justify-start items-stretch gap-4">
              <div className="relative w-full sm:w-[360px] h-[50px]">
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

              <div className="relative w-full sm:w-[360px] h-[50px]">
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
            <Box className="w-full flex flex-col gap-6">
              {loading ? (
                <Box className="w-full flex items-center justify-center py-20">
                  <svg className="animate-spin" width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#E6E6E6" strokeWidth="3" />
                    <path d="M12 2a10 10 0 0 1 10 10" stroke="#1F2A44" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </Box>
              ) : filteredDoctors.length > 0 ? (
                filteredDoctors.map((doc) => {
                  const schedules = parseDoctorSchedules(doc.schedules);
                  const image = doc.profileImage || FALLBACK_IMAGE;

                  return (
                    <Box
                      key={doc.id}
                      onClick={() => navigate(`/doctor/${doc.id}`)}
                      className="w-full bg-[#FFFFFF] hover:bg-web-gray-nurse border border-solid border-[#e6e6e6] group p-6 lg:p-8 box-border transition-all duration-300 ease-in-out cursor-pointer rounded-2xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
                    >
                      <Box className="flex-1 flex flex-col items-start justify-between gap-6 w-full">
                        <Box className="flex flex-col items-start gap-2 w-full">
                          {schedules.length > 0 && (
                            <Box className="flex flex-col items-start gap-2 w-full">
                              <span className="text-left font-lilex font-semibold text-[13px] leading-[18px] uppercase text-[#7791A5] tracking-[0.5px]">
                                Schedule & Timings:
                              </span>
                              <Box className="flex flex-wrap items-center gap-2 w-full">
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

                        <Box className="flex flex-col items-start gap-1 w-full">
                          <Typography
                            className="!m-0 text-left font-stack-sans-text uppercase text-[24px] sm:text-[30px] lg:text-[36px] leading-[32px] sm:leading-[40px] lg:leading-[46px] tracking-[-1px] font-semibold text-[#0B0C0F]"
                            variant="inherit"
                            variantMapping={{ inherit: "h2" }}
                          >
                            {doc.name}
                          </Typography>
                          <span className="text-left font-inter font-normal text-[15px] sm:text-[18px] leading-[24px] sm:leading-[29px] text-[#505050]">
                            {doc.specialization?.name}{doc.experienceYears ? ` · ${doc.experienceYears} yrs` : ""}
                          </span>
                        </Box>

                        <Box className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                          <NavyButton
                            label="Book an Appointment"
                            variant="filled"
                            onClick={(e) => { e.stopPropagation(); navigate(`/book?doctor=${doc.id}`); }}
                            className="!h-[48px] !px-6"
                          />
                          <NavyButton
                            label="Request your session"
                            variant="outline"
                            onClick={(e) => { e.stopPropagation(); navigate(`/enquire?doctor=${doc.id}`); }}
                            className="!h-[48px] !px-6"
                          />
                        </Box>
                      </Box>

                      <Box className="w-full lg:w-[240px] xl:w-[280px] h-[220px] lg:h-[240px] xl:h-[260px] overflow-hidden rounded-2xl relative flex items-center justify-center shrink-0 self-center">
                        <img
                          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105 rounded-2xl"
                          src={image}
                          alt={doc.name}
                          onError={(e) => {
                            (e.target as HTMLElement).setAttribute('src', FALLBACK_IMAGE);
                          }}
                        />
                      </Box>
                    </Box>
                  );
                })
              ) : (
                <Box className="w-full flex items-center justify-center py-16 text-[#7791A5] font-inter text-base">
                  No doctors found matching your criteria.
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
