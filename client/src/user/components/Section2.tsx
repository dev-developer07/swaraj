import { type FunctionComponent, useState, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import Blur1 from "./Blur1";
import SectionBadge from "./SectionBadge";
import NavyButton from "./NavyButton";

export type Section2Type = {
  className?: string;
};

const Section2: FunctionComponent<Section2Type> = ({ className = "" }) => {
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
    // Please sync "Doctor's List" to the project
  }, []);

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
        <Box className="w-full flex flex-col items-start !pt-num-0 !pb-num-0 !pl-num-40 !pr-num-40 box-border max-w-num-1440 mq1825:max-w-full">
          <section className="self-stretch flex flex-col items-start text-left text-num-16 text-web-woodsmoke font-lilex">
            <Box className="self-stretch flex items-start">
              <SectionBadge
                icon="/SVG.svg"
                label="SINCE 2010 — TRUSTED medical CARE"
                variant="light"
              />
            </Box>
            <Box className="w-[901px] overflow-hidden flex flex-col items-start !pt-6 !pb-num-0 !pl-num-0 !pr-num-0 box-border max-w-[901px] text-[70px] text-web-white font-stack-sans-text mq925:max-w-full">
              <Box className="overflow-hidden flex items-center !pt-6 !pb-num-0 !pl-num-0 !pr-num-0 shrink-0">
                <Box className="flex flex-col items-start !pt-num-0 !pb-num-0 !pl-num-0 !pr-5">
                  <Typography
                    className="!m-0 relative mq925:text-[56px] mq925:leading-[67px] mq450:text-[42px] mq450:leading-[50px]"
                    variant="inherit"
                    variantMapping={{ inherit: "h1" }}
                    sx={{
                      fontWeight: "400",
                      lineHeight: "84px",
                      letterSpacing: "-1.05px",
                    }}
                  >
                    <Typography
                      variant="inherit"
                      variantMapping={{ inherit: "span" }}
                      sx={{ lineHeight: "84px" }}
                    >
                      Excellence in healthcare
                      <br />
                    </Typography>
                    <Typography
                      className="text-goldenrod"
                      variant="inherit"
                      variantMapping={{ inherit: "span" }}
                      sx={{ lineHeight: "84px" }}
                    >
                      every moment.
                    </Typography>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </section>
          <Box className="self-stretch flex items-end !pt-[212px] !pb-num-0 !pl-num-0 !pr-num-0 box-border gap-20 max-w-full mq925:gap-10 mq925:!pt-[138px] mq925:box-border mq1350:flex-wrap mq450:gap-5">
            <section className="w-[698px] flex flex-col items-start gap-8 max-w-full mq925:gap-4 mq925:min-w-full mq1350:flex-1">
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
            <section className="[filter:blur(0px)] rounded-num-44 flex flex-col items-start gap-8 min-w-[582px] max-w-num-582 text-left text-[32px] text-web-white font-inter mq925:gap-4 mq925:max-w-full mq925:min-w-full mq1350:w-full">
              <Box className="self-stretch flex flex-col items-start">
                <Typography
                  className="!m-0 relative mq925:text-[26px] mq925:leading-[41px] mq450:text-num-19 mq450:leading-[31px]"
                  variant="inherit"
                  variantMapping={{ inherit: "h1" }}
                  sx={{ fontWeight: "400", lineHeight: "51.2px" }}
                >
                  Expert medical specialists dedicated
                  <br />
                  to your family&apos;s wellness.
                </Typography>
              </Box>
              <Box className="self-stretch flex items-center gap-4 mq925:flex-wrap">
                <NavyButton
                  label="Our Services"
                  variant="outline"
                  endIcon="/699f6877b8f1c6d2edfe4bd7-button-20ball-svg.png"
                />
                <NavyButton
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
