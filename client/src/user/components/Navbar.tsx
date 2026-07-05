import { type FunctionComponent, useState } from "react";
import { Box } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavyButton from "./NavyButton";

const Navbar: FunctionComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const isDoctors = location.pathname === "/meet-the-team" || location.pathname === "/team";
  const isSpecialities = location.pathname === "/specialities" || location.pathname === "/specialties";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Box
        className="relative w-full h-[112px] max-lg:h-[80px] flex flex-row justify-center items-center py-5 bg-[#FFFFFF] backdrop-blur-[15px] z-50"
      >
        <Box className="flex flex-row justify-between items-center w-full max-w-[1360px] px-5 xl:px-0">
          {/* Logo */}
          <Box className="flex items-center">
            <Link to="/">
              <img
                src="/logo.png"
                alt="Swaraj Hospital"
                className="h-[82.27px] w-[111.66px] max-lg:h-[55px] max-lg:w-[75px] object-contain cursor-pointer"
              />
            </Link>
          </Box>

          {/* Navigation Links — hidden below 1024px */}
          <Box className="flex flex-row items-center gap-8 text-[#222222] font-lilex font-medium text-[16px] uppercase tracking-[-0.8px] max-lg:hidden">
            <Link
              to="/"
              className={`no-underline hover:text-[#1F2A44] ${isHome ? "text-[#1F2A44] font-semibold" : "text-[#222222]"
                }`}
            >
              HOME
            </Link>
            <Link
              to="/meet-the-team"
              className={`no-underline hover:text-[#1F2A44] ${isDoctors ? "text-[#1F2A44] font-semibold" : "text-[#222222]"
                }`}
            >
              DOCTORS
            </Link>
            <Link
              to="/specialities"
              className={`no-underline hover:text-[#1F2A44] ${isSpecialities ? "text-[#1F2A44] font-semibold" : "text-[#222222]"
                }`}
            >
              SPECIALTIES +
            </Link>
            <Link
              to="/career"
              className={`no-underline hover:text-[#1F2A44] ${location.pathname === "/career" ? "text-[#1F2A44] font-semibold" : "text-[#222222]"
                }`}
            >
              CAREERS
            </Link>
            <Link
              to="/blogs"
              className={`no-underline hover:text-[#1F2A44] ${location.pathname === "/blogs" ? "text-[#1F2A44] font-semibold" : "text-[#222222]"
                }`}
            >
              ARTICLES
            </Link>
            {/* <a href="#" className="no-underline text-[#222222] hover:text-[#1F2A44]">
              CONTACT
            </a> */}
          </Box>

          {/* CTA Button — hidden below 1024px */}
          <Box className="flex items-center max-lg:hidden">
            <NavyButton
              label="SCHEDULE A CALL"
              variant="filled"
              endIcon="/69959585702a1a429f59d932-frame-svg.png"
              className="!px-5 !py-3 font-medium uppercase"
              onClick={() => navigate("/enquire")}
            />
          </Box>

          {/* Hamburger Icon — visible only below 1024px */}
          <Box
            className="hidden max-lg:flex items-center cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            sx={{ zIndex: 60 }}
          >
            <Box
              sx={{
                width: "28px",
                height: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: "28px",
                  height: "2.5px",
                  backgroundColor: "#222222",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                  transform: mobileMenuOpen ? "rotate(45deg) translateY(8.75px)" : "none",
                }}
              />
              <Box
                sx={{
                  width: "28px",
                  height: "2.5px",
                  backgroundColor: "#222222",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                  opacity: mobileMenuOpen ? 0 : 1,
                }}
              />
              <Box
                sx={{
                  width: "28px",
                  height: "2.5px",
                  backgroundColor: "#222222",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                  transform: mobileMenuOpen ? "rotate(-45deg) translateY(-8.75px)" : "none",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Mobile Menu Overlay — only renders below 1024px */}
      <Box
        className="hidden max-lg:block"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "#FFFFFF",
          zIndex: 49,
          transform: mobileMenuOpen ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "28px",
        }}
      >
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className={`no-underline font-lilex font-medium text-[20px] uppercase tracking-[-0.8px] hover:text-[#1F2A44] ${isHome ? "text-[#1F2A44] font-semibold" : "text-[#222222]"
            }`}
        >
          HOME
        </Link>
        <Link
          to="/meet-the-team"
          onClick={() => setMobileMenuOpen(false)}
          className={`no-underline font-lilex font-medium text-[20px] uppercase tracking-[-0.8px] hover:text-[#1F2A44] ${isDoctors ? "text-[#1F2A44] font-semibold" : "text-[#222222]"
            }`}
        >
          DOCTORS
        </Link>
        <Link
          to="/specialities"
          onClick={() => setMobileMenuOpen(false)}
          className={`no-underline font-lilex font-medium text-[20px] uppercase tracking-[-0.8px] hover:text-[#1F2A44] ${isSpecialities ? "text-[#1F2A44] font-semibold" : "text-[#222222]"
            }`}
        >
          SPECIALTIES +
        </Link>
        <Link
          to="/career"
          onClick={() => setMobileMenuOpen(false)}
          className={`no-underline font-lilex font-medium text-[20px] uppercase tracking-[-0.8px] hover:text-[#1F2A44] ${location.pathname === "/career" ? "text-[#1F2A44] font-semibold" : "text-[#222222]"
            }`}
        >
          CAREERS
        </Link>
        <Link
          to="/blogs"
          onClick={() => setMobileMenuOpen(false)}
          className={`no-underline font-lilex font-medium text-[20px] uppercase tracking-[-0.8px] hover:text-[#1F2A44] ${location.pathname === "/blogs" ? "text-[#1F2A44] font-semibold" : "text-[#222222]"
            }`}
        >
          ARTICLES
        </Link>
        {/* <a
          href="#"
          onClick={() => setMobileMenuOpen(false)}
          className="no-underline text-[#222222] font-lilex font-medium text-[20px] uppercase tracking-[-0.8px] hover:text-[#1F2A44]"
        >
          CONTACT
        </a> */}
        <Box sx={{ marginTop: "12px" }}>
          <NavyButton
            label="SCHEDULE A CALL"
            variant="filled"
            endIcon="/69959585702a1a429f59d932-frame-svg.png"
            className="!px-5 !py-3 font-medium uppercase"
            onClick={() => {
              setMobileMenuOpen(false);
              navigate("/enquire");
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
