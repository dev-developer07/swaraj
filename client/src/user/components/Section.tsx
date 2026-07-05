import { type FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import SectionBadge from "./SectionBadge";
import NavyButton from "./NavyButton";
import ScrollReveal from "./ScrollReveal";

export type SectionType = {
  className?: string;
};

const Section: FunctionComponent<SectionType> = ({ className = "" }) => {
  return (
    <Box
      className={`w-full flex flex-col items-center justify-center !pt-num-0 !pb-num-0 box-border leading-[normal] tracking-[normal] ${className}`}
    >
      <section className="w-full max-w-[1360px] rounded-[1125px] flex flex-col items-center relative isolate">
        <ScrollReveal direction="up" className="w-full flex justify-center">
          <Box className="w-full h-[890px] rounded-[890px] bg-web-gray-nurse overflow-hidden shrink-0 flex flex-col items-center justify-center gap-11 max-w-[890px]">
          <section className="w-full flex flex-col items-center gap-[16.2px] max-w-num-599 text-center text-num-16 text-web-woodsmoke font-lilex">
            <SectionBadge
              icon="/SVG.svg"
              label="Welcome to Swaraj"
              variant="light"
            />
            <Box className="w-[500px] flex flex-col items-center !pt-[7.2px] !pb-num-0 !pl-num-0 !pr-num-0 box-border max-w-num-500 text-num-48 font-stack-sans-text">
              <Box className="relative flex flex-col items-center text-center">
                <Typography
                  className="!m-0 w-full relative inline-block max-w-num-500 text-center"
                  variantMapping={{ inherit: "h1" }}
                  sx={{
                    fontFamily: "inherit",
                    fontWeight: "400",
                    fontSize: "inherit",
                    lineHeight: "64.8px",
                    letterSpacing: "-0.72px",
                  }}
                >
                  Trusted <br /> Multispeciality Care
                </Typography>
              </Box>
            </Box>
            <Box className="self-stretch flex flex-col items-start font-inter">
              <Box className="self-stretch [filter:blur(0px)] overflow-hidden flex flex-col items-center !pt-num-0 !pb-num-0 !pl-num-5 !pr-num-5">
                <div className="w-full relative leading-num-24 inline-block max-w-[588.6px]">
                  At the heart of Swaraj Hospital is a commitment to advanced
                  medicine and patient dignity. We don&apos;t just treat
                  conditions, we focus on the long-term health and wellbeing of
                  every family we serve. Combining specialist expertise with
                  compassionate care, we ensure every visit feels personal,
                  transparent, and world-class.
                </div>
              </Box>
            </Box>
          </section>
          <section className="self-stretch flex flex-col items-center max-w-full text-left text-num-16 text-web-woodsmoke font-inter">
            <div className="w-[1920px] h-[60px] relative bg-web-white overflow-hidden shrink-0 max-w-full">
              <div className="absolute top-[16px] left-0 flex items-center h-7 w-max animate-marquee-50">
                {[...Array(2)].map((_, groupIndex) => (
                  <div
                    key={groupIndex}
                    className="flex items-center gap-[60px] shrink-0 whitespace-nowrap flex-nowrap"
                    style={{ paddingRight: "60px" }}
                  >
                    {[
                      "CLIENT SATISFACTION",
                      "99% PATIENT SATISFACTION",
                      "15+ YEARS OF EXPERTISE",
                      "NABH PRE-ACCREDITED"
                    ].map((text, index) => (
                      <div key={index} className="flex items-center gap-2.5 shrink-0">
                        <img
                          className="w-[19px] h-[21px] relative object-contain shrink-0"
                          loading="lazy"
                          alt=""
                          src="/Vector(2).png"
                        />
                        <div className="relative leading-num-24 uppercase font-medium text-[16px]">
                          {text}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>
          <Box className="self-stretch flex flex-col items-start !pt-4 !pb-num-0 !pl-num-0 !pr-num-0">
            <Box className="self-stretch [filter:blur(0px)] flex items-center justify-center gap-4">
              <NavyButton
                label="Our specialties"
                variant="filled"
                endIcon="/container-3.png"
              />
            </Box>
          </Box>
        </Box>
        </ScrollReveal>
        <img
          className="w-[199.3px] absolute !!m-[0 important] top-[3.6px] left-[177.1px] rounded-num-20 max-h-full object-cover max-w-[199.3px] shrink-0"
          loading="lazy"
          alt=""
          src="/Intro-Image@2x.png"
        />
        <img
          className="w-[244.9px] h-[172.1px] absolute !!m-[0 important] top-[-4.3px] right-[176.4px] rounded-num-20 object-cover max-w-[245.8px] shrink-0"
          alt=""
          src="/Intro-Image2@2x.png"
        />
        <img
          className="w-[200px] absolute !!m-[0 important] bottom-[5.7px] left-[176.8px] rounded-num-20 max-h-full object-cover max-w-[200px] shrink-0"
          loading="lazy"
          alt=""
          src="/Intro-Image1@2x.png"
        />
        <img
          className="w-[260.9px] absolute !!m-[0 important] right-[176.3px] bottom-[-3.9px] rounded-num-20 max-h-full object-cover max-w-[261.8px] shrink-0"
          loading="lazy"
          alt=""
          src="/Intro-Image3@2x.png"
        />
      </section>
    </Box>
  );
};

export default Section;
