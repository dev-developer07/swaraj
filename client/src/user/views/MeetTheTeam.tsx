import { type FunctionComponent, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import SectionBadge from "../components/SectionBadge";
import Section3 from "../components/Section3";
import Section7 from "../components/Section7";
import NavyButton from "../components/NavyButton";

export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  qualifications: string;
  availability: string;
  days: string[];
  image: string;
}

export const DOCTORS_DATA: Doctor[] = [
  {
    id: 1,
    name: "DR. ANKIT PADHI",
    specialty: "Cardiology",
    qualifications: "MBBS, MD · Senior Consultant",
    availability: "Available from 10:30 AM to 1:30 PM",
    days: ["Mon", "Wed", "Fri", "Sat", "Sun"],
    image: "/Container5@2x.png",
  },
  {
    id: 2,
    name: "Dr. SURAJ SAMAL",
    specialty: "Neurology",
    qualifications: "MBBS, DM · Consultant",
    availability: "Available from 10:30 AM to 1:30 PM",
    days: ["Tue", "Wed", "Thu", "Sat", "Sun"],
    image: "/Container8@2x.png",
  },
  {
    id: 3,
    name: "DR. PRIYANKA PATRA",
    specialty: "Obstetrics & Gynaecology",
    qualifications: "MBBS, MS · Senior Specialist",
    availability: "Available from 10:30 AM to 1:30 PM",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    image: "/Container6@2x.png",
  },
  {
    id: 4,
    name: "DR. ANURADHA ACHARYA",
    specialty: "Orthopedics & Joint Replacement",
    qualifications: "MBBS, MS · Senior Specialist",
    availability: "Available from 10:30 AM to 1:30 PM",
    days: ["Mon", "Wed", "Fri", "Sat", "Sun"],
    image: "/Container9@2x.png",
  },
  {
    id: 5,
    name: "DR. BARSHA DASH",
    specialty: "Pediatrics & Neonatology",
    qualifications: "MBBS, MD · Consultant",
    availability: "Available from 10:30 AM to 1:30 PM",
    days: ["Mon", "Tue", "Wed", "Thu", "Sat"],
    image: "/Container10@2x.png",
  },
];

const MeetTheTeam: FunctionComponent = () => {
  const navigate = useNavigate();
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredDoctors = useMemo(() => {
    return DOCTORS_DATA.filter((doc) => {
      const matchesSpecialty =
        selectedSpecialty === "All" || doc.specialty === selectedSpecialty;
      const matchesName = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSpecialty && matchesName;
    });
  }, [selectedSpecialty, searchTerm]);

  return (
    <Box className="h-auto relative w-full flex flex-col items-start !pt-num-0 !pb-[0.1px] !pl-num-0 !pr-num-0 box-border leading-[normal] tracking-[normal]">
      <Box className="sticky top-0 z-[100] w-full bg-[#FFFFFF] shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
        <Navbar />
      </Box>

      {/* Main Meet the Team Section */}
      <Box className="w-full bg-web-gray-nurse flex flex-col items-start !pt-[80px] !pb-[80px] !px-6 box-border min-h-[1400px] mq450:!px-0 mq450:!pt-0 mq450:!pb-0 mq450:!bg-[#FFFFFF]">
        {/* White Background Container */}
        <Box className="w-full max-w-[1872px] mx-auto rounded-num-16 bg-web-white flex flex-col items-start !pt-[80px] !pb-[80px] !px-[216px] mq925:!px-10 mq1350:!px-[108px] min-h-[1240px] box-border shadow-[0_4px_30px_rgba(0,0,0,0.03)] relative overflow-hidden mq450:!px-5 mq450:!pt-10 mq450:!pb-10 mq450:!rounded-none mq450:!shadow-none mq450:!min-h-0">
          {/* Inner Container */}
          <Box className="w-full max-w-[1440px] flex flex-col items-start gap-10 !px-10 box-border min-h-[1080px] mq450:!px-0 mq450:!min-h-0 mq450:!gap-8">
            {/* Header Content */}
            <Box className="w-full flex flex-row justify-between items-start mq925:flex-col mq925:gap-4 mq450:flex-col mq450:gap-4">
              <Box className="pt-[12px]">
                <SectionBadge icon="/SVG.svg" label="THE SPECIALISTS" variant="dark" />
              </Box>
              <Typography
                className="!m-0 relative font-stack-sans-text text-right mq925:text-left mq450:!text-[28px] mq450:!leading-[38px] mq450:!tracking-[-0.42px] mq450:!w-[345px] mq450:!text-left mq450:!font-semibold"
                variant="inherit"
                variantMapping={{ inherit: "h1" }}
                sx={{
                  fontWeight: "400",
                  lineHeight: "65px",
                  letterSpacing: "-0.72px",
                  fontSize: "48px",
                  color: "#0b0c0f",
                  width: "450px",
                  maxWidth: "100%"
                }}
              >
                <span className="mq450:hidden">Expert hands in Health</span>
                <span className="hidden mq450:inline">Expert hands in<br />Health</span>
              </Typography>
            </Box>

            {/* Filters Row */}
            <Box className="w-[760px] max-w-full flex flex-row justify-start items-start gap-[16px] mq925:flex-col mq925:items-stretch mq450:flex-col mq450:items-stretch">
              {/* Specialty Select Dropdown */}
              <div className="relative w-[372px] h-[50px] mq925:w-full mq450:w-full">
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full h-full bg-[#F1F2F1] text-[#7E7F80] border-none rounded-[12px] appearance-none outline-none font-inter text-num-14 leading-[19px] cursor-pointer transition-all duration-200 hover:bg-[#e6e7e6]"
                  style={{ paddingLeft: "28px", paddingRight: "52px" }}
                >
                  <option value="All">All specialties</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Orthopedics & Joint Replacement">
                    Orthopedics & Joint Replacement
                  </option>
                  <option value="Obstetrics & Gynaecology">Obstetrics & Gynaecology</option>
                  <option value="Pediatrics & Neonatology">Pediatrics & Neonatology</option>
                  <option value="General Medicine">General Medicine</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-[16px] text-[#7E7F80]">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>

              {/* Name Search Input */}
              <div className="relative w-[372px] h-[50px] mq925:w-full mq450:w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-[16px] pointer-events-none">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                      stroke="#7E7F80"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 14.0001L11.1 11.1001"
                      stroke="#7E7F80"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search doctor’s name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-full bg-[#F1F2F1] text-[#7E7F80] border-none rounded-[12px] outline-none font-inter text-num-14 leading-[19px] transition-all duration-200 focus:bg-[#e6e7e6] placeholder:text-[#7E7F80]"
                  style={{ paddingLeft: "52px", paddingRight: "28px" }}
                />
              </div>
            </Box>

            {/* Doctors List */}
            <Box
              className="w-full max-w-[1360px] mx-auto relative transition-all duration-300 mq925:!h-auto mq925:!flex mq925:!flex-col mq450:!h-auto mq450:!flex mq450:!flex-col"
              style={{ height: `${filteredDoctors.length * 341 - 33}px` }}
            >
              {filteredDoctors.length > 0 ? (
                filteredDoctors.map((doc, index) => {
                  const topOffset = index * 341;
                  return (
                    <Box
                      key={doc.id}
                      onClick={() => navigate(`/doctor/${doc.id}`)}
                      className="w-full max-w-[1360px] h-[308px] flex flex-row items-center justify-between bg-[#FFFFFF] hover:bg-web-gray-nurse border-t border-solid border-[#f1f2f1] group p-[32px] box-border absolute left-0 transition-all duration-300 ease-in-out cursor-pointer rounded-3xl mq925:!relative mq925:!top-auto mq925:!left-auto mq925:!flex-col mq925:!items-start mq925:!gap-6 mq450:!relative mq450:!top-auto mq450:!left-auto mq450:!flex-col mq450:!items-start mq450:!gap-6 mq450:!h-auto mq450:!px-0 mq450:!py-8 mq450:!rounded-none mq450:hover:!bg-[#FFFFFF]"
                      style={{ top: `${topOffset}px` }}
                    >
                      {/* Left Info Column */}
                      <Box className="w-[640px] max-w-[640px] flex flex-col items-start justify-between mq925:w-full h-[276px] relative z-10 m-0 p-0 mq925:!h-auto mq925:!max-w-full mq925:!gap-6 mq450:w-full mq450:!h-auto mq450:!max-w-full mq450:!gap-6">
                        {/* Top Info Group (Availability + Days) */}
                        <Box className="w-[640px] max-w-full flex flex-col items-start gap-[12px] relative m-0 p-0">
                          {/* Availability Section */}
                          <Box className="w-[640px] max-w-full h-[24px] flex flex-col items-start relative m-0 p-0 mq450:!h-auto">
                            <span className="text-left font-lilex font-normal text-[16px] leading-[24px] uppercase text-[#7791A5] h-[24px] mq450:!h-auto flex items-center mq450:!text-[12px] mq450:!leading-[18px]">
                              {doc.availability}
                            </span>
                          </Box>

                          {/* Days Section */}
                          <Box className="pb-0 px-0 h-[60px] flex flex-col items-start relative box-border mq450:!h-auto">
                            <Box className="w-max flex flex-row items-center gap-[16px] relative mq450:!gap-2">
                              {doc.days.map((day) => (
                                <Box
                                  key={day}
                                  className="w-[60px] h-[60px] rounded-[60px] bg-[#FFFFFF] border border-solid border-[#E6E6E6] flex items-center justify-center relative box-border mq450:!w-[44px] mq450:!h-[44px]"
                                >
                                  <Box className="w-[28px] h-[28px] flex flex-col items-start justify-center relative mq450:!w-auto mq450:!h-auto">
                                    <span className="text-left font-lilex font-normal text-[16px] leading-[24px] uppercase text-[#000000] w-max mq450:!text-[12px] mq450:!leading-[18px]">
                                      {day.slice(0, 3)}
                                    </span>
                                  </Box>
                                </Box>
                              ))}
                            </Box>
                          </Box>
                        </Box>

                        {/* Doctor Name and Specialty */}
                        <Box className="w-[640px] max-w-full pb-0 px-0 flex flex-col items-start relative box-border mq450:!max-w-full">
                          <Box className="w-[640px] max-w-full pb-[0.8px] flex flex-col items-start relative box-border mq450:!max-w-full">
                            <Typography
                              className="!m-0 text-left font-stack-sans-text uppercase mq450:!text-[24px] mq450:!leading-[32px] mq450:!tracking-[-0.5px]"
                              variant="inherit"
                              variantMapping={{ inherit: "h2" }}
                              sx={{
                                fontWeight: "600",
                                fontSize: "36px",
                                lineHeight: "47px",
                                letterSpacing: "-1px",
                                color: "#0B0C0F",
                              }}
                            >
                              {doc.name}
                            </Typography>
                          </Box>
                          <Box className="w-[640px] max-w-full pb-[0.8px] flex flex-col items-start relative box-border mq450:!max-w-full">
                            <span className="text-left font-inter font-normal text-[18px] leading-[29px] text-[#505050] h-auto flex items-center mq450:!text-[14px] mq450:!leading-[22px]">
                              {doc.specialty} {doc.qualifications}
                            </span>
                          </Box>
                        </Box>

                        {/* Action Buttons Row */}
                        <Box className="w-full max-w-[640px] min-h-[48px] flex flex-row items-center gap-[16px] relative mq450:flex-col mq450:items-start mq450:h-auto mq450:!gap-3">
                          <NavyButton
                            label="Book an Appointment"
                            variant="filled"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/book?doctor=${doc.id}`);
                            }}
                            className="flex-1 !h-[48px] !px-5 mq450:!w-[80%] mq450:!flex-none"
                          />

                          <NavyButton
                            label="Request your session"
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/book?doctor=${doc.id}`);
                            }}
                            className="flex-1 !h-[48px] !px-5 mq450:!bg-transparent mq450:hover:!bg-transparent mq450:!shadow-none mq450:!text-[#1F2A44] mq450:!w-[80%] mq450:!justify-start mq450:!px-0 mq450:!py-2 mq450:!flex-none"
                          />
                        </Box>
                      </Box>

                      {/* Right Portrait Image */}
                      <Box className="h-[276px] w-[276px] mq925:hidden overflow-hidden rounded-[16px] relative flex items-center justify-center m-0 p-0 mq450:flex mq450:w-full mq450:h-[276px]">
                        <img
                          className="h-[276px] w-[276px] object-cover object-center transition-transform duration-300 group-hover:scale-105 rounded-[16px] mq450:w-full mq450:h-full"
                          src={doc.image}
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

      {/* Advanced Multispeciality Care & Ticker Banner */}
      <Box className="self-stretch overflow-hidden flex flex-col items-start isolate shrink-0 max-w-full">
        <Section3 />
      </Box>

      <Section7 />
    </Box>
  );
};

export default MeetTheTeam;
