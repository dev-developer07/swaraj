import { type FunctionComponent } from "react";
import { Box } from "@mui/material";

export type ListitemType = {
  className?: string;
  container?: string;
  dRAnkitPadhi?: string;
  cardiology?: string;
  cardImage?: string;

  /** Style props (deprecated, now handled by standard Tailwind) */
  listitemGridColumn?: any;
  listitemWidth?: any;
  linkWidth?: any;
  linkAlignSelf?: any;
  containerJustifyContent?: any;
  containerGap?: any;
};

const Listitem: FunctionComponent<ListitemType> = ({
  className = "",
  container,
  dRAnkitPadhi,
  cardiology,
  cardImage,
}) => {
  if (cardImage) {
    return (
      <Box
        className={`flex flex-col items-center justify-center !pt-num-10 !pb-num-0 !pl-num-0 !pr-num-0 shrink-0 text-left text-num-16 text-web-woodsmoke font-inter w-full ${className}`}
      >
        <Box
          className="w-full max-w-[322.7px] mq925:max-w-full mq450:max-w-full rounded-num-16 bg-web-white overflow-hidden flex items-center justify-center !p-0 box-border shadow-sm hover:shadow-md transition-shadow"
        >
          <img
            src={cardImage}
            alt={dRAnkitPadhi || "Doctor Card"}
            className="w-full h-auto object-contain block mx-auto"
          />
        </Box>
      </Box>
    );
  }
  return (
    <Box
      className={`flex flex-col items-start !pt-num-10 !pb-num-0 !pl-num-0 !pr-num-0 shrink-0 text-left text-num-16 text-web-woodsmoke font-inter w-full ${className}`}
    >
      <Box
        className="w-full max-w-[322.7px] mq925:max-w-full mq450:max-w-full rounded-num-16 bg-web-white overflow-hidden flex flex-col items-start !p-3 box-border gap-5"
      >
        <Box
          className="self-stretch flex items-start justify-between gap-5"
        >
          <Box className="overflow-hidden flex items-center justify-center !p-2">
            <Box className="overflow-hidden flex flex-col items-center justify-center max-w-num-1920">
              <img
                className="w-2 h-2 relative object-cover"
                alt=""
                src="/699f6877b8f1c6d2edfe4bd7-button-20ball-svg.png"
              />
            </Box>
          </Box>
          <img
            className="h-20 w-20 rounded-num-4 object-cover"
            loading="lazy"
            alt=""
            src={container}
          />
        </Box>
        <Box className="self-stretch flex flex-col items-start gap-1">
          <Box className="self-stretch overflow-hidden flex flex-col items-start">
            <div className="self-stretch relative leading-num-24 uppercase font-medium">
              {dRAnkitPadhi}
            </div>
          </Box>
          <Box className="self-stretch flex flex-col items-start text-web-emperor">
            <div className="self-stretch relative leading-num-24">
              {cardiology}
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Listitem;

