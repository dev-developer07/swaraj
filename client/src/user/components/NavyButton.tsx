import { type FunctionComponent } from "react";
import { Button } from "@mui/material";

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
  onClick?: () => void;
  className?: string;
};

/** Navy brand color token */
const NAVY = "#1f2a44";

/**
 * NavyButton — brand CTA button wrapping MUI Button.
 * Centralises the navy / white color logic used across all sections.
 */
const NavyButton: FunctionComponent<NavyButtonProps> = ({
  label,
  endIcon,
  variant = "filled",
  onClick,
  className = "",
}) => {
  const isFilled = variant === "filled";
  const bgColor = isFilled ? NAVY : "#fff";
  const textColor = isFilled ? "#fff" : NAVY;

  return (
    <Button
      className={`!pt-3 !pb-3 !pl-5 !pr-5 box-border ${className}`}
      endIcon={
        endIcon ? (
          <img width="6px" height="6px" src={endIcon} alt="" className="object-contain" />
        ) : undefined
      }
      disableElevation
      variant="contained"
      onClick={onClick}
      sx={{
        color: textColor,
        fontSize: "16",
        background: bgColor,
        borderRadius: "8px",
        transition: "transform 0.15s ease-in-out, opacity 0.15s ease-in-out",
        "&:hover": { background: bgColor, opacity: 0.9 },
        "&:active": { transform: "scale(0.95)" },
      }}
    >
      {label}
    </Button>
  );
};

export default NavyButton;
