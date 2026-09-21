import { type FunctionComponent, type ReactNode } from "react";
import { Box, Typography } from "@mui/material";

export type StatCardProps = {
  /** Icon image source path */
  icon: string;
  /** Card title (h3) */
  title: string;
  /** Card description — can be a string or rich ReactNode */
  description: ReactNode;
  /** Visual stat element or badge to fill middle section */
  statVisual?: ReactNode;
  className?: string;
};

/**
 * StatCard — icon + stat badge + title + description stat cell.
 */
const StatCard: FunctionComponent<StatCardProps> = ({
  icon,
  title,
  description,
  statVisual,
  className = "",
}) => {
  return (
    <section
      className={`[filter:blur(0px)] border-web-silver-chalice border-dashed border-r-[1px] flex flex-col justify-between items-start !pt-8 !pb-8 !pl-8 !pr-8 shrink-0 text-left text-num-24 text-web-woodsmoke font-stack-sans-text mq925:border-r-0 mq925:!pt-6 mq925:!pb-6 mq925:!pl-6 mq925:!pr-6 mq450:border-r-0 mq450:!pt-4 mq450:!pb-4 mq450:!pl-4 mq450:!pr-4 ${className}`}
    >
      <Box className="w-[56px] h-12 rounded-num-4 bg-web-gray-nurse flex items-center justify-center shrink-0">
        <Box className="h-7 w-7 flex flex-col items-start justify-center">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src={icon}
          />
        </Box>
      </Box>

      {statVisual && (
        <Box className="my-5 self-stretch flex flex-col items-start justify-center shrink-0">
          {statVisual}
        </Box>
      )}

      <Box className="self-stretch flex flex-col items-start gap-[10px] shrink-0">
        <Box className="self-stretch flex flex-col items-start">
          <Typography
            className="!m-0 self-stretch relative mq450:text-num-19 mq450:leading-num-29"
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{
              fontWeight: "600",
              lineHeight: "30px",
              letterSpacing: "-0.6px",
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box className="self-stretch flex flex-col items-start text-num-15 text-web-emperor font-inter">
          <div className="self-stretch relative leading-relaxed">
            {description}
          </div>
        </Box>
      </Box>
    </section>
  );
};

export default StatCard;
