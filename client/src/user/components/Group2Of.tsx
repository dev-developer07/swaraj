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
  sVG1,
  sliceCTScan,
  containerJustifyContent,
  containerGap,
}) => {
  const container4Style: CSSProperties = useMemo(() => {
    return {
      justifyContent: containerJustifyContent,
      gap: containerGap,
    };
  }, [containerJustifyContent, containerGap]);

  return (
    <Box
      className={`h-num-438 w-[436px] group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer rounded-num-24 bg-web-gray-nurse overflow-hidden shrink-0 flex flex-col items-start justify-center relative isolate max-w-full text-left text-num-16 text-web-white font-inter mq450:h-auto max-[450px]:!w-[318px] max-[450px]:!h-[320px] max-[450px]:!min-w-[318px] max-[450px]:!min-h-[320px] ${className}`}
    >
      {/* Hover State: Renders the full cover image fitting the container perfectly to preserve padding */}
      <Box
        className="w-full h-full group-hover:opacity-100 transition-opacity duration-500 !!m-[0 important] absolute top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-col items-start justify-between isolate gap-5 opacity-num-0 z-[0] mq450:h-auto mq450:gap-5 pointer-events-none max-[450px]:!h-[320px]"
        style={container4Style}
      >
        <img
          className="w-full h-full absolute top-0 left-0 object-cover rounded-num-24 z-[0] shrink-0"
          alt=""
          src={testingCardBG}
        />
      </Box>

      {/* Front Face: Exact original layout, typography, responsive sizes, and spacing */}
      <Box className="self-stretch flex-1 group-hover:opacity-num-0 transition-opacity duration-500 rounded-num-20 bg-web-gray-nurse flex flex-col items-start justify-between !p-10 gap-5 z-[1] text-num-48 text-web-woodsmoke font-stack-sans-text mq450:gap-5 mq450:!pt-5 mq450:!pb-5 mq450:box-border max-[450px]:!p-6">
        <Box className="w-12 h-12 rounded-num-12 bg-web-white flex items-center justify-center">
          <Box className="h-8 w-8 flex flex-col items-start justify-center">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain"
              alt=""
              src={sVG1}
            />
          </Box>
        </Box>
        <Box className="self-stretch flex flex-col items-start">
          <Box className="w-[338px] flex flex-col items-start max-w-num-338 max-[450px]:!w-full">
            <Typography
              className="!m-0 relative shrink-0 mq925:text-num-38 mq925:leading-num-52 mq450:text-num-29 mq450:leading-num-39 max-[450px]:!text-[28px] max-[450px]:!leading-[36px] max-[450px]:!tracking-[-0.5px]"
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
