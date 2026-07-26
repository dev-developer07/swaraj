import { type FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export type Section7Type = {
  className?: string;
};

const Section7: FunctionComponent<Section7Type> = ({ className = "" }) => {
  return (
    <footer
      className={`w-screen bg-web-white overflow-hidden flex flex-col items-start !pt-num-200 !pb-num-200 !pl-num-280 !pr-num-280 box-border max-w-full text-left text-num-16 text-web-woodsmoke font-lilex mq1825:!pl-num-140 mq1825:!pr-num-140 mq925:!pt-num-84 mq925:!pb-num-84 mq925:!pl-num-70 mq925:!pr-num-70 mq925:box-border mq1350:!pt-num-130 mq1350:!pb-num-130 mq1350:!pl-num-140 mq1350:!pr-num-140 mq1350:box-border mq700:!pl-5 mq700:!pr-5 mq700:!pt-16 mq700:!pb-16 max-[450px]:!w-full max-[450px]:!max-w-full max-[450px]:!px-6 max-[450px]:!pt-16 max-[450px]:!pb-16 ${className}`}
      style={{ maxWidth: "100vw" }}
    >
      <Box className="w-num-1360 flex flex-col items-start max-w-full mq700:w-full max-[450px]:!w-full">
        {/* Row 1: Logo & Main Contact Info */}
        <section className="self-stretch flex items-center justify-between pb-0 text-left text-web-woodsmoke mq1825:flex-wrap mq700:flex-wrap mq700:gap-6 max-[450px]:!flex-col max-[450px]:!items-start max-[450px]:!gap-6">
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
        <Box className="self-stretch h-[2px] bg-web-mercury !my-[72px] max-[450px]:!my-6" />

        {/* Row 2: Links Columns & Location Column */}
        <Box className="self-stretch flex items-start justify-between py-0 box-border gap-11 max-w-full flex-wrap mq925:gap-8 mq700:gap-8 max-[450px]:!flex-col max-[450px]:!gap-8">
          {/* Columns 1-4: Link Lists */}
          <Box className="flex-1 min-w-[280px] max-w-[840px] grid grid-cols-4 gap-6 mq1825:grid-cols-2 mq1350:grid-cols-2 mq700:grid-cols-1 font-lilex max-[450px]:!order-2 max-[450px]:!grid-cols-1 max-[450px]:!gap-12 max-[450px]:!w-full">
            {/* Column 1: Swaraj Links (Aligned with Specialties header) */}
            <Box className="flex flex-col items-start gap-3 min-w-[120px] pt-1 max-[450px]:!gap-4">
              <Link to="/" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
                about us
              </Link>
              <Link to="/meet-the-team" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
                doctors
              </Link>
              <Link to="/career" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
                careers
              </Link>
              <Link to="/blogs" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
                articles
              </Link>
            </Box>

            {/* Column 2: Specialties */}
            <Box className="flex flex-col items-start gap-4">
              <Typography
                className="!m-0 relative uppercase font-medium text-web-woodsmoke max-[450px]:!text-[16px] max-[450px]:!leading-[24px]"
                variant="h3"
                sx={{ fontSize: "20px", lineHeight: "24px", fontWeight: "500", fontFamily: "inherit" }}
              >
                Specialties
              </Typography>
              <Box className="flex flex-col items-start gap-3 max-[450px]:!gap-4">
                <Link to="/specialty/general-medicine" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
                  general medicine
                </Link>
                <Link to="/specialty/general-surgery" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
                  general surgery
                </Link>
                <Link to="/specialty/obstetrics-gynaecology" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
                  {`Obstetrics & Gynaecology`}
                </Link>
                <Link to="/specialty/orthopaedics-joint-replacement" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
                  Orthopaedics & Joint Replacement
                </Link>
                <Link to="/specialty/paediatrics-neonatology" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
                  Pediatrics & Neonatology
                </Link>
                <Link to="/specialty/cardiology" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
                  Cardiology
                </Link>
                <Link to="/specialty/minimal-access-laparoscopic-surgery" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
                  minimal access & laparoscopic surgery
                </Link>
                <Link to="/specialty/ophthalmology" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
                  ophthalmology
                </Link>
                <Link to="/specialty/neurology" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
                  neurology
                </Link>
                <Link to="/specialty/urology" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
                  urology
                </Link>
                <Link to="/specialty/dental-maxillofacial-surgery" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
                  dental & maxillofacial surgery
                </Link>
                <Link to="/specialty/gastroenterology" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
                  gastroenterology
                </Link>
              </Box>
            </Box>

            {/* Column 3: Diagnostics */}
            <Box className="flex flex-col items-start gap-4 min-w-[150px]">
              <Typography
                className="!m-0 relative uppercase font-medium text-web-woodsmoke max-[450px]:!text-[16px] max-[450px]:!leading-[24px]"
                variant="h3"
                sx={{ fontSize: "20px", lineHeight: "24px", fontWeight: "500", fontFamily: "inherit" }}
              >
                Diagnostics
              </Typography>
              <Box className="flex flex-col items-start gap-3 max-[450px]:!gap-4">
                <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
                  Pathology
                </Link>
                <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
                  Radiology
                </Link>
                <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
                  1.5 tesla mri
                </Link>
                <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
                  64 slice ct
                </Link>
                <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
                  4d ultrasound
                </Link>
                <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
                  digital x-ray
                </Link>
                <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
                  color doppler
                </Link>
                <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
                  mammography
                </Link>
                <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
                  echo & tmt test
                </Link>
              </Box>
            </Box>

            {/* Column 4: Services */}
            <Box className="flex flex-col items-start gap-4 min-w-[150px]">
              <Typography
                className="!m-0 relative uppercase font-medium text-web-woodsmoke max-[450px]:!text-[16px] max-[450px]:!leading-[24px]"
                variant="h3"
                sx={{ fontSize: "20px", lineHeight: "24px", fontWeight: "500", fontFamily: "inherit" }}
              >
                Services
              </Typography>
              <Box className="flex flex-col items-start gap-3 max-[450px]:!gap-4">
                <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
                  24/7 emergency
                </Link>
                <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
                  icu
                </Link>
                <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
                  stepdown icu
                </Link>
                <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
                  nicu
                </Link>
                <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
                  modular ot
                </Link>
                <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
                  hdu
                </Link>
                <Link to="/specialties" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.18px] leading-6 uppercase font-medium text-num-18 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
                  24/7 ambulance
                </Link>
              </Box>
            </Box>
          </Box>

          {/* Column 5: Location, Map & Social Links */}
          <Box className="w-[380px] flex flex-col items-start gap-5 font-lilex mq1350:w-full mq925:w-full mq700:w-full pt-1 max-[450px]:!flex-col max-[450px]:!w-full max-[450px]:!order-1 max-[450px]:!gap-6">
            <div className="leading-6 text-num-18 flex items-center max-w-[290px] text-web-woodsmoke font-normal max-[450px]:!order-2 max-[450px]:!text-[16px] max-[450px]:!leading-[24px]">
              Shri Jyoti Nagar, Patnagarh Road, Balangir
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Swaraj+Hospital+Shri+Jyoti+Nagar+Patnagarh+Road+Balangir"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline border-web-woodsmoke border-solid border-b-[1px] flex items-center pb-1 gap-2 text-num-16 text-web-woodsmoke hover:text-[#1F2A44] hover:border-[#1F2A44] transition-colors shrink-0 max-[450px]:!order-3 max-[450px]:!text-[14px] max-[450px]:!leading-[21px] max-[450px]:!mb-4"
            >
              <span className="relative tracking-[-0.8px] leading-6 uppercase font-semibold">
                View on map
              </span>
              <img className="w-4 h-4 relative" alt="" src="/SVG27.svg" />
            </a>

            <Box className="self-stretch h-px bg-web-mercury my-2 max-[450px]:!order-4" />

            <Box className="flex items-center gap-4 max-[450px]:!order-1">
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
        <Box className="self-stretch h-[2px] bg-web-mercury !my-[72px] max-[450px]:!my-6" />

        {/* Row 3: Copyright & Policies */}
        <Box className="self-stretch flex items-center justify-between pt-0 pb-4 box-border gap-5 max-w-full flex-wrap mq925:flex-col mq925:items-start mq925:gap-4 mq700:flex-col mq700:items-start mq700:gap-4 max-[450px]:!flex-col max-[450px]:!items-start max-[450px]:!gap-4">
          <Box className="flex flex-col items-start max-w-full font-lilex">
            <div className="relative leading-num-24 font-normal max-[450px]:!text-[14px] max-[450px]:!leading-[21px]">
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
          <Box className="flex items-center gap-2.5 max-w-full font-lilex flex-wrap max-[450px]:!flex-col max-[450px]:!items-start max-[450px]:!gap-3">
            <Box className="flex flex-col items-start">
              <Link to="/" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.16px] leading-num-24 uppercase font-medium text-num-18 max-[450px]:!text-[14px] max-[450px]:!leading-[21px]">{`Terms & Conditions`}</Link>
            </Box>
            <Box className="h-5 w-px relative bg-web-mercury mq925:hidden mq700:hidden mq450:hidden max-[450px]:hidden" />
            <Box className="flex flex-col items-start">
              <Link to="/" className="no-underline text-inherit hover:text-[#1F2A44] transition-colors relative tracking-[-0.16px] leading-num-24 uppercase font-medium text-num-18 max-[450px]:!text-[14px] max-[450px]:!leading-[21px]">
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
