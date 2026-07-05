import { type FunctionComponent, type MouseEvent, useState } from "react";

export type NavyButtonProps = {
  /** Button label text */
  label: string;
  /** Optional end-icon image src path */
  endIcon?: string;
  /**
   * "filled" — navy background, white text (default)
   * "outline" — white background, navy text
   */
  variant?: "filled" | "outline";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
};

/** Navy brand color token */
const NAVY = "#1F2A44";

/**
 * NavyButton — brand CTA button with premium hover animation (text slide-up and dot-to-arrow transition).
 */
const NavyButton: FunctionComponent<NavyButtonProps> = ({
  label,
  variant = "filled",
  onClick,
  className = "",
  disabled = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isFilled = variant === "filled";
  const bgColor = isFilled ? NAVY : "#FFFFFF";
  const textColor = isFilled ? "#FFFFFF" : NAVY;
  const hoverBgColor = isFilled ? "#151c2e" : "#F5F5F5";
  const borderColor = "none";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative inline-flex items-center justify-center gap-3 h-[48px] rounded-[8px] cursor-pointer outline-none transition-all duration-300 overflow-hidden font-lilex font-medium text-[16px] leading-[24px] uppercase active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed !px-8 !py-3 box-border ${className}`}
      style={{
        backgroundColor: isHovered && !disabled ? hoverBgColor : bgColor,
        color: textColor,
        border: borderColor,
        transition: "all 0.3s ease",
      }}
      onMouseEnter={() => {
        if (!disabled) setIsHovered(true);
      }}
      onMouseLeave={() => {
        if (!disabled) setIsHovered(false);
      }}
    >
      {/* Sliding text container */}
      <div className="relative overflow-hidden h-[24px] flex flex-col items-start justify-start">
        <div
          className="transition-transform duration-300 ease-in-out transform"
          style={{
            transform: isHovered ? "translateY(-24px)" : "translateY(0px)",
          }}
        >
          <span className="block h-[24px] leading-[24px] text-left">{label}</span>
          <span className="block h-[24px] leading-[24px] text-left">{label}</span>
        </div>
      </div>

      {/* Icon transition container */}
      <div className="w-[24px] h-[24px] relative flex items-center justify-center shrink-0">
        {/* Circle dot default state */}
        <div
          className="absolute w-[6px] h-[6px] rounded-full transition-all duration-300 ease-in-out"
          style={{
            backgroundColor: textColor,
            transform: isHovered ? "scale(0)" : "scale(1)",
            opacity: isHovered ? 0 : 1,
          }}
        />
        {/* Up-Right Arrow hover state */}
        <div
          className="absolute w-[12px] h-[12px] transition-all duration-300 ease-in-out flex items-center justify-center"
          style={{
            transform: isHovered ? "scale(1)" : "scale(0.5)",
            opacity: isHovered ? 1 : 0,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
              stroke={textColor}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </button>
  );
};

export default NavyButton;
