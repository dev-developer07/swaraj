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
      className={`self-stretch bg-web-white flex flex-col items-center !pt-[150px] !pb-num-0 !pl-num-0 !pr-num-0 gap-[34px] z-[2] !mt-[-0.6px] relative mq925:gap-[17px] mq450:gap-[17px] ${className}`}
    >
      {/* Top Header Wrapper to match table's left/right margins and responsive behavior */}
      <Box className="self-stretch bg-web-white flex flex-col items-start !pt-num-0 !pb-num-0 !pl-60 !pr-60 mq925:!pl-5 mq925:!pr-5 mq925:box-border mq1350:!pl-num-120 mq1350:!pr-num-120 mq1350:box-border mq450:!pl-5 mq450:!pr-5 mq450:box-border">
        <Box className="w-full flex flex-col items-start !pt-num-0 !pb-num-0 !pl-num-40 !pr-num-40 mq925:!pl-0 mq925:!pr-0 mq450:!pl-0 mq450:!pr-0 box-border max-w-num-1440 mq1825:max-w-full">
          <section className="w-full grid grid-cols-[repeat(4,_1fr)] gap-4 text-left text-num-16 text-web-woodsmoke font-lilex mq925:flex mq925:flex-col mq925:gap-6 mq450:flex mq450:flex-col mq450:gap-6">
            
            {/* Left side: Eyebrow badge and title spanning columns 1 and 2 (aligned with Services column) */}
            <Box className="col-[1_/_span_2] [filter:blur(0px)] flex flex-col items-start max-w-[490px] mq925:max-w-full mq450:max-w-full">
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

            {/* Right side: Description paragraph starting at Column 4 (aligned with Local Hospitals column) */}
            <Box className="col-[4] flex flex-col items-start max-w-[378px] font-inter mq925:max-w-full mq450:max-w-full justify-end !pb-[10px]">
              <Box className="self-stretch [filter:blur(0px)] flex flex-col items-start">
                <div className="w-[378px] mq925:w-full mq450:w-full relative leading-num-24 flex items-center">
                  Understanding what sets Swaraj Hospital apart from a typical
                  hospital in western Odisha
                </div>
              </Box>
            </Box>

          </section>
        </Box>
      </Box>
      <Box className="self-stretch bg-web-gray-nurse flex flex-col items-start !pt-num-0 !pb-num-0 !pl-60 !pr-60 mq925:!pl-5 mq925:!pr-5 mq925:box-border mq1350:!pl-num-120 mq1350:!pr-num-120 mq1350:box-border mq450:!pl-5 mq450:!pr-5 mq450:box-border">
        <Box className="w-full h-[615px] flex flex-col items-start !pt-num-0 !pb-num-0 !pl-num-40 !pr-num-40 mq925:!pl-0 mq925:!pr-0 mq450:!pl-0 mq450:!pr-0 box-border max-w-num-1440 mq925:h-auto mq450:h-auto mq1825:max-w-full">
          <section className="w-full max-w-num-1360 h-[77px] mq925:h-auto mq450:h-auto [filter:blur(0px)] border-web-gothic border-solid border-b-[1px] box-border grid grid-cols-[repeat(4,_1fr)] gap-4 text-left text-num-24 mq925:text-num-14 mq450:text-num-14 text-web-woodsmoke font-stack-sans-text">
            <Box className="h-num-76 mq925:h-auto mq450:h-auto flex items-center !pt-num-22 !pb-num-22 mq925:!pt-2 mq925:!pb-2 mq450:!pt-2 mq450:!pb-2 !pl-num-0 !pr-num-0 box-border col-[1_/_span_2] row-[1]">
              <Box className="flex flex-col items-start shrink-0">
                <Typography
                   className="!m-0 relative mq450:text-num-14 mq450:leading-num-20"
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
            <Box className="h-num-76 mq925:h-auto mq450:h-auto bg-web-cloud-burst flex items-center justify-center !pt-num-22 !pb-num-22 mq925:!pt-2 mq925:!pb-2 mq450:!pt-2 mq450:!pb-2 !pl-2 !pr-2 box-border whitespace-nowrap mq925:whitespace-normal text-center col-[3] row-[1] text-web-white">
              <Typography
                className="!m-0 relative shrink-0 mq450:text-num-14 mq450:leading-num-20"
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
            <Box className="h-num-76 mq925:h-auto mq450:h-auto flex items-center justify-center !pt-num-22 !pb-num-22 mq925:!pt-2 mq925:!pb-2 mq450:!pt-2 mq450:!pb-2 !pl-2 !pr-2 box-border text-center col-[4] row-[1] text-web-gothic">
              <Typography
                className="!m-0 relative shrink-0 mq450:text-num-14 mq450:leading-num-20"
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
          <section className="self-stretch flex flex-col items-start">
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
