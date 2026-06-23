import { type FunctionComponent, type ReactNode } from "react";
import { Box, Typography } from "@mui/material";

export type StatCardProps = {
  /** Icon image source path */
  icon: string;
  /** Card title (h3) */
  title: string;
  /** Card description — can be a string or rich ReactNode */
  description: ReactNode;
  className?: string;
};

/**
 * StatCard — icon + title + description stat cell.
 * Extracted from the 4 inline repetitions in Container.tsx.
 */
const StatCard: FunctionComponent<StatCardProps> = ({
  icon,
  title,
  description,
  className = "",
}) => {
  return (
    <section
      className={`[filter:blur(0px)] border-web-silver-chalice border-dashed border-r-[1px] flex flex-col items-start !pt-9 !pb-9 !pl-9 !pr-num-32 shrink-0 text-left text-num-24 text-web-woodsmoke font-stack-sans-text ${className}`}
    >
      <Box className="w-[60px] h-12 rounded-num-4 bg-web-gray-nurse flex items-center justify-center">
        <Box className="h-8 w-8 flex flex-col items-start justify-center">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src={icon}
          />
        </Box>
      </Box>
      <Box className="self-stretch flex flex-col items-start !pt-num-140 !pb-num-0 !pl-num-0 !pr-num-0 gap-[10.9px]">
        <Box className="self-stretch flex flex-col items-start">
          <Typography
            className="!m-0 self-stretch relative mq450:text-num-19 mq450:leading-num-29"
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{
              fontWeight: "400",
              lineHeight: "36px",
              letterSpacing: "-1.2px",
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_7 !pl-num-0 !pr-num-0 text-num-18 text-web-emperor font-inter">
          <div className="self-stretch relative leading-num-28_8">
            {description}
          </div>
        </Box>
      </Box>
    </section>
  );
};

export default StatCard;
