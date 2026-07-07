import { type FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box, Typography } from "@mui/material";

export type HorizontalBorderBlurType = {
  className?: string;
  sVG?: string;
  emergencyService?: string;

  /** Style props */
  horizontalBorderBlurMarginTop?: CSSProperties["marginTop"];
  containerJustifyContent?: CSSProperties["justifyContent"];
  sVGIconAlignSelf?: CSSProperties["alignSelf"];
  sVGIconFlex?: CSSProperties["flex"];
  sVGIconOverflow?: CSSProperties["overflow"];
  sVGIconMaxHeight?: CSSProperties["maxHeight"];
  sVGIconWidth?: CSSProperties["width"];
  sVGIconHeight?: CSSProperties["height"];
};

const HorizontalBorderBlur: FunctionComponent<HorizontalBorderBlurType> = ({
  className = "",
  sVG,
  emergencyService,
  horizontalBorderBlurMarginTop,
  containerJustifyContent,
  sVGIconAlignSelf,
  sVGIconFlex,
  sVGIconOverflow,
  sVGIconMaxHeight,
  sVGIconWidth,
  sVGIconHeight,
}) => {
  const horizontalBorderBlurStyle: CSSProperties = useMemo(() => {
    return {
      marginTop: horizontalBorderBlurMarginTop,
    };
  }, [horizontalBorderBlurMarginTop]);

  const container3Style: CSSProperties = useMemo(() => {
    return {
      justifyContent: containerJustifyContent,
    };
  }, [containerJustifyContent]);

  const sVGIconStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: sVGIconAlignSelf,
      flex: sVGIconFlex,
      overflow: sVGIconOverflow,
      maxHeight: sVGIconMaxHeight,
      width: sVGIconWidth,
      height: sVGIconHeight,
    };
  }, [
    sVGIconAlignSelf,
    sVGIconFlex,
    sVGIconOverflow,
    sVGIconMaxHeight,
    sVGIconWidth,
    sVGIconHeight,
  ]);

  return (
    <section
      className={`w-full max-w-num-1360 h-[77px] [filter:blur(0px)] border-web-gothic border-solid border-b-[1px] box-border grid grid-cols-[repeat(4,_1fr)] gap-4 text-left text-num-20 mq925:text-num-14 text-web-woodsmoke font-stack-sans-text mq925:h-auto mq925:min-h-num-77 mq450:text-num-14 mq450:h-auto mq450:min-h-num-77 ${className}`}
      style={horizontalBorderBlurStyle}
    >
      <Box className="flex items-center !pt-num-22 !pb-num-22 mq925:!pt-2 mq925:!pb-2 !pl-num-0 !pr-num-0 gap-4 col-[1_/_span_2] row-[1] mq925:flex-wrap mq450:!pt-2 mq450:!pb-2 mq450:flex-wrap">
        <Box
          className="h-8 w-8 flex flex-col items-start justify-center"
          style={container3Style}
        >
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src={sVG}
            style={sVGIconStyle}
          />
        </Box>
        <Box className="flex flex-col items-start">
          <Typography
            className="!m-0 relative mq450:text-num-14 mq450:leading-num-20"
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "400", lineHeight: "32px" }}
          >
            {emergencyService}
          </Typography>
        </Box>
      </Box>
      <Box className="bg-web-cloud-burst flex items-center justify-center !pt-num-22 !pb-num-22 mq925:!pt-2 mq925:!pb-2 !pl-num-0 !pr-num-0 col-[3] row-[1] mq450:!pt-2 mq450:!pb-2">
        <Box className="h-8 w-8 flex flex-col items-start justify-center">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/SVG12.svg"
          />
        </Box>
      </Box>
      <Box className="flex items-center justify-center !pt-num-22 !pb-num-22 mq925:!pt-2 mq925:!pb-2 !pl-num-0 !pr-num-0 col-[4] row-[1] mq450:!pt-2 mq450:!pb-2">
        <Box className="h-8 w-8 flex flex-col items-start justify-center">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/SVG13.svg"
          />
        </Box>
      </Box>
    </section>
  );
};

export default HorizontalBorderBlur;
