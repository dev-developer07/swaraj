import { type FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import SectionBadge from "./SectionBadge";
import NavyButton from "./NavyButton";

export type BackgroundType = {
  className?: string;
};

const Background: FunctionComponent<BackgroundType> = ({ className = "" }) => {
  return (
    <Box
      className={`w-[890px] h-[890px] rounded-[890px] bg-web-gray-nurse overflow-hidden shrink-0 flex flex-col items-center justify-center max-w-full z-[1] mq1825:h-auto ${className}`}
    >
      <section className="w-[599px] flex flex-col items-center justify-center max-w-num-599 shrink-0 text-center text-num-16 text-web-woodsmoke font-lilex mq925:max-w-full">
        <SectionBadge
          icon="/SVG.svg"
          label="Welcome to Swaraj"
          variant="light"
        />
        <Box className="flex flex-col items-start !pt-6 !pb-num-0 !pl-num-0 !pr-num-0 box-border max-w-num-500 text-num-48 font-stack-sans-text mq925:max-w-full">
          <Box className="w-[500px] h-num-129_6 [filter:blur(0px)] overflow-hidden shrink-0 flex items-end !pt-num-0 !pb-num-0_2 !pl-num-0 !pr-num-0 box-border z-[unset]">
            <Typography
              className="!m-0 h-num-130 w-[500px] relative flex items-center justify-center shrink-0 z-[unset] mq925:text-num-38 mq925:leading-num-52 mq450:text-num-29 mq450:leading-num-39"
              variantMapping={{ inherit: "h1" }}
              sx={{
                fontFamily: "inherit",
                fontWeight: "400",
                fontSize: "inherit",
                lineHeight: "64.8px",
                letterSpacing: "-0.72px",
              }}
            >
              Trusted Multispeciality Care
            </Typography>
          </Box>
        </Box>
        <Box className="flex flex-col items-start !pt-4 !pb-num-0 !pl-num-0 !pr-num-0 font-inter">
          <Box className="[filter:blur(0px)] overflow-hidden flex flex-col items-center !pt-num-0 !pb-num-0 !pl-num-5 !pr-num-5">
            <div className="w-num-589 relative leading-num-24 flex items-center justify-center">
              At the heart of Swaraj Hospital is a commitment to advanced
              medicine and patient dignity. We don&apos;t just treat conditions,
              we focus on the long-term health and wellbeing of every family we
              serve. Combining specialist expertise with compassionate care, we
              ensure every visit feels personal, transparent, and world-class.
            </div>
          </Box>
        </Box>
      </section>
      <section className="flex flex-col items-start !pt-11 !pb-num-0 !pl-num-0 !pr-num-0 box-border max-w-[387%] shrink-0 text-center text-num-16 text-web-woodsmoke font-inter">
        <Box className="w-[3435.8px] h-num-60 bg-web-white overflow-hidden shrink-0 flex items-start !pt-4 !pb-4 !pl-num-0 !pr-num-0 box-border max-w-full z-[unset] mq1825:h-auto">
          <Box className="!ml-[-663.5px] flex items-center gap-[60px] shrink-0 max-w-[141%] mq1350:gap-[30px] mq1825:flex-wrap">
            <Box className="h-7 flex flex-col items-start justify-center max-w-full mq1825:h-auto">
              <Box className="flex items-center gap-[60px] mq925:gap-[30px] mq1825:flex-wrap">
                <Box className="flex items-center gap-3">
                  <Box className="h-7 w-7 relative" />
                  <Box className="h-6 w-num-101_8 relative" />
                </Box>
                <Box className="flex items-center gap-3">
                  <Box className="h-7 w-7 relative" />
                  <Box className="h-6 w-num-223_8 relative" />
                </Box>
                <Box className="flex items-center gap-3">
                  <Box className="h-7 w-7 relative" />
                  <Box className="h-6 w-num-199 relative hidden" />
                </Box>
                <Box className="flex items-center gap-3">
                  <Box className="h-7 w-7 relative" />
                  <Box className="h-6 w-num-227_7 relative" />
                </Box>
                <Box className="flex items-center gap-3">
                  <Box className="h-7 w-7 relative" />
                  <Box className="h-6 w-num-186_9 relative" />
                </Box>
                <Box className="flex items-center gap-3">
                  <Box className="h-7 w-7 relative" />
                  <Box className="h-6 w-num-109_2 relative" />
                </Box>
              </Box>
            </Box>
            <Box className="h-7 flex flex-col items-start justify-center max-w-full mq1825:h-auto">
              <Box className="flex items-center gap-[40px] whitespace-nowrap flex-nowrap mq925:gap-[20px]">
                <img className="h-7 w-7 relative object-contain shrink-0" alt="" src="/SVG4.svg" />
                <div className="relative leading-num-24 uppercase font-medium text-[16px]">CLIENT SATISFACTION</div>
                <img className="h-7 w-7 relative object-contain shrink-0" alt="" src="/SVG4.svg" />
                <div className="relative leading-num-24 uppercase font-medium text-[16px]">99% PATIENT SATISFACTION</div>
                <img className="h-7 w-7 relative object-contain shrink-0" alt="" src="/SVG4.svg" />
                <div className="relative leading-num-24 uppercase font-medium text-[16px]">15+ YEARS OF EXPERTISE</div>
                <img className="h-7 w-7 relative object-contain shrink-0" alt="" src="/SVG4.svg" />
                <div className="relative leading-num-24 uppercase font-medium text-[16px]">NABH PRE-ACCREDITED</div>
                <img className="h-7 w-7 relative object-contain shrink-0" alt="" src="/SVG4.svg" />
              </Box>
            </Box>
            <Box className="h-7 flex flex-col items-start justify-center max-w-full mq1825:h-auto">
              <Box className="flex items-center gap-[60px] mq925:gap-[30px] mq1825:flex-wrap">
                <Box className="flex items-center gap-3">
                  <Box className="h-7 w-7 relative" />
                  <Box className="h-6 w-num-101_8 relative hidden" />
                </Box>
                <Box className="flex items-center gap-3">
                  <Box className="h-7 w-7 relative" />
                  <Box className="h-6 w-num-223_8 relative" />
                </Box>
                <Box className="flex items-center gap-3">
                  <Box className="h-7 w-7 relative" />
                  <Box className="h-6 w-num-199 relative" />
                </Box>
                <Box className="flex items-center gap-3">
                  <Box className="h-7 w-7 relative" />
                  <Box className="h-6 w-num-227_7 relative" />
                </Box>
                <Box className="flex items-center gap-3">
                  <Box className="h-7 w-7 relative" />
                  <Box className="h-6 w-num-186_9 relative" />
                </Box>
                <Box className="flex items-center gap-3">
                  <Box className="h-7 w-7 relative" />
                  <Box className="h-6 w-num-109_2 relative" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </section>
      <Box className="flex flex-col items-start !pt-[60px] !pb-num-0 !pl-num-0 !pr-num-0 shrink-0">
        <Box className="[filter:blur(0px)] flex items-center justify-center gap-4 mq925:flex-wrap">
          <NavyButton
            label="MORE ABOUT US"
            variant="filled"
            endIcon="/container-3.png"
          />
          <NavyButton
            label="Our specialties"
            variant="outline"
            endIcon="/container-3.png"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Background;
