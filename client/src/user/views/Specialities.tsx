import { type FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import { getSpecialtySlug } from "../data/specialtyData";
import SectionBadge from "../components/SectionBadge";
import Section3 from "../components/Section3";
import Section7 from "../components/Section7";

interface Speciality {
  number: string;
  name: string;
  description: string;
  image: string;
  bgClass: string;
}

const SPECIALITIES_DATA: Speciality[] = [
  {
    number: "001/",
    name: "General Medicine",
    description: "Comprehensive diagnosis and treatment of acute and chronic conditions for patients of all ages.",
    image: "/Background@2x.png",
    bgClass: "bg-[#ffffff]"
  },
  {
    number: "002/",
    name: "General Surgery",
    description: "Surgical care for a broad range of conditions with a focus on precision, safety and swift recovery.",
    image: "/Background1@2x.png",
    bgClass: "bg-[#ffffff]"
  },
  {
    number: "003/",
    name: "Obstetrics & Gynaecology",
    description: "Complete women's health care — from routine gynaecological consultations to high-risk pregnancy and delivery.",
    image: "/Background3@2x.png",
    bgClass: "bg-[#ffffff]"
  },
  {
    number: "004/",
    name: "Orthopaedics & Joint Replacement",
    description: "Advanced bone, joint and spine treatment including surgical replacement and rehabilitation support.",
    image: "/Background1@2x.png",
    bgClass: "bg-[#ffffff]"
  },
  {
    number: "005/",
    name: "Paediatrics & Neonatology",
    description: "Dedicated care for newborns, infants and children — including a specialist NICU for critical neonatal cases.",
    image: "/Background2@2x.png",
    bgClass: "bg-[#ffffff]"
  },
  {
    number: "006/",
    name: "Cardiology",
    description: "Diagnosis and treatment of heart conditions supported by a full Cath Lab and advanced cardiac diagnostics.",
    image: "/Background2@2x.png",
    bgClass: "bg-web-gray-nurse" // Special class matching the user spec
  },
  {
    number: "007/",
    name: "Minimal Access & Laparoscopic Surgery",
    description: "Minimally invasive surgical procedures for faster recovery, reduced pain and shorter hospital stays.",
    image: "/Background@2x.png",
    bgClass: "bg-[#ffffff]"
  },
  {
    number: "008/",
    name: "Ophthalmology",
    description: "Complete eye care — from routine consultations and prescriptions to surgical intervention and post-operative support.",
    image: "/Background@2x.png",
    bgClass: "bg-[#ffffff]"
  },
  {
    number: "009/",
    name: "Neurology",
    description: "Specialist diagnosis and treatment of brain, spine and nervous system conditions with advanced imaging support.",
    image: "/Background@2x.png",
    bgClass: "bg-[#ffffff]"
  },
  {
    number: "010/",
    name: "Urology",
    description: "Comprehensive urological care for conditions affecting the kidney, bladder and urinary tract in men and women.",
    image: "/Background1@2x.png",
    bgClass: "bg-[#ffffff]"
  },
  {
    number: "011/",
    name: "Dental & Maxillofacial Surgery",
    description: "Oral health, dental surgery and complex maxillofacial procedures performed by experienced surgical specialists.",
    image: "/Background3@2x.png",
    bgClass: "bg-[#ffffff]"
  },
  {
    number: "012/",
    name: "Gastroenterology",
    description: "Diagnosis and management of digestive system conditions including endoscopy and advanced gastrointestinal care.",
    image: "/Background2@2x.png",
    bgClass: "bg-[#ffffff]"
  }
];

const Specialities: FunctionComponent = () => {
  const navigate = useNavigate();
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Box className="h-auto relative w-full flex flex-col items-start !pt-num-0 !pb-[0.1px] !pl-num-0 !pr-num-0 box-border leading-[normal] tracking-[normal] bg-[#ffffff]">
      {/* Sticky Navbar */}
      <Box className="sticky top-0 z-[100] w-full bg-[#FFFFFF] shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
        <Navbar />
      </Box>

      {/* Main Specialities Section Wrapper with Gray Nurse Background */}
      <Box className="w-full bg-web-gray-nurse flex flex-col items-center !pt-[80px] !pb-[80px] !px-6 box-border">
        {/* White Background Container */}
        <Box className="w-full max-w-[1872px] mx-auto rounded-num-16 bg-[#ffffff] flex flex-col items-start !pt-[80px] !pb-[80px] !px-[216px] mq925:!px-10 mq1350:!px-[108px] box-border shadow-[0_4px_30px_rgba(0,0,0,0.03)] relative overflow-hidden">
          {/* Inner Content Grid */}
          <Box className="w-full max-w-[1440px] flex flex-col items-start gap-[80px] !px-10 box-border">

            {/* Header Content */}
            <Box className="w-full flex flex-row justify-between items-start mq1350:flex-col mq1350:gap-8">
              <Box className="pt-3">
                <SectionBadge icon="/SVG.svg" label="SPECIALITIES" variant="dark" />
              </Box>
              <Box className="max-w-[720px]">
                <Typography
                  className="!m-0 text-right mq1350:text-left !font-stack-sans-text !text-[48px] !leading-[60px] text-[#0B0C0F] tracking-[-1px] mq925:!text-[36px] mq925:!leading-[44px]"
                >
                  Exceptional care<br />for every patient
                </Typography>
              </Box>
            </Box>

            {/* List of Specialities */}
            <Box className="w-full flex flex-col items-center">
              {SPECIALITIES_DATA.map((spec, index) => {
                const isLast = index === SPECIALITIES_DATA.length - 1;
                return (
                  <Box
                    key={index}
                    onClick={() => {
                      navigate(`/speciality/${getSpecialtySlug(spec.name)}`);
                    }}
                    className={`w-full max-w-[1360px] p-[32px] border-t border-solid border-[#f1f2f1] ${isLast ? "border-b" : ""
                      } flex flex-row justify-between items-center bg-[#ffffff] hover:bg-web-gray-nurse transition-all duration-300 rounded-3xl cursor-pointer`}
                  >
                    {/* Inner Row - Width 1328px, Height 320px */}
                    <Box className="flex flex-row justify-between items-center grow self-stretch w-full max-w-[1328px] min-h-[320px] relative mq1350:flex-col mq1350:h-auto mq1350:gap-8 py-4">

                      {/* Left Column - Details (Width 520px) */}
                      <Box className="w-full max-w-[520px] flex flex-col justify-center mq1350:pt-8">

                        {/* Title & Description Block */}
                        <Box className="w-full flex flex-col gap-4">
                          {/* Title Block */}
                          <Typography className="text-left align-middle !font-stack-sans-text !text-[36px] !leading-[44px] text-[#0B0C0F] mq1350:!text-[28px] mq1350:!leading-[36px]">
                            {spec.name}
                          </Typography>

                          {/* Description Block */}
                          <Typography className="text-left align-middle !font-stack-sans-text !text-[18px] !font-normal !leading-[28px] text-web-emperor">
                            {spec.description}
                          </Typography>
                        </Box>

                      </Box>

                      {/* Right Column - Image Card (Width 454px, Height 240px with space above/below) */}
                      <Box className="rounded-2xl self-center h-[280px] w-full max-w-[454px] relative overflow-hidden flex-shrink-0 mq1350:h-[240px]">
                        <img
                          className="w-full h-full object-cover rounded-2xl"
                          alt={spec.name}
                          src={spec.image}
                        />
                      </Box>

                    </Box>
                  </Box>
                );
              })}
            </Box>

          </Box>
        </Box>
      </Box>

      {/* Advanced Multispeciality Care (Section 3) */}
      <Box className="w-full">
        <Section3 />
      </Box>

      {/* Footer Section (Section 7) */}
      <Box className="w-full">
        <Section7 />
      </Box>
    </Box>
  );
};

export default Specialities;
