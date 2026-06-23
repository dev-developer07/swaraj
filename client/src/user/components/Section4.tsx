import { type FunctionComponent, useState } from "react";
import { Box, Typography } from "@mui/material";
import HorizontalBorderBlur from "./HorizontalBorderBlur";
import SectionBadge from "./SectionBadge";

export type Section4Type = {
  className?: string;
};

const Section4: FunctionComponent<Section4Type> = ({ className = "" }) => {
  const [horizontalBorderBlurItems] = useState([
    {
      sVG: "/SVG11.svg",
      emergencyService: "24/7 Emergency Service",
      horizontalBorderBlurMarginTop: undefined,
      containerJustifyContent: "center" as const,
      sVGIconAlignSelf: "stretch" as const,
      sVGIconFlex: 1,
      sVGIconOverflow: "hidden" as const,
      sVGIconMaxHeight: "100%" as const,
      sVGIconWidth: undefined,
      sVGIconHeight: undefined,
    },
    {
      sVG: "/SVG22.svg",
      emergencyService: "ICU",
      horizontalBorderBlurMarginTop: undefined,
      containerJustifyContent: "center" as const,
      sVGIconAlignSelf: "stretch" as const,
      sVGIconFlex: 1,
      sVGIconOverflow: "hidden" as const,
      sVGIconMaxHeight: "100%" as const,
      sVGIconWidth: undefined,
      sVGIconHeight: undefined,
    },
    {
      sVG: "/SVG31.svg",
      emergencyService: "Stepdown ICU",
      horizontalBorderBlurMarginTop: undefined,
      containerJustifyContent: "unset" as const,
      sVGIconAlignSelf: "unset" as const,
      sVGIconFlex: "unset" as const,
      sVGIconOverflow: "unset" as const,
      sVGIconMaxHeight: "unset" as const,
      sVGIconWidth: "32px" as const,
      sVGIconHeight: "28px" as const,
    },
    {
      sVG: "/SVG71.svg",
      emergencyService: "NICU — Neonatal Intensive Care",
      horizontalBorderBlurMarginTop: undefined,
      containerJustifyContent: "center" as const,
      sVGIconAlignSelf: "stretch" as const,
      sVGIconFlex: 1,
      sVGIconOverflow: "hidden" as const,
      sVGIconMaxHeight: "100%" as const,
      sVGIconWidth: undefined,
      sVGIconHeight: undefined,
    },
  ]);
  return (
    <Box
      className={`self-stretch bg-web-white flex flex-col items-center !pt-[150px] !pb-num-0 !pl-num-0 !pr-num-0 gap-[34px] z-[2] !mt-[-0.6px] relative mq925:gap-[17px] ${className}`}
    >
      <section className="w-[1400px] flex items-end !pt-num-0 !pb-num-0 !pl-5 !pr-5 box-border gap-[492px] text-left text-num-16 text-web-woodsmoke font-lilex mq925:gap-[123px] mq1350:gap-[246px] mq450:gap-[61px]">
        <Box className="[filter:blur(0px)] flex flex-col items-start max-w-[490px] mq925:max-w-full">
          <SectionBadge
            icon="/SVG.svg"
            label="our specialized services"
            variant="dark"
          />
          <Box className="flex flex-col items-start !pt-6 !pb-num-0 !pl-num-0 !pr-num-2 text-num-48 font-stack-sans-text">
            <Typography
              className="!m-0 relative mq925:text-num-38 mq925:leading-num-52 mq450:text-num-29 mq450:leading-num-39"
              variant="inherit"
              variantMapping={{ inherit: "h1" }}
              sx={{
                fontWeight: "400",
                lineHeight: "64.8px",
                letterSpacing: "-0.72px",
              }}
            >
              Experience <br />
              the Difference.
            </Typography>
          </Box>
        </Box>
        <Box className="flex-1 flex flex-col items-start max-w-[378px] font-inter">
          <Box className="self-stretch [filter:blur(0px)] flex flex-col items-start">
            <div className="w-[378px] relative leading-num-24 flex items-center">
              Understanding what sets Swaraj Hospital apart from a typical
              hospital in western Odisha
            </div>
          </Box>
        </Box>
      </section>
      <Box className="self-stretch bg-web-gray-nurse flex flex-col items-start !pt-num-0 !pb-num-0 !pl-60 !pr-60 mq925:!pl-[60px] mq925:!pr-[60px] mq925:box-border mq1350:!pl-num-120 mq1350:!pr-num-120 mq1350:box-border">
        <Box className="w-full h-[615px] flex flex-col items-start !pt-num-0 !pb-num-0 !pl-num-40 !pr-num-40 box-border max-w-num-1440 mq925:h-auto mq1825:max-w-full">
          <section className="w-num-1360 h-[77px] [filter:blur(0px)] border-web-gothic border-solid border-b-[1px] box-border grid grid-cols-[repeat(4,_1fr)] grid-rows-[76px] gap-4 text-left text-num-24 text-web-woodsmoke font-stack-sans-text">
            <Box className="h-num-76 flex items-center !pt-num-22 !pb-num-22 !pl-num-0 !pr-num-0 box-border col-[1_/_span_2] row-[1]">
              <Box className="flex flex-col items-start shrink-0">
                <Typography
                  className="!m-0 relative mq450:text-num-19 mq450:leading-num-29"
                  variant="inherit"
                  variantMapping={{ inherit: "h3" }}
                  sx={{
                    fontWeight: "400",
                    lineHeight: "36px",
                    letterSpacing: "-1.2px",
                  }}
                >
                  Services
                </Typography>
              </Box>
            </Box>
            <Box className="h-num-76 bg-web-cloud-burst flex items-center justify-center !pt-num-22 !pb-num-22 !pl-num-0 !pr-num-0 box-border whitespace-nowrap col-[3] row-[1] text-web-white">
              <Typography
                className="!m-0 relative shrink-0"
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{
                  fontWeight: "400",
                  lineHeight: "36px",
                  letterSpacing: "-1.2px",
                }}
              >
                Swaraj Hospital
              </Typography>
            </Box>
            <Box className="h-num-76 flex items-center justify-center !pt-num-22 !pb-num-22 !pl-num-0 !pr-num-0 box-border col-[4] row-[1] text-web-gothic">
              <Typography
                className="!m-0 relative shrink-0 mq450:text-num-19 mq450:leading-num-29"
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{
                  fontWeight: "400",
                  lineHeight: "36px",
                  letterSpacing: "-1.2px",
                }}
              >
                Local Hospitals
              </Typography>
            </Box>
          </section>
          {horizontalBorderBlurItems.map((item, index) => (
            <HorizontalBorderBlur
              key={index}
              sVG={item.sVG}
              emergencyService={item.emergencyService}
              horizontalBorderBlurMarginTop={item.horizontalBorderBlurMarginTop}
              containerJustifyContent={item.containerJustifyContent}
              sVGIconAlignSelf={item.sVGIconAlignSelf}
              sVGIconFlex={item.sVGIconFlex}
              sVGIconOverflow={item.sVGIconOverflow}
              sVGIconMaxHeight={item.sVGIconMaxHeight}
              sVGIconWidth={item.sVGIconWidth}
              sVGIconHeight={item.sVGIconHeight}
            />
          ))}
          <section className="flex flex-col items-start">
            <HorizontalBorderBlur
              sVG="/SVG25.svg"
              emergencyService="Modular Operation Theatre"
              horizontalBorderBlurMarginTop="unset"
              containerJustifyContent="center"
              sVGIconAlignSelf="stretch"
              sVGIconFlex="1"
              sVGIconOverflow="hidden"
              sVGIconMaxHeight="100%"
              sVGIconWidth="unset"
              sVGIconHeight="unset"
            />
            <HorizontalBorderBlur
              sVG="/SVG25.svg"
              emergencyService="HDU"
              horizontalBorderBlurMarginTop="-1px"
              containerJustifyContent="center"
              sVGIconAlignSelf="stretch"
              sVGIconFlex="1"
              sVGIconOverflow="hidden"
              sVGIconMaxHeight="100%"
              sVGIconWidth="unset"
              sVGIconHeight="unset"
            />
          </section>
          <HorizontalBorderBlur
            sVG="/SVG81.svg"
            emergencyService="24/7 Ambulance Service"
            horizontalBorderBlurMarginTop="unset"
            containerJustifyContent="center"
            sVGIconAlignSelf="stretch"
            sVGIconFlex="1"
            sVGIconOverflow="hidden"
            sVGIconMaxHeight="100%"
            sVGIconWidth="unset"
            sVGIconHeight="unset"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Section4;
