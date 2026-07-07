import { type FunctionComponent } from "react";
import { Box } from "@mui/material";

export type Listitem1Type = {
  className?: string;
  container?: string;
  dRAnuradhaAcharya?: string;
  orthopaedicsJointReplacement?: string;
};

const Listitem1: FunctionComponent<Listitem1Type> = ({
  className = "",
  container,
  dRAnuradhaAcharya,
  orthopaedicsJointReplacement,
}) => {
  return (
    <Box
      className={`w-full h-num-182 mq925:h-auto mq450:h-auto flex flex-col items-center !pt-num-10 !pb-num-0 !pl-num-0 !pr-num-0 box-border max-w-full text-left text-num-16 text-web-woodsmoke font-inter ${className}`}
    >
      <Box className="w-full max-w-[490px] rounded-num-16 bg-web-white overflow-hidden flex flex-col items-start !p-3 box-border gap-5 max-w-full">
        <Box className="self-stretch flex items-start justify-between gap-5">
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
              {dRAnuradhaAcharya}
            </div>
          </Box>
          <Box className="self-stretch flex flex-col items-start text-web-emperor">
            <div className="self-stretch relative leading-num-24">
              {orthopaedicsJointReplacement}
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Listitem1;
