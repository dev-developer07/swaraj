import { type FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export type Section7Type = {
  className?: string;
};

const Section7: FunctionComponent<Section7Type> = ({ className = "" }) => {
  return (
    <footer
      className={`w-screen bg-web-white overflow-hidden flex flex-col items-start !pt-num-200 !pb-num-200 !pl-num-280 !pr-num-280 box-border max-w-full text-left text-num-16 text-web-woodsmoke font-lilex mq925:!pt-num-84 mq925:!pb-num-84 mq925:!pl-num-70 mq925:!pr-num-70 mq925:box-border mq1350:!pt-num-130 mq1350:!pb-num-130 mq1350:!pl-num-140 mq1350:!pr-num-140 mq1350:box-border mq700:!pl-5 mq700:!pr-5 mq700:!pt-16 mq700:!pb-16 ${className}`}
      style={{ maxWidth: "100vw" }}
    >
      <Box className="w-num-1360 flex flex-col items-start max-w-full mq700:w-full">
        {/* Row 1: Logo & Main Contact Info */}
        <section className="self-stretch flex items-center justify-between pb-0 text-left text-web-woodsmoke mq1825:flex-wrap mq700:flex-wrap mq700:gap-6">
          <Box className="flex items-center">
            <Link to="/">
              <img
                className="h-[82.3px] w-[111.7px] relative cursor-pointer"
                loading="lazy"
                alt=""
                src="/1-922.svg"
              />
            </Link>
          </Box>
          <div
            className="flex flex-col gap-2"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textAlign: "left",
              fontFamily: "Inter, sans-serif"
            }}
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
        <Box className="self-stretch h-[2px] bg-web-mercury !my-[72px]" />

        {/* Row 2: Links Columns & Location Column */}
        <Box className="self-stretch flex items-start justify-between py-0 box-border gap-11 max-w-full mq1350:flex-wrap mq700:gap-8">
          {/* Columns 1-4: Link Lists */}
          <Box className="flex-1 max-w-[840px] flex items-start justify-between gap-6 mq925:gap-4 mq1350:flex-wrap font-lilex">
            {/* Column 1: Swaraj Links (Aligned with Specialties header) */}
            <Box className="flex flex-col items-start gap-3 min-w-[120px] pt-1">
              <Link to="/" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                about us
              </Link>
              <Link to="/meet-the-team" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                doctors
              </Link>
              <Link to="/career" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                careers
              </Link>
              <Link to="/blogs" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                articles
              </Link>
            </Box>

            {/* Column 2: Specialties */}
            <Box className="flex flex-col items-start gap-4">
              <Typography
                className="!m-0 relative uppercase font-medium text-web-woodsmoke"
                variant="h3"
                sx={{ fontSize: "20px", lineHeight: "24px", fontWeight: "500", fontFamily: "inherit" }}
              >
                Specialties
              </Typography>
              <Box className="flex flex-col items-start gap-3">
                <Link to="/specialty/general-medicine" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                  general medicine
                </Link>
                <Link to="/specialty/general-surgery" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                  general surgery
                </Link>
                <Link to="/specialty/obstetrics-gynaecology" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                  {`Obstetrics & Gynaecology`}
                </Link>
                <Link to="/specialty/orthopaedics-joint-replacement" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                  Orthopaedics <br /> & Joint Replacement
                </Link>
                <Link to="/specialty/paediatrics-neonatology" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                  Pediatrics & Neonatology
                </Link>
                <Link to="/specialty/cardiology" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                  Cardiology
                </Link>
                <Link to="/specialty/minimal-access-laparoscopic-surgery" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                  minimal access <br /> & laparoscopic surgery
                </Link>
                <Link to="/specialty/ophthalmology" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                  ophthalmology
                </Link>
                <Link to="/specialty/neurology" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                  neurology
                </Link>
                <Link to="/specialty/urology" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                  urology
                </Link>
                <Link to="/specialty/dental-maxillofacial-surgery" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                  dental & maxillofacial surgery
                </Link>
                <Link to="/specialty/gastroenterology" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                  gastroenterology
                </Link>
              </Box>
            </Box>

            {/* Column 3: Diagnostics */}
            <Box className="flex flex-col items-start gap-4 min-w-[150px]">
              <Typography
                className="!m-0 relative uppercase font-medium text-web-woodsmoke"
                variant="h3"
                sx={{ fontSize: "20px", lineHeight: "24px", fontWeight: "500", fontFamily: "inherit" }}
              >
                Diagnostics
              </Typography>
              <Box className="flex flex-col items-start gap-3">
                <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                  Pathology
                </Link>
                <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                  Radiology
                </Link>
                <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                  1.5 tesla mri
                </Link>
                <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                  64 slice ct
                </Link>
                <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                  4d ultrasound
                </Link>
                <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                  digital x-ray
                </Link>
                <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                  color doppler
                </Link>
                <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                  mammography
                </Link>
                <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                  echo & tmt test
                </Link>
              </Box>
            </Box>

            {/* Column 4: Services */}
            <Box className="flex flex-col items-start gap-4 min-w-[150px]">
              <Typography
                className="!m-0 relative uppercase font-medium text-web-woodsmoke"
                variant="h3"
                sx={{ fontSize: "20px", lineHeight: "24px", fontWeight: "500", fontFamily: "inherit" }}
              >
                Services
              </Typography>
              <Box className="flex flex-col items-start gap-3">
                <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                  24/7 emergency
                </Link>
                <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                  icu
                </Link>
                <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                  stepdown icu
                </Link>
                <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                  nicu
                </Link>
                <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                  modular ot
                </Link>
                <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                  hdu
                </Link>
                <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18">
                  24/7 ambulance
                </Link>
              </Box>
            </Box>
          </Box>

          {/* Column 5: Location, Map & Social Links */}
          <Box className="w-[380px] flex flex-col items-start gap-5 font-lilex mq1350:w-full pt-1">
            <div className="leading-6 text-num-18 flex items-center max-w-[290px] text-web-woodsmoke font-normal">
              Shri Jyoti Nagar, Patnagarh Road, Balangir
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Swaraj+Hospital+Shri+Jyoti+Nagar+Patnagarh+Road+Balangir"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline border-web-woodsmoke border-solid border-b-[1px] flex items-center pb-1 gap-2 text-num-16 text-web-woodsmoke hover:text-[#1F2A44] hover:border-[#1F2A44] transition-colors shrink-0"
            >
              <span className="relative tracking-[-0.8px] leading-6 uppercase font-semibold">
                View on map
              </span>
              <img className="w-4 h-4 relative" alt="" src="/SVG27.svg" />
            </a>

            <Box className="self-stretch h-px bg-web-mercury my-2" />

            <Box className="flex items-center gap-4">
              <a href="#" className="h-[50px] w-[50px] rounded-full bg-web-white border-web-mercury border-solid border-[1px] flex items-center justify-center hover:bg-web-gray-nurse transition-all duration-300 hover:scale-105">
                <img className="h-6 w-6 relative" loading="lazy" alt="" src="/SVG21.svg" />
              </a>
              <a href="#" className="h-[50px] w-[50px] rounded-full bg-web-white border-web-mercury border-solid border-[1px] flex items-center justify-center hover:bg-web-gray-nurse transition-all duration-300 hover:scale-105">
                <img className="h-6 w-6 relative" loading="lazy" alt="" src="/SVG23.svg" />
              </a>
              <a href="#" className="h-[50px] w-[50px] rounded-full bg-web-white border-web-mercury border-solid border-[1px] flex items-center justify-center hover:bg-web-gray-nurse transition-all duration-300 hover:scale-105">
                <img className="h-6 w-6 relative" loading="lazy" alt="" src="/SVG24.svg" />
              </a>
              <a href="#" className="h-[50px] w-[50px] rounded-full bg-web-white border-web-mercury border-solid border-[1px] flex items-center justify-center hover:bg-web-gray-nurse transition-all duration-300 hover:scale-105">
                <img className="h-6 w-6 relative" loading="lazy" alt="" src="/SVG26.svg" />
              </a>
            </Box>
          </Box>
        </Box>

        {/* Divider 2 */}
        <Box className="self-stretch h-[2px] bg-web-mercury !my-[72px]" />

        {/* Row 3: Copyright & Policies */}
        <Box className="self-stretch flex items-center justify-between pt-0 pb-4 box-border gap-5 max-w-full mq1350:flex-wrap mq700:flex-col mq700:items-start mq700:gap-4">
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
          <Box className="flex items-center gap-2.5 max-w-full font-lilex mq450:flex-wrap">
            <Box className="flex flex-col items-start">
              <Link to="/" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.16px] leading-num-24 uppercase font-medium text-num-18">{`Terms & Conditions`}</Link>
            </Box>
            <Box className="h-5 w-px relative bg-web-mercury mq450:w-full mq450:h-px" />
            <Box className="flex flex-col items-start">
              <Link to="/" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.16px] leading-num-24 uppercase font-medium text-num-18">
                Privacy Policy
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};

export default Section7;
