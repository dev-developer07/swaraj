import { type FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Blur1 from "./Blur1";
import SectionBadge from "./SectionBadge";
import NavyButton from "./NavyButton";

export type Section2Type = {
  className?: string;
};

const Section2: FunctionComponent<Section2Type> = ({ className = "" }) => {
  const navigate = useNavigate();
  const [blur1Items] = useState([
    {
      sVG: "/SVG1.svg",
      eLITEEXPERTISE: "ELITE EXPERTISE",
      boardCertifiedSpecialistsFor:
        "Board-certified specialists for every patient.",
    },
    {
      sVG: "/SVG2.svg",
      eLITEEXPERTISE: "ULTRA HYGIENE",
      boardCertifiedSpecialistsFor:
        "Board-certified specialists for every patient.",
    },
    {
      sVG: "/SVG3.svg",
      eLITEEXPERTISE: "24/7 SUPPORT",
      boardCertifiedSpecialistsFor:
        "Immediate medical assistance, anytime you need.",
    },
  ]);

  const onLinkClick = useCallback(() => {
    navigate("/team");
  }, [navigate]);

  const onSpecialitiesClick = useCallback(() => {
    navigate("/specialities");
  }, [navigate]);

  return (
    <section
      className={`self-stretch [filter:blur(0px)] overflow-hidden flex items-start justify-center !pt-20 !pb-20 !pl-num-0 !pr-num-0 box-border relative isolate max-w-full mq925:!pt-num-34 mq925:!pb-num-34 mq925:box-border mq1350:!pt-num-52 mq1350:!pb-num-52 mq1350:box-border ${className}`}
    >
      <video
        className="h-full w-full absolute !!m-[0 important] top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover z-[0] shrink-0"
        src="/Just_slow_camera_movement_of_t.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <Box className="h-full w-full absolute !!m-[0 important] top-[0%] right-[0%] bottom-[0%] left-[0%] bg-web-woodsmoke-48 z-[1] shrink-0" />
      <Box className="flex flex-col items-start !pt-20 !pb-20 !pl-num-0 !pr-num-0 box-border max-w-full z-[2] shrink-0 mq925:!pt-num-52 mq925:!pb-num-52 mq925:box-border mq450:!pt-num-34 mq450:!pb-num-34 mq450:box-border">
        <Box className="w-full flex flex-col items-start !pt-num-0 !pb-num-0 px-10 max-md:px-6 max-xs:px-4 box-border max-w-num-1440 mq1825:max-w-full">
          <section className="self-stretch flex flex-col items-start text-left text-num-16 text-web-woodsmoke font-lilex">
            <Box className="self-stretch flex items-start">
              <SectionBadge
                icon="/SVG.svg"
                label="SINCE 2010 — TRUSTED medical CARE"
                variant="light"
              />
            </Box>
            <Box className="w-[901px] max-w-full overflow-hidden flex flex-col items-start !pt-6 !pb-num-0 !pl-num-0 !pr-num-0 box-border text-web-white font-stack-sans-text">
              <Box className="overflow-hidden flex items-center !pt-6 !pb-num-0 !pl-num-0 !pr-num-0 shrink-0">
                <Box className="flex flex-col items-start !pt-num-0 !pb-num-0 !pl-num-0 !pr-5">
                  <Typography
                    className="!m-0 relative !font-stack-sans-text !text-[70px] !leading-[84px] tracking-[-1.05px] font-normal max-xl:!text-[60px] max-xl:!leading-[72px] max-lg:!text-[50px] max-lg:!leading-[60px] max-md:!text-[38px] max-md:!leading-[46px] max-xs:!text-[38px] max-xs:!leading-[46px]"
                    variant="inherit"
                    variantMapping={{ inherit: "h1" }}
                  >
                    <Typography
                      variant="inherit"
                      variantMapping={{ inherit: "span" }}
                    >
                      Excellence in healthcare
                      <br />
                    </Typography>
                    <Typography
                      className="text-goldenrod max-sm:text-white"
                      variant="inherit"
                      variantMapping={{ inherit: "span" }}
                    >
                      every moment.
                    </Typography>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </section>
          <Box className="self-stretch flex flex-row items-end !pt-[212px] !pb-num-0 !pl-num-0 !pr-num-0 box-border gap-20 max-w-full max-xl:!pt-[120px] max-lg:flex-col max-lg:items-start max-lg:gap-12 max-sm:gap-8 max-sm:!pt-[80px]">
            <section className="w-[698px] flex flex-col items-start gap-8 max-w-full max-lg:w-full max-lg:gap-6 max-sm:flex-row max-sm:flex-wrap max-sm:gap-x-6 max-sm:gap-y-6">
              {blur1Items.map((item, index) => (
                <Blur1
                  key={index}
                  sVG={item.sVG}
                  eLITEEXPERTISE={item.eLITEEXPERTISE}
                  boardCertifiedSpecialistsFor={
                    item.boardCertifiedSpecialistsFor
                  }
                />
              ))}
            </section>
            <section className="[filter:blur(0px)] rounded-num-44 flex flex-col items-start gap-8 min-w-[582px] max-w-num-582 text-left text-[32px] text-web-white font-inter max-xl:min-w-0 max-xl:w-full max-lg:max-w-full max-lg:min-w-full max-lg:gap-6">
              <Box className="self-stretch flex flex-col items-start">
                <Typography
                  className="!m-0 relative !font-inter !text-[32px] !leading-[51.2px] font-normal max-lg:!text-[26px] max-lg:!leading-[38px] max-sm:!text-[20px] max-sm:!leading-[28px]"
                  variant="inherit"
                  variantMapping={{ inherit: "h1" }}
                >
                  Expert medical specialists dedicated
                  <br />
                  to your family&apos;s wellness.
                </Typography>
              </Box>
              <Box className="self-stretch flex flex-row items-center gap-4 flex-wrap max-sm:flex-col max-sm:items-start max-sm:w-full max-sm:gap-4">
                <NavyButton
                  className="max-sm:!w-auto max-sm:!h-[40px] max-sm:!px-4 max-sm:!py-2"
                  label="Our Specialities"
                  variant="outline"
                  endIcon="/699f6877b8f1c6d2edfe4bd7-button-20ball-svg.png"
                  onClick={onSpecialitiesClick}
                />
                <NavyButton
                  className="max-sm:!w-auto max-sm:!h-[40px] max-sm:!px-4 max-sm:!py-2"
                  label="Book an Appointment"
                  variant="filled"
                  endIcon="/69959585702a1a429f59d932-frame-svg.png"
                  onClick={onLinkClick}
                />
              </Box>
            </section>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Section2;
