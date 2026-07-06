import { type FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";

export type Blur1Type = {
  className?: string;
  sVG?: string;
  eLITEEXPERTISE?: string;
  boardCertifiedSpecialistsFor?: string;
};

const Blur1: FunctionComponent<Blur1Type> = ({
  className = "",
  sVG,
  eLITEEXPERTISE,
  boardCertifiedSpecialistsFor,
}) => {
  return (
    <Box
      className={`self-stretch [filter:blur(0px)] flex items-center gap-6 max-w-full text-left text-num-20 text-web-white font-lilex mq925:flex-wrap max-sm:!self-auto max-sm:flex-col max-sm:items-start max-sm:gap-2 max-sm:w-[calc(50%-12px)] ${className}`}
    >
      <Box className="h-num-72 w-[72px] [backdrop-filter:blur(12px)] rounded-num-16 bg-web-white-12 flex items-center justify-center max-sm:!h-10 max-sm:!w-10 max-sm:!rounded-num-4">
        <Box className="h-10 w-10 flex flex-col items-start justify-center max-sm:!h-5 max-sm:!w-5">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src={sVG}
          />
        </Box>
      </Box>
      <Box className="flex flex-col items-start gap-[11px] max-w-full max-sm:!gap-1">
        <Box className="self-stretch flex flex-col items-start">
          <Typography
            className="!m-0 relative mq450:text-num-16 mq450:leading-num-26 max-sm:!text-[14px] max-sm:!leading-[20px] max-sm:!tracking-[0.5px] max-sm:!whitespace-nowrap"
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "400", lineHeight: "32px" }}
          >
            {eLITEEXPERTISE}
          </Typography>
        </Box>
        <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0 text-num-18 text-web-gray-nurse font-inter max-sm:!hidden">
          <div className="relative leading-num-28_8">
            {boardCertifiedSpecialistsFor}
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Blur1;
