import { type FunctionComponent } from "react";
import { Box } from "@mui/material";

export type Background1Type = {
  className?: string;
};

const Background1: FunctionComponent<Background1Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-web-gothic overflow-hidden flex flex-col items-start !pt-4 !pb-4 !pl-num-0 !pr-num-0 box-border max-w-full z-[0] text-left text-num-16 text-web-woodsmoke font-inter ${className}`}
    >
      <Box className="w-[4972.6px] flex items-center gap-[60px] max-w-[259%] shrink-0 mq1350:gap-[30px]">
        <Box className="flex items-center gap-[60px] max-w-full mq925:gap-[30px] mq1825:flex-wrap">
          <Box className="flex items-center gap-2.5">
            <Box className="h-7 w-7 flex flex-col items-start justify-center">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src="/SVG4.svg"
              />
            </Box>
            <Box className="flex flex-col items-start">
              <div className="relative leading-num-24 uppercase">
                24/7 PRIORITY SUPPORT
              </div>
            </Box>
          </Box>
          <Box className="flex items-center gap-2.5 max-w-full">
            <Box className="h-7 w-7 flex flex-col items-start justify-center">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src="/SVG4.svg"
              />
            </Box>
            <Box className="flex flex-col items-start">
              <div className="relative leading-num-24 uppercase">
                WORLD-CLASS HYGIENE PROTOCOLS
              </div>
            </Box>
          </Box>
          <Box className="flex items-center gap-[11px]">
            <Box className="h-7 w-7 flex flex-col items-start justify-center">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src="/SVG4.svg"
              />
            </Box>
            <Box className="flex flex-col items-start">
              <div className="relative leading-num-24 uppercase">
                NABH PRE-ACCREDITED
              </div>
            </Box>
          </Box>
          <Box className="flex items-center gap-[11px]">
            <Box className="h-7 w-7 flex flex-col items-start justify-center">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src="/SVG4.svg"
              />
            </Box>
            <Box className="flex flex-col items-start">
              <div className="relative leading-num-24 uppercase">
                PATIENT SATISFACTION
              </div>
            </Box>
          </Box>
          <Box className="flex items-center gap-[11px]">
            <Box className="h-7 w-7 flex flex-col items-start justify-center">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src="/SVG4.svg"
              />
            </Box>
            <Box className="flex flex-col items-start">
              <div className="relative leading-num-24 uppercase">
                ADVANCED DIAGNOSTICS
              </div>
            </Box>
          </Box>
        </Box>
        <Box className="flex items-center gap-[60px] max-w-full mq925:gap-[30px] mq1825:flex-wrap">
          <Box className="flex items-center gap-[11px]">
            <Box className="h-7 w-7 flex flex-col items-start justify-center">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                alt=""
                src="/SVG4.svg"
              />
            </Box>
            <Box className="flex flex-col items-start">
              <div className="relative leading-num-24 uppercase">
                24/7 EMERGENCY CARE
              </div>
            </Box>
          </Box>
          <Box className="flex items-center gap-3 max-w-full">
            <Box className="h-7 w-7 relative" />
            <Box className="h-6 w-[294.9px] relative hidden" />
          </Box>
          <Box className="flex items-center gap-3">
            <Box className="h-7 w-7 relative" />
            <Box className="h-6 w-[194.9px] relative" />
          </Box>
          <Box className="flex items-center gap-3">
            <Box className="h-7 w-7 relative" />
            <Box className="h-6 w-[222.5px] relative" />
          </Box>
          <Box className="flex items-center gap-3">
            <Box className="h-7 w-7 relative" />
            <Box className="h-6 w-[272.9px] relative" />
          </Box>
        </Box>
        <Box className="flex items-center gap-[60px] max-w-full mq925:gap-[30px] mq1825:flex-wrap">
          <Box className="flex items-center gap-3">
            <Box className="h-7 w-7 relative" />
            <Box className="h-6 w-[192.3px] relative" />
          </Box>
          <Box className="flex items-center gap-3 max-w-full">
            <Box className="h-7 w-7 relative" />
            <Box className="h-6 w-[294.9px] relative" />
          </Box>
          <Box className="flex items-center gap-3">
            <Box className="h-7 w-7 relative" />
            <Box className="h-6 w-[194.9px] relative" />
          </Box>
          <Box className="flex items-center gap-3">
            <Box className="h-7 w-7 relative" />
            <Box className="h-6 w-[222.5px] relative" />
          </Box>
          <Box className="flex items-center gap-3">
            <Box className="h-7 w-7 relative" />
            <Box className="h-6 w-[272.9px] relative" />
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Background1;
