import { type FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import SectionBadge from "./SectionBadge";
import NavyButton from "./NavyButton";

export type Section3Type = {
  className?: string;
};

const Section3: FunctionComponent<Section3Type> = ({ className = "" }) => {
  return (
    <Box
      className={`self-stretch overflow-hidden flex flex-col justify-center items-start !py-32 !pl-num-280 !pr-num-280 relative isolate z-[1] mq925:!pl-num-70 mq925:!pr-num-70 mq925:!py-16 mq925:box-border mq1350:!pl-num-140 mq1350:!pr-num-140 mq1350:box-border min-h-[600px] ${className}`}
    >
      <div className="absolute inset-0 bg-black/50 z-[0]"></div>
      <img
        className="w-full h-full absolute inset-0 object-cover z-[-1] shrink-0"
        alt=""
        src="/699c22a989738800e2454084-CTA-20Bg-20Image-p-2000-webp@2x.png"
      />
      <Box className="self-stretch flex flex-col items-start z-[1] shrink-0 relative">
        <section className="w-full flex flex-col items-start !pt-5 !pb-num-0 !pl-num-0 !pr-num-0 box-border gap-4 max-w-[800px] text-left text-num-16 text-web-woodsmoke font-lilex mq925:max-w-full">
          <Box className="w-[600px] flex flex-col items-start !pt-num-0 !pb-num-0 !pl-num-0 !pr-[283px] box-border shrink-0 mq925:!pr-[141px] mq925:box-border mq450:!pr-5 mq450:box-border">
            <SectionBadge
              icon="/SVG.svg"
              label="ADVANCED MULTISPECIALITY CARE"
              variant="light"
            />
          </Box>
          <Box className="flex flex-col items-start !pt-num-0 !pb-num-0 !pl-num-0 !pr-5 shrink-0 text-[70px] text-web-white font-stack-sans-text">
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
              Begin Your Next <br />
              Chapter of <br />
              Health and Healing.
            </Typography>
          </Box>
        </section>
        <section className="self-stretch flex items-end gap-[871px] mq450:gap-[435px]">
          <Box className="flex flex-col items-start !pt-8 !pb-num-0 !pl-num-0 !pr-num-0 shrink-0">
            <NavyButton
              label="BOOK AN APPOINTMENT"
              variant="outline"
              endIcon="/container-11.png"
            />
          </Box>
          <Box className="overflow-hidden hidden flex-col items-start !pt-[121px] !pb-num-21 !pl-14 !pr-14 shrink-0">
            <img
              className="w-[113.5px] h-[142px] relative rounded-num-12 object-contain"
              alt=""
              src="/Container7@2x.png"
            />
          </Box>
        </section>
      </Box>
    </Box>
  );
};

export default Section3;
