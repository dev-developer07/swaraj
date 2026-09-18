import { type FunctionComponent } from "react";
import { Link } from "react-router-dom";
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
          <Box className="w-full h-[890px] rounded-[890px] bg-web-gray-nurse overflow-hidden shrink-0 flex flex-col items-center justify-center gap-11 max-w-[890px] mq1350:w-[760px] mq1350:h-[760px] mq1350:rounded-[760px] mq1350:gap-8 mq925:h-auto mq925:rounded-[60px] mq925:gap-8 mq925:py-16 mq925:px-6 mq450:h-auto mq450:rounded-[60px] mq450:gap-8 mq450:py-16 mq450:px-1">
            <section className="w-full flex flex-col items-center gap-[16.2px] max-w-num-599 text-center text-num-16 text-web-woodsmoke font-lilex">
              <SectionBadge
                icon="/SVG.svg"
                label="Welcome to Swaraj"
                variant="light"
              />
              <Box className="w-[500px] flex flex-col items-center !pt-[7.2px] !pb-num-0 !pl-num-0 !pr-num-0 box-border max-w-num-500 text-num-48 mq925:text-num-38 mq450:text-[clamp(23px,6.5vw,30px)] font-stack-sans-text mq925:w-full mq450:w-full">
                <Box className="relative flex flex-col items-center text-center w-full">
                  <Typography
                    className="!m-0 w-full relative inline-block max-w-num-500 text-center leading-num-64_8 mq925:leading-num-52 mq450:leading-[1.35] mq450:text-[clamp(23px,6.5vw,30px)] mq450:whitespace-nowrap"
                    variantMapping={{ inherit: "h1" }}
                    sx={{
                      fontFamily: "inherit",
                      fontWeight: "400",
                      fontSize: "inherit",
                      letterSpacing: "-0.72px",
                    }}
                  >
                    Trusted <br className="mq925:hidden mq450:hidden" /> Multispeciality Care
                  </Typography>
                </Box>
              </Box>
              <Box className="self-stretch flex flex-col items-start font-inter">
                <Box className="self-stretch [filter:blur(0px)] overflow-hidden flex flex-col items-center !pt-num-0 !pb-num-0 px-4">
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
              <div className="w-full h-[60px] relative bg-web-white overflow-hidden shrink-0 rounded-lg">
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
                <Link to="/meet-the-team" className="no-underline">
                  <NavyButton
                    label="Our Specialists"
                    variant="filled"
                    endIcon="/container-3.png"
                  />
                </Link>
              </Box>
            </Box>
            {/* Mobile Image Grid (hidden on desktop, shown on mobile/tablet) */}
            <Box className="hidden mq925:grid mq450:grid grid-cols-2 gap-4 w-full mt-4">
              <img
                className="w-full aspect-[4/5] object-cover rounded-2xl"
                src="/Intro-Image@2x.png"
                alt=""
              />
              <img
                className="w-full aspect-[4/5] object-cover rounded-2xl"
                src="/Intro-Image2@2x.png"
                alt=""
              />
              <img
                className="w-full aspect-[4/5] object-cover rounded-2xl"
                src="/Intro-Image1@2x.png"
                alt=""
              />
              <img
                className="w-full aspect-[4/5] object-cover rounded-2xl"
                src="/Intro-Image3@2x.png"
                alt=""
              />
            </Box>
          </Box>
        </ScrollReveal>
        <img
          className="w-[190px] h-[230px] absolute z-20 top-[40px] left-[calc(50%-430px)] mq1350:left-[calc(50%-375px)] mq1350:w-[155px] mq1350:h-[190px] rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] object-cover shrink-0 mq925:hidden mq450:hidden"
          loading="lazy"
          alt="Surgeons operating"
          src="/Intro-Image@2x.png"
        />
        <img
          className="w-[240px] h-[160px] absolute z-20 top-[40px] right-[calc(50%-450px)] mq1350:right-[calc(50%-385px)] mq1350:w-[185px] mq1350:h-[130px] rounded-[24px] border-[3px] border-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] object-cover shrink-0 mq925:hidden mq450:hidden"
          loading="lazy"
          alt="Specialist doctor"
          src="/Intro-Image2@2x.png"
        />
        <img
          className="w-[190px] h-[240px] absolute z-20 bottom-[40px] left-[calc(50%-430px)] mq1350:left-[calc(50%-375px)] mq1350:w-[155px] mq1350:h-[195px] rounded-[24px] border-[3px] border-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] object-cover shrink-0 mq925:hidden mq450:hidden"
          loading="lazy"
          alt="Medical monitoring equipment"
          src="/Intro-Image1@2x.png"
        />
        <img
          className="w-[240px] h-[160px] absolute z-20 bottom-[40px] right-[calc(50%-450px)] mq1350:right-[calc(50%-385px)] mq1350:w-[185px] mq1350:h-[130px] rounded-[24px] border-[3px] border-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] object-cover shrink-0 mq925:hidden mq450:hidden"
          loading="lazy"
          alt="Male doctor"
          src="/Intro-Image3@2x.png"
        />
      </section>
    </Box>
  );
};

export default Section;
