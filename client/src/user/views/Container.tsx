import type { FunctionComponent } from "react";
import { Box } from "@mui/material";
import Section2 from "../components/Section2";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import Section1 from "../components/Section1";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Container1 from "../components/Container1";
import Section6 from "../components/Section6";
import Section3 from "../components/Section3";
import Section7 from "../components/Section7";
import StatCard from "../components/StatCard";
import Navbar from "../components/Navbar";

const Container: FunctionComponent = () => {
  return (
    <Box className="h-auto relative w-full flex flex-col items-start !pt-num-0 !pb-[0.1px] !pl-num-0 !pr-num-0 box-border leading-[normal] tracking-[normal]">
      <Navbar />

      {/* 1st Section: Hero (Normal Flow) */}
      <Section2 />

      {/* Sticky Stacking Sections Wrapper */}
      <Box className="w-full flex flex-col items-start gap-0 relative">
        {/* 2nd Section (Slide 1): Circle with Multispecialty Care Introduction */}
        <Box className="sticky top-0 w-full z-10 bg-web-white pb-num-200">
          <FrameComponent />
        </Box>

        {/* 3rd Section (Slide 2): Scope of Our Care */}
        <Box className="sticky top-0 w-full z-20 bg-web-white shadow-[0_-20px_40px_rgba(0,0,0,0.06)]">
          <FrameComponent1 />
        </Box>

        {/* 4th Section (Slide 3): Specialties & Stats */}
        <Box className="relative w-full z-30 bg-web-white">
          <div className="self-stretch bg-web-white border-web-silver-chalice border-dashed border-t-[1px] grid grid-cols-[repeat(auto-fit,_minmax(384px,_1fr))] grid-rows-[365.593994140625px] [row-gap:0px]">
            <StatCard
              icon="/ClockCountdown.svg"
              title="15 Years of Experience"
              description={
                <>
                  Serving patients with confidence, care, and
                  <br />
                  trusted experience
                </>
              }
              className="col-[1] row-[1]"
            />
            <StatCard
              icon="/SVG6.svg"
              title="Specialist Doctors"
              description="Experienced specialists across 13+ medical disciplines"
              className="col-[2] row-[1]"
            />
            <StatCard
              icon="/SVG7.svg"
              title="Patient-First Care"
              description={
                <>
                  Your comfort, safety, and needs always come
                  <br />
                  first
                </>
              }
              className="col-[3] row-[1]"
            />
            <StatCard
              icon="/SVG8.svg"
              title="NABH Pre-accredited"
              description="Meeting national standards for safety and quality of care"
              className="col-[4] row-[1] !pb-[64.8px]"
            />
          </div>
          <Section1 />
        </Box>
      </Box>

      {/* Subsequent normal scroll content */}
      <Box className="self-stretch h-auto flex flex-col items-start gap-[115px] mq925:gap-[29px] mq1350:gap-[57px] max-w-full text-left text-num-20 text-web-woodsmoke font-lilex relative z-40 bg-web-white">
        <Section4 />
        <Section5 />
        <Box className="self-stretch bg-web-gray-nurse flex flex-col items-center !pt-num-100 !pb-num-100 !pl-num-0 !pr-num-0 box-border gap-20 max-w-full mq925:gap-10 mq925:!pt-[42px] mq925:!pb-[42px] mq925:box-border mq1350:!pt-num-65 mq1350:!pb-num-65 mq1350:box-border mq450:gap-5">
          <Container1 />
          <Box className="w-[1920px] h-num-100 relative overflow-hidden shrink-0 hidden mq1825:h-auto mq1825:min-h-[100px]">
            <Box className="absolute top-[calc(50%_-_50px)] left-[-261.2px] flex items-center gap-[60px] shrink-0 mq1825:flex-wrap">
              <Box className="flex items-center gap-4 max-w-full">
                <img
                  className="h-num-100 w-[100px] relative rounded-num-12 object-cover"
                  alt=""
                  src="/Team-Section-Marquee-Image2@2x.png"
                />
                <Box className="flex flex-col items-start !pt-5 !pb-5 !pl-num-0 !pr-num-0">
                  <div className="relative leading-num-32 uppercase font-medium mq450:text-num-16 mq450:leading-num-26">
                    Advanced Diagnostics
                  </div>
                </Box>
              </Box>
              <Box className="flex items-center gap-4 max-w-full">
                <img
                  className="h-num-100 w-[100px] relative rounded-num-12 object-cover"
                  alt=""
                  src="/Team-Section-Marquee-Image3@2x.png"
                />
                <Box className="flex flex-col items-start !pt-5 !pb-5 !pl-num-0 !pr-num-0">
                  <div className="relative leading-num-32 uppercase font-medium mq450:text-num-16 mq450:leading-num-26">
                    Comfort-First Setup
                  </div>
                </Box>
              </Box>
              <Box className="flex items-center gap-4 max-w-full mq450:flex-wrap">
                <Box className="rounded-num-12 overflow-hidden flex flex-col items-center justify-center mq450:flex-1">
                  <img
                    className="w-[100px] h-num-100 relative object-cover mq450:self-stretch mq450:w-full"
                    alt=""
                    src="/699adf4ed3772f3ec5628d53-Team-20Member-20Marquee-20-20img-2003-svg@2x.png"
                  />
                </Box>
                <Box className="flex flex-col items-start !pt-5 !pb-5 !pl-num-0 !pr-num-0">
                  <div className="relative leading-num-32 uppercase font-medium mq450:text-num-16 mq450:leading-num-26">
                    100% Hygiene Protocols
                  </div>
                </Box>
              </Box>
              <Box className="flex items-center gap-4 max-w-full mq450:flex-wrap">
                <img
                  className="h-num-100 w-[100px] relative rounded-num-12 object-cover mq450:flex-1"
                  alt=""
                  src="/Team-Section-Marquee-Image1@2x.png"
                />
                <Box className="flex flex-col items-start !pt-5 !pb-5 !pl-num-0 !pr-num-0">
                  <div className="relative leading-num-32 uppercase font-medium mq450:text-num-16 mq450:leading-num-26">
                    High-Precision Testing
                  </div>
                </Box>
              </Box>
              <Box className="flex items-center gap-4 max-w-full">
                <img
                  className="h-num-100 w-[100px] relative rounded-num-12 object-cover"
                  alt=""
                  src="/Team-Section-Marquee-Image2@2x.png"
                />
                <Box className="flex flex-col items-start !pt-5 !pb-5 !pl-num-0 !pr-num-0">
                  <div className="relative leading-num-32 uppercase font-medium mq450:text-num-16 mq450:leading-num-26">
                    Comfort-First Setup
                  </div>
                </Box>
              </Box>
            </Box>
            <Box className="absolute top-[calc(50%_-_50px)] left-[1842.8px] flex items-center justify-center gap-[60px] shrink-0 mq1825:flex-wrap">
              <Box className="flex items-center gap-4 max-w-full">
                <img
                  className="h-num-100 w-[100px] relative rounded-num-12 object-cover"
                  alt=""
                  src="/Team-Section-Marquee-Image2@2x.png"
                />
                <Box className="w-60 relative" />
              </Box>
              <Box className="flex items-center gap-4 max-w-full">
                <img
                  className="h-num-100 w-[100px] relative rounded-num-12 object-cover"
                  alt=""
                  src="/Team-Section-Marquee-Image3@2x.png"
                />
                <Box className="w-[228px] relative" />
              </Box>
              <Box className="flex items-center gap-4 max-w-full mq450:flex-wrap">
                <Box className="h-num-100 w-[100px] rounded-num-12 overflow-hidden shrink-0 flex flex-col items-center justify-center mq450:flex-1" />
                <Box className="w-[264px] relative" />
              </Box>
              <Box className="flex items-center gap-4 max-w-full mq450:flex-wrap">
                <img
                  className="h-num-100 w-[100px] relative rounded-num-12 object-cover mq450:flex-1"
                  alt=""
                  src="/Team-Section-Marquee-Image1@2x.png"
                />
                <Box className="w-[264px] relative" />
              </Box>
              <Box className="flex items-center gap-4 max-w-full">
                <img
                  className="h-num-100 w-[100px] relative rounded-num-12 object-cover"
                  alt=""
                  src="/Team-Section-Marquee-Image2@2x.png"
                />
                <Box className="w-[228px] relative" />
              </Box>
            </Box>
            <Box className="absolute top-[calc(50%_-_50px)] left-[3946.8px] flex items-center justify-center gap-[60px] shrink-0 mq1825:flex-wrap">
              <Box className="flex items-center gap-4 max-w-full">
                <img
                  className="h-num-100 w-[100px] relative rounded-num-12 object-cover"
                  alt=""
                  src="/Team-Section-Marquee-Image2@2x.png"
                />
                <Box className="w-60 relative" />
              </Box>
              <Box className="flex items-center gap-4 max-w-full">
                <img
                  className="h-num-100 w-[100px] relative rounded-num-12 object-cover"
                  alt=""
                  src="/Team-Section-Marquee-Image3@2x.png"
                />
                <Box className="w-[228px] relative" />
              </Box>
              <Box className="flex items-center gap-4 max-w-full mq450:flex-wrap">
                <Box className="h-num-100 w-[100px] rounded-num-12 overflow-hidden shrink-0 flex flex-col items-center justify-center mq450:flex-1" />
                <Box className="w-[264px] relative" />
              </Box>
              <Box className="flex items-center gap-4 max-w-full mq450:flex-wrap">
                <img
                  className="h-num-100 w-[100px] relative rounded-num-12 object-cover mq450:flex-1"
                  alt=""
                  src="/Team-Section-Marquee-Image1@2x.png"
                />
                <Box className="w-[264px] relative" />
              </Box>
              <Box className="flex items-center gap-4 max-w-full">
                <img
                  className="h-num-100 w-[100px] relative rounded-num-12 object-cover"
                  alt=""
                  src="/Team-Section-Marquee-Image2@2x.png"
                />
                <Box className="w-[228px] relative" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Section6 />
        <Box className="self-stretch overflow-hidden flex flex-col items-start isolate shrink-0 max-w-full">
          <Section3 />
        </Box>
        <Section7 />
      </Box>
    </Box>
  );
};

export default Container;
