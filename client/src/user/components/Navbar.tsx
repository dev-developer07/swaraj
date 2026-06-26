import type { FunctionComponent } from "react";
import { Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import NavyButton from "./NavyButton";

const Navbar: FunctionComponent = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isDoctors = location.pathname === "/meet-the-team" || location.pathname === "/team";
  const isSpecialities = location.pathname === "/specialities" || location.pathname === "/specialties";

  return (
    <Box className="relative w-full h-[112px] flex flex-row justify-center items-center py-5 bg-[#FFFFFF] backdrop-blur-[15px] z-50">
      <Box className="flex flex-row justify-between items-center w-full max-w-[1360px] px-5 xl:px-0">
        {/* Logo */}
        <Box className="flex items-center">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Swaraj Hospital"
              className="h-[82.27px] w-[111.66px] object-contain cursor-pointer"
            />
          </Link>
        </Box>

        {/* Navigation Links */}
        <Box className="flex flex-row items-center gap-8 text-[#222222] font-lilex font-medium text-[16px] uppercase tracking-[-0.8px] mq925:hidden">
          <Link
            to="/"
            className={`no-underline hover:text-[#1F2A44] ${
              isHome ? "text-[#1F2A44] font-semibold" : "text-[#222222]"
            }`}
          >
            HOME
          </Link>
          <Link
            to="/meet-the-team"
            className={`no-underline hover:text-[#1F2A44] ${
              isDoctors ? "text-[#1F2A44] font-semibold" : "text-[#222222]"
            }`}
          >
            DOCTORS
          </Link>
          <Link
            to="/specialities"
            className={`no-underline hover:text-[#1F2A44] ${
              isSpecialities ? "text-[#1F2A44] font-semibold" : "text-[#222222]"
            }`}
          >
            SPECIALTIES +
          </Link>
          <Link
            to="/career"
            className={`no-underline hover:text-[#1F2A44] ${
              location.pathname === "/career" ? "text-[#1F2A44] font-semibold" : "text-[#222222]"
            }`}
          >
            CAREERS
          </Link>
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
