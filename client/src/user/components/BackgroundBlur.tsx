import { type FunctionComponent, useState } from "react";
import { Typography, Box, Collapse } from "@mui/material";

export type BackgroundBlurType = {
  className?: string;
  howCanIBookAnAppointmentOnlin?: string;
  answer?: string;
};

const BackgroundBlur: FunctionComponent<BackgroundBlurType> = ({
  className = "",
  howCanIBookAnAppointmentOnlin,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      onClick={() => setIsOpen(!isOpen)}
      className={`self-stretch [filter:blur(0px)] rounded-num-12 bg-web-gray-nurse flex flex-col items-start !pt-6 !pb-6 !pl-num-28 !pr-num-28 box-border max-w-full text-left text-num-22 text-web-woodsmoke font-inter cursor-pointer transition-all duration-300 hover:shadow-md ${className}`}
    >
      <Box className="self-stretch flex items-center justify-between gap-5 max-w-full">
        <Box className="flex flex-col items-start max-w-full">
          <Typography
            className="!m-0 relative mq450:text-num-18 mq450:leading-num-26"
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "400", lineHeight: "33px" }}
          >
            {howCanIBookAnAppointmentOnlin}
          </Typography>
        </Box>
        <Box className="h-9 w-9 rounded-num-36 flex items-center justify-center relative isolate shrink-0">
          <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-0.5 w-4 rounded-num-44 bg-web-cloud-burst z-[0]" />
          <Box className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-0.5 rounded-num-44 bg-web-cloud-burst z-[1] transition-transform duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
        </Box>
      </Box>
      <Collapse in={isOpen}>
        <Box className="pt-4 text-num-16 text-web-mine-shaft leading-relaxed font-stack-sans-text">
          <Typography variant="body1" sx={{ color: "#555", fontSize: "16px", lineHeight: "24px" }}>
            {answer}
          </Typography>
        </Box>
      </Collapse>
    </Box>
  );
};

export default BackgroundBlur;
