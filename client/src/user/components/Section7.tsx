import { type FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export type Section7Type = {
  className?: string;
};

const Section7: FunctionComponent<Section7Type> = ({ className = "" }) => {
  return (
    <footer
      className={`w-full max-w-full bg-web-white overflow-hidden flex flex-col items-center py-10 lg:py-16 px-4 sm:px-8 lg:px-12 xl:px-16 box-border text-left text-num-16 text-web-woodsmoke font-lilex ${className}`}
    >
      <Box className="w-full max-w-[1360px] flex flex-col items-start">
        {/* Row 1: Logo & Main Contact Info */}
        <section className="self-stretch flex items-center justify-between pb-0 text-left text-web-woodsmoke mq1825:flex-wrap mq700:flex-wrap mq700:gap-6">
          <Box className="flex items-center">
            <Link to="/">
              <img
                className="h-[82.3px] w-[111.7px] relative cursor-pointer"
                loading="lazy"
                alt="Swaraj Hospital"
                src="/1-922.svg"
              />
            </Link>
          </Box>
          <div
            className="flex flex-col gap-2 text-left"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <a
              href="tel:+916305550362"
              className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative leading-6 font-normal text-num-16"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              +91 (630) 555-0362
            </a>
            <a
              href="mailto:swarajhospital@gmail.com"
              className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative leading-6 font-normal text-num-16"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              swarajhospital@gmail.com
            </a>
          </div>
        </section>

        {/* Divider 1 */}
        <Box className="self-stretch h-[2px] bg-web-mercury !my-10 mq700:!my-6" />

        {/* Row 2: Links Columns & Location Column */}
        <Box className="self-stretch flex items-start justify-between py-0 box-border gap-11 max-w-full flex-wrap mq925:gap-8 mq700:gap-8">
          {/* Columns 1-4: Link Lists */}
          <Box className="flex-1 min-w-[280px] max-w-[900px] grid grid-cols-4 gap-8 mq1825:grid-cols-4 mq1350:grid-cols-2 mq700:grid-cols-1 font-lilex">
            {/* Column 1: Swaraj Links */}
            <Box className="flex flex-col items-start gap-3 min-w-[120px]">
              <Link to="/" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                ABOUT US
              </Link>
              <Link to="/meet-the-team" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                DOCTORS
              </Link>
              <Link to="/career" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                CAREERS
              </Link>
              <Link to="/blogs" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                ARTICLES
              </Link>
              <a
                href="https://dev-developer07.github.io/Swaraj_Maternity/#home"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18"
              >
                SWARAJMATERNITY
              </a>
            </Box>

            {/* Column 2: Specialties */}
            <Box className="flex flex-col items-start gap-3 min-w-[180px]">
              <span className="no-underline text-inherit relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                SPECIALTIES
              </span>
              <Link to="/specialty/general-medicine" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                GENERAL MEDICINE
              </Link>
              <Link to="/specialty/general-surgery" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                GENERAL SURGERY
              </Link>
              <Link to="/specialty/obstetrics-gynaecology" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                OBSTETRICS & GYNAECOLOGY
              </Link>
              <Link to="/specialty/orthopaedics-joint-replacement" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                ORTHOPAEDICS & JOINT REPLACEMENT
              </Link>
              <Link to="/specialty/paediatrics-neonatology" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                PEDIATRICS & NEONATOLOGY
              </Link>
              <Link to="/specialty/cardiology" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                CARDIOLOGY
              </Link>
              <Link to="/specialty/minimal-access-laparoscopic-surgery" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                MINIMAL ACCESS & LAPAROSCOPIC SURGERY
              </Link>
              <Link to="/specialty/ophthalmology" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                OPHTHALMOLOGY
              </Link>
              <Link to="/specialty/neurology" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                NEUROLOGY
              </Link>
              <Link to="/specialty/urology" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                UROLOGY
              </Link>
              <Link to="/specialty/dental-maxillofacial-surgery" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                DENTAL & MAXILLOFACIAL SURGERY
              </Link>
              <Link to="/specialty/gastroenterology" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                GASTROENTEROLOGY
              </Link>
            </Box>

            {/* Column 3: Diagnostics */}
            <Box className="flex flex-col items-start gap-3 min-w-[150px]">
              <span className="no-underline text-inherit relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                DIAGNOSTICS
              </span>
              <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                PATHOLOGY
              </Link>
              <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                RADIOLOGY
              </Link>
              <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                1.5 TESLA MRI
              </Link>
              <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                64 SLICE CT
              </Link>
              <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                4D ULTRASOUND
              </Link>
              <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                DIGITAL X-RAY
              </Link>
              <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                COLOR DOPPLER
              </Link>
              <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                MAMMOGRAPHY
              </Link>
              <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                ECHO & TMT TEST
              </Link>
            </Box>

            {/* Column 4: Services */}
            <Box className="flex flex-col items-start gap-3 min-w-[150px]">
              <span className="no-underline text-inherit relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                SERVICES
              </span>
              <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                24/7 EMERGENCY
              </Link>
              <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                ICU
              </Link>
              <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                STEPDOWN ICU
              </Link>
              <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                NICU
              </Link>
              <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                MODULAR OT
              </Link>
              <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                HDU
              </Link>
              <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                24/7 AMBULANCE
              </Link>
            </Box>
          </Box>

          {/* Column 5: Location, Map & Social Links */}
          <Box className="w-[320px] flex flex-col items-start gap-5 font-lilex mq1350:w-full mq925:w-full mq700:w-full">
            <div className="leading-6 text-num-18 flex items-center max-w-[290px] text-web-woodsmoke font-normal">
              Shri Jyoti Nagar,<br />Patnagarh Road, Balangir
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Swaraj+Hospital+Shri+Jyoti+Nagar+Patnagarh+Road+Balangir"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline border-web-woodsmoke border-solid border-b-[1px] flex items-center pb-1 gap-2 text-num-16 text-web-woodsmoke hover:text-[#1F2A44] hover:border-[#1F2A44] transition-colors shrink-0"
            >
              <span className="relative tracking-[-0.8px] leading-6 uppercase font-semibold">
                VIEW ON MAP
              </span>
              <img className="w-4 h-4 relative" alt="" src="/SVG27.svg" />
            </a>

            <Box className="self-stretch h-px bg-web-mercury my-2" />

            <Box className="flex items-center gap-4">
              <a href="#" className="h-[44px] w-[44px] rounded-full bg-web-white border-web-mercury border-solid border-[1px] flex items-center justify-center hover:bg-web-gray-nurse transition-all duration-300 hover:scale-105">
                <img className="h-5 w-5 relative" loading="lazy" alt="Instagram" src="/SVG21.svg" />
              </a>
              <a href="#" className="h-[44px] w-[44px] rounded-full bg-web-white border-web-mercury border-solid border-[1px] flex items-center justify-center hover:bg-web-gray-nurse transition-all duration-300 hover:scale-105">
                <img className="h-5 w-5 relative" loading="lazy" alt="YouTube" src="/SVG23.svg" />
              </a>
              <a href="#" className="h-[44px] w-[44px] rounded-full bg-web-white border-web-mercury border-solid border-[1px] flex items-center justify-center hover:bg-web-gray-nurse transition-all duration-300 hover:scale-105">
                <img className="h-5 w-5 relative" loading="lazy" alt="WhatsApp" src="/SVG24.svg" />
              </a>
              <a href="#" className="h-[44px] w-[44px] rounded-full bg-web-white border-web-mercury border-solid border-[1px] flex items-center justify-center hover:bg-web-gray-nurse transition-all duration-300 hover:scale-105">
                <img className="h-5 w-5 relative" loading="lazy" alt="Facebook" src="/SVG26.svg" />
              </a>
            </Box>
          </Box>
        </Box>

        {/* Divider 2 */}
        <Box className="self-stretch h-[2px] bg-web-mercury !my-10 mq700:!my-6" />

        {/* Row 3: Copyright & Policies */}
        <Box className="self-stretch flex items-center justify-between pt-0 pb-4 box-border gap-5 max-w-full flex-wrap mq700:flex-col mq700:items-start mq700:gap-4">
          <Box className="flex flex-col items-start max-w-full font-lilex">
            <div className="relative leading-num-24 font-normal">
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "span" }}
                sx={{ lineHeight: "24px", fontWeight: "400", fontFamily: "inherit" }}
              >{`Copyright © Swaraj | Designed By `}</Typography>
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "b" }}
                sx={{ lineHeight: "24px", fontWeight: "400", fontFamily: "inherit" }}
              >
                UnderGrads
              </Typography>
            </div>
          </Box>
          <Box className="flex items-center gap-2.5 max-w-full font-lilex flex-wrap">
            <Box className="flex flex-col items-start">
              <Link to="/" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.16px] leading-num-24 uppercase font-medium text-num-18">{`Terms & Conditions`}</Link>
            </Box>
            <Box className="h-5 w-px relative bg-web-mercury mq700:hidden" />
            <Box className="flex flex-col items-start">
              <Link to="/" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.16px] leading-num-24 uppercase font-medium text-num-18">
                PRIVACY POLICY
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};

export default Section7;
