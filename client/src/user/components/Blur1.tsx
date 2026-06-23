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
      className={`self-stretch [filter:blur(0px)] flex items-center gap-6 max-w-full text-left text-num-20 text-web-white font-lilex mq925:flex-wrap ${className}`}
    >
      <Box className="h-num-72 w-[72px] [backdrop-filter:blur(12px)] rounded-num-16 bg-web-white-12 flex items-center justify-center">
        <Box className="h-10 w-10 flex flex-col items-start justify-center">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src={sVG}
          />
        </Box>
      </Box>
      <Box className="flex flex-col items-start gap-[11px] max-w-full">
        <Box className="self-stretch flex flex-col items-start">
          <Typography
            className="!m-0 relative mq450:text-num-16 mq450:leading-num-26"
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "400", lineHeight: "32px" }}
          >
            {eLITEEXPERTISE}
          </Typography>
        </Box>
        <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0 text-num-18 text-web-gray-nurse font-inter">
          <div className="relative leading-num-28_8">
            {boardCertifiedSpecialistsFor}
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Blur1;
