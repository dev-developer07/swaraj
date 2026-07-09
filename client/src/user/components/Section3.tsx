import { type FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import SectionBadge from "./SectionBadge";
import NavyButton from "./NavyButton";
import Background1 from "./Background1";

export type Section3Type = {
  className?: string;
};

const Section3: FunctionComponent<Section3Type> = ({ className = "" }) => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        className={`self-stretch overflow-hidden flex flex-col justify-center items-start !py-32 !pl-num-280 !pr-num-280 relative isolate z-[1] mq925:!pl-num-70 mq925:!pr-num-70 mq925:!py-16 mq925:box-border mq1350:!pl-num-140 mq1350:!pr-num-140 mq1350:box-border mq450:!pl-6 mq450:!pr-6 mq450:!py-16 mq450:box-border min-h-[600px] ${className} max-[450px]:!w-[390px] max-[450px]:!max-w-full max-[450px]:!mx-auto max-[450px]:!h-[500px] max-[450px]:!min-h-[500px] max-[450px]:!pt-[60px] max-[450px]:!pb-[40px] max-[450px]:!px-5 max-[450px]:box-border`}
      >
        <img
          className="w-full h-full absolute inset-0 object-cover z-[0] shrink-0"
          alt=""
          src="/Overlay+OverlayBlur(1).png"
        />
        <img
          className="w-full h-full absolute inset-0 object-cover z-[-1] shrink-0"
          alt=""
          src="/699c22a989738800e2454084-CTA-20Bg-20Image-p-2000-webp@2x.png"
        />
        <Box className="self-stretch flex flex-col items-start z-[1] shrink-0 relative max-[450px]:!w-[350px] max-[450px]:!max-w-full max-[450px]:!gap-6">
          <section className="w-full flex flex-col items-start !pt-5 !pb-num-0 !pl-num-0 !pr-num-0 box-border gap-4 max-w-[800px] text-left text-num-16 text-web-woodsmoke font-lilex mq925:max-w-full max-[450px]:!pt-0 max-[450px]:!gap-6 max-[450px]:!max-w-[350px] max-[450px]:!w-[350px]">
            <Box className="w-max flex flex-col items-start !pt-num-0 !pb-num-0 !pl-num-0 box-border shrink-0">
              <SectionBadge
                icon="/SVG.svg"
                label="ADVANCED MULTISPECIALITY CARE"
                variant="light"
              />
            </Box>
            <Box className="flex flex-col items-start !pt-num-0 !pb-num-0 !pl-num-0 !pr-5 shrink-0 text-[70px] text-web-white font-stack-sans-text max-[450px]:!pr-0 max-[450px]:!max-w-[350px] max-[450px]:!w-[350px]">
              <Typography
                className="!m-0 relative mq925:text-[56px] mq925:leading-[67px] mq450:text-[42px] mq450:leading-[50px] max-[450px]:!text-[38px] max-[450px]:!leading-[46px] max-[450px]:!tracking-[-0.57px] max-[450px]:!w-[275.7px] max-[450px]:!h-auto"
                variant="inherit"
                variantMapping={{ inherit: "h1" }}
                sx={{
                  fontWeight: "400",
                  lineHeight: "84px",
                  letterSpacing: "-1.05px",
                }}
              >
                Begin Your Next <span className="max-[450px]:hidden"><br /></span>
                Chapter of <span className="max-[450px]:hidden"><br /></span>
                Health and Healing.
              </Typography>
            </Box>
          </section>
          <section className="self-stretch flex items-end gap-[871px] mq450:gap-[435px] max-[450px]:!gap-0 max-[450px]:!w-[350px] max-[450px]:!max-w-full max-[450px]:!pt-0 max-[450px]:box-border">
            <Box className="flex flex-col items-start !pt-8 !pb-num-0 !pl-num-0 !pr-num-0 shrink-0 max-[450px]:!pt-0 max-[450px]:!w-[350px] max-[450px]:!max-w-full">
              <NavyButton
                label="BOOK AN APPOINTMENT"
                variant="outline"
                endIcon="/container-11.png"
                onClick={() => navigate("/team")}
                className="max-[450px]:!w-[245px] max-[450px]:!h-[40px] max-[450px]:!text-[16px] max-[450px]:!leading-[24px] max-[450px]:[--translate-y:24px]"
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
      <Background1 />
    </>
  );
};

export default Section3;
