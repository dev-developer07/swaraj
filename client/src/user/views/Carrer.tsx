import { type FunctionComponent, useEffect } from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import JobBoardSection from "../components/CarrerComponent";
import Section3 from "../components/Section3";
import Section7 from "../components/Section7";

const Carrer: FunctionComponent = () => {
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

      {/* Career Section content */}
      <JobBoardSection />

      {/* Advanced Multispeciality Care */}
      <Section3 />

      {/* Footer Section */}
      <Section7 />
    </Box>
  );
};

export default Carrer;
