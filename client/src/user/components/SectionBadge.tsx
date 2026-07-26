import { type FunctionComponent } from "react";
import { Box } from "@mui/material";

export type SectionBadgeProps = {
  /** Icon image source path */
  icon?: string;
  /** Badge label text */
  label: string;
  /**
   * "light" — bg-web-white-80 (for hero/dark backgrounds)
   * "dark"  — bg-web-gray-nurse (for white/light backgrounds)
   */
  variant?: "light" | "dark";
  className?: string;
};

/**
 * SectionBadge — eyebrow pill badge used at the top of every section.
 * Renders a small icon + uppercase label in a rounded pill container.
 */
const SectionBadge: FunctionComponent<SectionBadgeProps> = ({
  icon,
  label,
  variant = "light",
  className = "",
}) => {
  const bgClass =
    variant === "light" ? "bg-web-white-80" : "bg-web-gray-nurse";

  return (
    <Box
      className={`[filter:blur(0px)] rounded-num-4 ${bgClass} flex items-center !pt-1 !pb-1 !pl-num-6 !pr-2 gap-1 w-fit ${className}`}
    >
      <Box className="h-5 w-5 flex flex-col items-start justify-center">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
          alt=""
          src={icon || "/SVG.svg"}
        />
      </Box>
      <Box className="flex flex-col items-start">
        <div className="relative leading-num-24 uppercase font-medium whitespace-nowrap text-[16px] font-lilex max-[450px]:!text-[14px] max-[450px]:!leading-[21px]">
          {label}
        </div>
      </Box>
    </Box>
  );
};

export default SectionBadge;
