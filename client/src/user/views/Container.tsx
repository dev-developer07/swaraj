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
        <Box className="sticky mq925:relative mq450:relative top-0 w-full z-10 bg-web-white pb-num-200 mq925:pb-10 mq450:pb-10">
          <FrameComponent />
        </Box>

        {/* 3rd Section (Slide 2): Scope of Our Care */}
        <Box className="sticky mq925:relative mq450:relative top-0 w-full z-20 bg-web-white shadow-[0_-20px_40px_rgba(0,0,0,0.06)] mq925:shadow-none mq450:shadow-none">
          <FrameComponent1 />
        </Box>

        {/* 4th Section (Slide 3): Specialties & Stats */}
        <Box className="relative w-full z-30 bg-web-white">
          <div className="self-stretch bg-web-white border-web-silver-chalice border-dashed border-t-[1px] grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] mq925:grid-cols-[1fr] mq450:grid-cols-[1fr] [row-gap:0px]">
            <StatCard
              icon="/ClockCountdown.svg"
              title="5 Years of Experience"
              statVisual={
                <div className="flex flex-col items-start gap-1">
                  <div className="text-4xl font-extrabold tracking-tight text-web-woodsmoke font-inter">
                    5+ <span className="text-xl font-bold text-[#0EA5E9]">Years</span>
                  </div>
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-[#475569] bg-[#F1F5F9] px-2.5 py-1 rounded-md">
                    Established 2022
                  </div>
                </div>
              }
              description="Serving patients with confidence, care, and trusted medical experience."
              className="col-[1] row-[1] mq925:col-auto mq925:row-auto mq450:col-auto mq450:row-auto"
            />
            <StatCard
              icon="/SVG6.svg"
              title="Specialist Doctors"
              statVisual={
                <div className="flex flex-col items-start gap-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold tracking-tight text-web-woodsmoke font-inter">13+</span>
                    <span className="text-xs font-semibold text-[#475569] uppercase tracking-wider bg-[#F1F5F9] px-2 py-0.5 rounded">Specialties</span>
                  </div>
                  <div className="flex items-center -space-x-2 overflow-hidden pt-0.5">
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover object-top" src="/doctors/dr-bikramaditya-padhi.jpeg" alt="Doctor" />
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover object-top" src="/doctors/dr-rajat-bral.jpeg" alt="Doctor" />
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover object-top" src="/doctors/dr-swadhin-ku-mishra.jpeg" alt="Doctor" />
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#E2E8F0] ring-2 ring-white text-[11px] font-bold text-[#334155]">
                      +10
                    </div>
                  </div>
                </div>
              }
              description="Experienced specialists across 13+ medical disciplines under one roof."
              className="col-[2] row-[1] mq925:col-auto mq925:row-auto mq450:col-auto mq450:row-auto"
            />
            <StatCard
              icon="/SVG7.svg"
              title="Patient-First Care"
              statVisual={
                <div className="flex flex-col items-start gap-1">
                  <div className="text-4xl font-extrabold tracking-tight text-[#0284C7] font-inter">
                    24 / 7
                  </div>
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-[#0369A1] bg-[#E0F2FE] px-2.5 py-1 rounded-md flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse"></span>
                    Emergency & Care
                  </div>
                </div>
              }
              description="Your comfort, safety, and personal healthcare needs always come first."
              className="col-[3] row-[1] mq925:col-auto mq925:row-auto mq450:col-auto mq450:row-auto"
            />
            <StatCard
              icon="/SVG8.svg"
              title="NABH Pre-accredited"
              statVisual={
                <div className="flex flex-col items-start gap-1.5">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F0FDF4] border border-[#BBF7D0]">
                    <span className="text-xl font-black text-[#15803D] tracking-wide font-inter">NABH</span>
                    <span className="text-[10px] font-extrabold text-[#166534] bg-[#DCFCE7] px-1.5 py-0.5 rounded uppercase">Pre-accredited</span>
                  </div>
                  <div className="text-[11px] font-semibold text-[#166534] uppercase tracking-wider">
                    Highest Safety Protocols
                  </div>
                </div>
              }
              description="Meeting strict national standards for patient safety and clinical quality of care."
              className="col-[4] row-[1] mq925:col-auto mq925:row-auto mq450:col-auto mq450:row-auto"
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
