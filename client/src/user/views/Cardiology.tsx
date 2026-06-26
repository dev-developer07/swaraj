import { type FunctionComponent, useEffect } from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import CardiologySection from "../components/CardiologyCompnent";
import Section3 from "../components/Section3";
import Section7 from "../components/Section7";

const Cardiology: FunctionComponent = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Box className="h-auto relative w-full flex flex-col items-start !pt-num-0 !pb-[0.1px] !pl-num-0 !pr-num-0 box-border leading-[normal] tracking-[normal] bg-[#ffffff]">
      {/* Sticky Navbar */}
      <Box className="sticky top-0 z-[100] w-full bg-[#FFFFFF] shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
        <Navbar />
      </Box>

      {/* Cardiology Section content */}
      <Box className="w-full">
        <CardiologySection />
      </Box>

      {/* Advanced Multispeciality Care */}
      <Box className="w-full">
        <Section3 />
      </Box>

      {/* Footer Section */}
      <Box className="w-full">
        <Section7 />
      </Box>
    </Box>
  );
};

export default Cardiology;
