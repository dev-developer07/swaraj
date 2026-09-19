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
        className="relative w-full h-[112px] max-lg:h-[80px] flex flex-row justify-center items-center bg-[#FFFFFF] backdrop-blur-[15px] z-50 px-4 sm:px-6 lg:px-8 xl:px-0"
      >
        <Box className="flex flex-row justify-between items-center w-full max-w-[1360px] flex-nowrap gap-2 lg:gap-4 xl:gap-6 2xl:gap-8 h-full">
          {/* Logo */}
          <Box className="flex items-center shrink-0">
            <Link to="/">
              <img
                src="/logo.png"
                alt="Swaraj Hospital"
                className="h-[68px] xl:h-[75px] max-lg:h-[50px] w-auto object-contain cursor-pointer"
              />
            </Link>
          </Box>

          {/* Navigation Links — hidden below 1024px */}
          <Box className="flex flex-row items-center gap-2 lg:gap-3 xl:gap-6 2xl:gap-8 text-[#222222] font-lilex font-medium text-[12px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] uppercase tracking-[-0.5px] xl:tracking-[-0.8px] max-lg:hidden shrink-0">
            <Link
              to="/"
              className={`no-underline hover:text-[#1F2A44] whitespace-nowrap ${isHome ? "text-[#1F2A44] font-semibold" : "text-[#222222]"
                }`}
            >
              HOME
            </Link>
            <Link
              to="/meet-the-team"
              className={`no-underline hover:text-[#1F2A44] whitespace-nowrap ${isDoctors ? "text-[#1F2A44] font-semibold" : "text-[#222222]"
                }`}
            >
              DOCTORS
            </Link>
            <Link
              to="/specialities"
              className={`no-underline hover:text-[#1F2A44] whitespace-nowrap ${isSpecialities ? "text-[#1F2A44] font-semibold" : "text-[#222222]"
                }`}
            >
              SPECIALTIES +
            </Link>
            <Link
              to="/career"
              className={`no-underline hover:text-[#1F2A44] whitespace-nowrap ${location.pathname === "/career" ? "text-[#1F2A44] font-semibold" : "text-[#222222]"
                }`}
            >
              CAREERS
            </Link>
            <Link
              to="/blogs"
              className={`no-underline hover:text-[#1F2A44] whitespace-nowrap ${location.pathname === "/blogs" ? "text-[#1F2A44] font-semibold" : "text-[#222222]"
                }`}
            >
              ARTICLES
            </Link>
            <a
              href="https://dev-developer07.github.io/Swaraj_Maternity/#home"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-[#222222] hover:text-[#1F2A44] whitespace-nowrap"
            >
              SWARAJMATERNITY
            </a>
          </Box>

          {/* CTA Button — hidden below 1024px */}
          <Box className="flex items-center max-lg:hidden shrink-0 whitespace-nowrap">
            <NavyButton
              label="SCHEDULE A CALL"
              variant="filled"
              endIcon="/69959585702a1a429f59d932-frame-svg.png"
              className="!px-3 lg:!px-4 xl:!px-5 !py-2 xl:!py-2.5 font-medium uppercase text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] whitespace-nowrap !h-[42px] xl:!h-[46px]"
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
        <a
          href="https://dev-developer07.github.io/Swaraj_Maternity/#home"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileMenuOpen(false)}
          className="no-underline text-[#222222] font-lilex font-medium text-[20px] uppercase tracking-[-0.8px] hover:text-[#1F2A44]"
        >
          SWARAJMATERNITY
        </a>
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
