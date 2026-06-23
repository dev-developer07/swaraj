import type { FunctionComponent } from "react";
import { Box } from "@mui/material";
import NavyButton from "./NavyButton";

const Navbar: FunctionComponent = () => {
  return (
    <Box className="relative w-full h-[112px] flex flex-row justify-center items-center py-5 bg-[#FFFFFF] backdrop-blur-[15px] z-50">
      <Box className="flex flex-row justify-between items-center w-full max-w-[1360px] px-5 xl:px-0">
        {/* Logo */}
        <Box className="flex items-center">
          <img
            src="/logo.png"
            alt="Swaraj Hospital"
            className="h-[82.27px] w-[111.66px] object-contain"
          />
        </Box>

        {/* Navigation Links */}
        <Box className="flex flex-row items-center gap-8 text-[#222222] font-lilex font-medium text-[16px] uppercase tracking-[-0.8px] mq925:hidden">
          <a href="#" className="no-underline text-[#1F2A44] font-semibold">
            HOME
          </a>
          <a href="#" className="no-underline text-[#222222] hover:text-[#1F2A44]">
            DOCTORS
          </a>
          <a href="#" className="no-underline text-[#222222] hover:text-[#1F2A44]">
            SPECIALTIES +
          </a>
          <a href="#" className="no-underline text-[#222222] hover:text-[#1F2A44]">
            CAREERS
          </a>
          <a href="#" className="no-underline text-[#222222] hover:text-[#1F2A44]">
            ARTICLES
          </a>
          <a href="#" className="no-underline text-[#222222] hover:text-[#1F2A44]">
            CONTACT
          </a>
        </Box>

        {/* Call to Action Button */}
        <Box className="flex items-center">
          <NavyButton
            label="SCHEDULE A CALL"
            variant="filled"
            endIcon="/69959585702a1a429f59d932-frame-svg.png"
            className="!px-5 !py-3 font-medium uppercase"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
