import { type FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box, Typography } from "@mui/material";

export type Group2OfType = {
  className?: string;
  testingCardBG?: string;
  sVG?: string;
  gingivalTissueHealth?: string;
  periodontalPocketDepth?: string;
  gumRecessionTracking?: string;
  inflammationMarkers?: string;
  softTissueScreening?: string;
  sVG1?: string;
  sliceCTScan?: string;

  /** Style props */
  containerJustifyContent?: CSSProperties["justifyContent"];
  containerGap?: CSSProperties["gap"];
  containerJustifyContent1?: CSSProperties["justifyContent"];
  containerPadding?: CSSProperties["padding"];
  containerGap1?: CSSProperties["gap"];
  itemPadding?: CSSProperties["padding"];
};

const Group2Of: FunctionComponent<Group2OfType> = ({
  className = "",
  testingCardBG,
  sVG,
  gingivalTissueHealth,
  periodontalPocketDepth,
  gumRecessionTracking,
  inflammationMarkers,
  softTissueScreening,
  sVG1,
  sliceCTScan,
  containerJustifyContent,
  containerGap,
  containerJustifyContent1,
  containerPadding,
  containerGap1,
  itemPadding,
}) => {
  const container4Style: CSSProperties = useMemo(() => {
    return {
      justifyContent: containerJustifyContent,
      gap: containerGap,
    };
  }, [containerJustifyContent, containerGap]);

  const container5Style: CSSProperties = useMemo(() => {
    return {
      justifyContent: containerJustifyContent1,
      padding: containerPadding,
      gap: containerGap1,
    };
  }, [containerJustifyContent1, containerPadding, containerGap1]);

  const itemStyle: CSSProperties = useMemo(() => {
    return {
      padding: itemPadding,
    };
  }, [itemPadding]);

  return (
    <Box
      className={`h-num-438 w-[436px] group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer rounded-num-24 bg-web-gray-nurse overflow-hidden shrink-0 flex flex-col items-start justify-center relative isolate max-w-full text-left text-num-16 text-web-white font-inter mq450:h-auto ${className}`}
    >
      <Box
        className="w-full h-full group-hover:opacity-100 transition-opacity duration-500 !!m-[0 important] absolute top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-col items-start justify-between isolate gap-5 opacity-num-0 z-[0] mq450:h-auto mq450:gap-5"
        style={container4Style}
      >
        <img
          className="w-num-479_6 h-num-481_8 absolute !!m-[0 important] top-[-21.9px] left-[-21.8px] object-cover z-[0] shrink-0"
          alt=""
          src={testingCardBG}
        />
        <Box
          className="self-stretch flex items-center justify-between !pt-6 !pb-num-0 !pl-6 !pr-6 gap-5 z-[1] shrink-0 mq450:flex-wrap mq450:gap-5"
          style={container5Style}
        >
          <Box className="h-12 w-12 rounded-num-12 bg-web-white flex items-center justify-center">
            <Box className="h-8 w-8 flex flex-col items-start justify-center">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                alt=""
                src={sVG}
              />
            </Box>
          </Box>
          <Box className="flex flex-col items-start">
            <div className="relative leading-num-24">
              {gingivalTissueHealth}
            </div>
          </Box>
        </Box>
        <Box className="self-stretch flex flex-col items-start !p-6 gap-4 z-[2] shrink-0 text-num-14">
          <Box className="self-stretch flex flex-col items-start">
            <div className="self-stretch relative leading-num-24">
              List Items:
            </div>
          </Box>
          <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-4 !pl-num-0 !pr-num-0 gap-4 text-num-16">
            <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0 !pl-num-40 !pr-num-0 relative isolate">
              <Box className="w-full h-full !!m-[0 important] absolute top-[0px] right-[0px] bottom-[0px] left-[0px] overflow-hidden flex flex-col items-start justify-center !pt-num-2 !pb-num-2 !pl-num-0 !pr-num-0 box-border z-[0] shrink-0">
                <img className="w-5 h-5 relative" alt="" src="/SVG5.svg" />
              </Box>
              <div className="relative leading-num-24 z-[1] shrink-0">
                {periodontalPocketDepth}
              </div>
            </Box>
            <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0 !pl-num-39 !pr-num-0 relative isolate">
              <Box className="w-full h-full !!m-[0 important] absolute top-[0px] right-[0px] bottom-[0px] left-[0px] overflow-hidden flex flex-col items-start justify-center !pt-num-2 !pb-num-2 !pl-num-0 !pr-num-0 box-border z-[0] shrink-0">
                <img className="w-5 h-5 relative" alt="" src="/SVG5.svg" />
              </Box>
              <div className="relative leading-num-24 z-[1] shrink-0">
                {gumRecessionTracking}
              </div>
            </Box>
            <Box
              className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0 !pl-num-39 !pr-num-0 relative isolate"
              style={itemStyle}
            >
              <Box className="w-full h-full !!m-[0 important] absolute top-[0px] right-[0px] bottom-[0px] left-[0px] overflow-hidden flex flex-col items-start justify-center !pt-num-2 !pb-num-2 !pl-num-0 !pr-num-0 box-border z-[0] shrink-0">
                <img className="w-5 h-5 relative" alt="" src="/SVG5.svg" />
              </Box>
              <div className="relative leading-num-24 z-[1] shrink-0">
                {inflammationMarkers}
              </div>
            </Box>
            <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0 !pl-num-40 !pr-num-0 relative isolate">
              <Box className="w-full h-full !!m-[0 important] absolute top-[0px] right-[0px] bottom-[0px] left-[0px] overflow-hidden flex flex-col items-start justify-center !pt-num-2 !pb-num-2 !pl-num-0 !pr-num-0 box-border z-[0] shrink-0">
                <img className="w-5 h-5 relative" alt="" src="/SVG5.svg" />
              </Box>
              <div className="relative leading-num-24 z-[1] shrink-0">
                {softTissueScreening}
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="self-stretch flex-1 group-hover:opacity-0 transition-opacity duration-500 rounded-num-20 bg-web-gray-nurse flex flex-col items-start justify-between !p-6 gap-5 z-[1] text-num-48 text-web-woodsmoke font-stack-sans-text mq450:gap-5 mq450:!pt-5 mq450:!pb-5 mq450:box-border">
        <Box className="w-12 h-12 rounded-num-12 bg-web-white flex items-center justify-center">
          <Box className="h-8 w-8 flex flex-col items-start justify-center">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
              alt=""
              src={sVG1}
            />
          </Box>
        </Box>
        <Box className="self-stretch flex flex-col items-start">
          <Box className="w-[338px] flex flex-col items-start max-w-num-338">
            <Typography
              className="!m-0 relative shrink-0 mq925:text-num-38 mq925:leading-num-52 mq450:text-num-29 mq450:leading-num-39"
              variant="inherit"
              variantMapping={{ inherit: "h1" }}
              sx={{
                fontWeight: "400",
                lineHeight: "64.8px",
                letterSpacing: "-0.72px",
              }}
            >
              {sliceCTScan}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Group2Of;
