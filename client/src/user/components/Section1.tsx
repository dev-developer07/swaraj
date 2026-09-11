import { type FunctionComponent, useState, useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Group1Of4ListListit from "./Group1Of4ListListit";
import SectionBadge from "./SectionBadge";

export type Section1Type = {
  className?: string;
};

const Section1: FunctionComponent<Section1Type> = ({ className = "" }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [spacerWidth, setSpacerWidth] = useState(0);

  useEffect(() => {
    const updateSpacer = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setSpacerWidth(rect.left);
      }
    };

    updateSpacer();
    window.addEventListener("resize", updateSpacer);
    return () => window.removeEventListener("resize", updateSpacer);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -460, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 460, behavior: "smooth" });
    }
  };

  const [group1Of4ListListitItems] = useState([
    {
      background: "/Background2@2x.png",
      cardiology: "Cardiology",
      advancedHeartCareDiagnostics: "Advanced heart care, diagnostics and intervention for every stage of cardiac health.",
      containerPadding: "38px 22px 38px 28px" as const,
      containerPadding1: "0px 4px" as const,
      advancedHeartCareWidth: "354px" as const,
    },
    {
      background: "/Background@2x.png",
      cardiology: "General Medicine",
      advancedHeartCareDiagnostics: "Comprehensive diagnosis and treatment of acute and chronic conditions for patients of all ages.",
      containerPadding: "38px 12px 38px 28px" as const,
      containerPadding1: "0px 15px" as const,
      advancedHeartCareWidth: "337px" as const,
    },
    {
      background: "/Background1@2x.png",
      cardiology: "General Surgery",
      advancedHeartCareDiagnostics: "Surgical care for a broad range of conditions with a focus on precision, safety and swift recovery.",
      containerPadding: "38px 21px 38px 28px" as const,
      containerPadding1: "0px 13px" as const,
      advancedHeartCareWidth: "337px" as const,
    },
    {
      background: "/Background3@2x.png",
      cardiology: "Obstetrics & Gynaecology",
      advancedHeartCareDiagnostics: "Complete women's health care — from routine gynaecological consultations to high-risk pregnancy and delivery.",
      containerPadding: "38px 21px 38px 28px" as const,
      containerPadding1: "0px 13px" as const,
      advancedHeartCareWidth: "337px" as const,
    },
    {
      background: "/Background4@2x.png",
      cardiology: "Orthopaedics & Joint Replacement",
      advancedHeartCareDiagnostics: "Advanced bone, joint and spine treatment including surgical replacement and rehabilitation support.",
      containerPadding: "38px 21px 38px 28px" as const,
      containerPadding1: "0px 13px" as const,
      advancedHeartCareWidth: "337px" as const,
    },
    {
      background: "/Background7@2x.png",
      cardiology: "Paediatrics & Neonatology",
      advancedHeartCareDiagnostics: "Dedicated care for newborns, infants and children — including a specialist NICU for critical neonatal cases.",
      containerPadding: "38px 21px 38px 28px" as const,
      containerPadding1: "0px 13px" as const,
      advancedHeartCareWidth: "337px" as const,
    },
    {
      background: "/Background6@2x.png",
      cardiology: "Minimal Access & Laparoscopic Surgery",
      advancedHeartCareDiagnostics: "Minimally invasive surgical procedures for faster recovery, reduced pain and shorter hospital stays.",
      containerPadding: "38px 21px 38px 28px" as const,
      containerPadding1: "0px 13px" as const,
      advancedHeartCareWidth: "337px" as const,
    },
    {
      background: "/Background10@2x.png",
      cardiology: "Ophthalmology",
      advancedHeartCareDiagnostics: "Complete eye care — from routine consultations and prescriptions to surgical intervention and post-operative support.",
      containerPadding: "38px 21px 38px 28px" as const,
      containerPadding1: "0px 13px" as const,
      advancedHeartCareWidth: "337px" as const,
    },
    {
      background: "/Background8@2x.png",
      cardiology: "Neurology",
      advancedHeartCareDiagnostics: "Specialist diagnosis and treatment of brain, spine and nervous system conditions with advanced imaging support.",
      containerPadding: "38px 21px 38px 28px" as const,
      containerPadding1: "0px 13px" as const,
      advancedHeartCareWidth: "337px" as const,
    },
    {
      background: "/Background9@2x.png",
      cardiology: "Urology",
      advancedHeartCareDiagnostics: "Comprehensive urological care for conditions affecting the kidney, bladder and urinary tract in men and women.",
      containerPadding: "38px 21px 38px 28px" as const,
      containerPadding1: "0px 13px" as const,
      advancedHeartCareWidth: "337px" as const,
    },
    {
      background: "/Background11@2x.png",
      cardiology: "Dental & Maxillofacial Surgery",
      advancedHeartCareDiagnostics: "Oral health, dental surgery and complex maxillofacial procedures performed by experienced surgical specialists.",
      containerPadding: "38px 21px 38px 28px" as const,
      containerPadding1: "0px 13px" as const,
      advancedHeartCareWidth: "337px" as const,
    },
    {
      background: "/Background5@2x.png",
      cardiology: "Gastroenterology",
      advancedHeartCareDiagnostics: "Diagnosis and management of digestive system conditions including endoscopy and advanced gastrointestinal care.",
      containerPadding: "38px 21px 38px 28px" as const,
      containerPadding1: "0px 13px" as const,
      advancedHeartCareWidth: "337px" as const,
    },
  ]);
  return (
    <Box
      className={`self-stretch overflow-hidden flex flex-col items-start !pt-num-0 !pb-num-0 !pl-60 !pr-0 box-border max-w-full z-[1] mq925:!pl-[60px] mq925:!pr-0 mq925:box-border mq1350:!pl-num-120 mq1350:!pr-0 mq1350:box-border mq450:!pl-6 ${className}`}
      style={{
        backgroundImage: "url('/Testimonial-Section-BG-Image@2x.png')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box ref={containerRef} className="w-full flex flex-col items-start !pt-num-0 !pb-num-0 !pl-num-40 !pr-0 box-border relative isolate max-w-num-1440 mq1825:max-w-full mq450:!pl-0">
        <Box className="self-stretch flex flex-col items-start !pt-num-100 !pb-[132px] !pl-num-0 !pr-num-0 box-border gap-[46px] max-w-full z-[1] shrink-0 mq925:gap-[23px] mq925:!pt-[42px] mq925:!pb-14 mq925:box-border mq1350:!pt-num-65 mq1350:!pb-[86px] mq1350:box-border mq450:gap-[23px] mq450:!pt-[42px] mq450:!pb-14 mq450:box-border">
          <section className="self-stretch !pr-60 mq925:!pr-[60px] mq1350:!pr-num-120 overflow-hidden flex items-end justify-between gap-5 max-w-full text-left text-num-16 text-web-woodsmoke font-lilex mq1350:flex-wrap mq1350:gap-5 mq925:flex-wrap mq450:flex-wrap mq450:!pr-6">
            <Box className="[filter:blur(0px)] flex flex-col items-start max-w-[480px] mq925:max-w-full mq1350:w-full mq1350:min-w-full">
              <SectionBadge
                icon="/SVG.svg"
                label="SPECIALITIES"
                variant="light"
              />
              <Box className="flex flex-col items-start !pt-6 max-[450px]:!pt-8 !pb-num-0 !pl-num-0 !pr-num-0 shrink-0 text-num-48 text-web-white font-stack-sans-text">
                <Typography
                  className="!m-0 relative mq925:text-num-38 mq925:leading-num-52 mq450:text-num-29 mq450:leading-num-39 max-[450px]:!text-[28px] max-[450px]:!leading-[38px] max-[450px]:!tracking-[-0.42px] max-[450px]:!w-[345px] max-[450px]:!max-w-full"
                  variant="inherit"
                  variantMapping={{ inherit: "h1" }}
                  sx={{
                    fontWeight: "400",
                    lineHeight: "64.8px",
                    letterSpacing: "-0.72px",
                  }}
                >
                  Exceptional
                  <br />
                  <span className="mq925:whitespace-normal mq450:whitespace-normal whitespace-nowrap">care for every smile</span>
                </Typography>
              </Box>
            </Box>
            <Box className="flex-1 [filter:blur(0px)] flex flex-col items-start min-w-[235px] max-w-[362px] mq925:max-w-full mq925:w-full mq925:min-w-0 mq450:max-w-full mq450:w-full mq450:min-w-0 text-web-white font-inter">
              <Box className="self-stretch flex flex-col items-start">
                <div className="self-stretch relative leading-num-24">
                  We offer a full range of advanced medical specialities, where
                  clinical expertise and compassionate care come together for
                  your family&apos;s health.
                </div>
              </Box>
            </Box>
          </section>
          <Box className="self-stretch flex flex-col items-start justify-center relative isolate max-w-full">
            <section ref={scrollRef} className="w-[100vw] h-auto flex items-stretch overflow-x-auto no-scrollbar scroll-smooth !pt-num-0 !pb-num-0 !pl-num-0 !pr-num-0 box-border gap-6 shrink-0 text-center text-num-16 text-web-woodsmoke font-stack-sans-text mq450:!max-w-none" style={{ marginLeft: `-${spacerWidth}px`, width: "100vw" }}>
              <div style={{ width: `${spacerWidth}px`, flexShrink: 0 }} />
              {group1Of4ListListitItems.map((item, index) => (
                <Group1Of4ListListit
                  key={index}
                  background={item.background}
                  cardiology={item.cardiology}
                  advancedHeartCareDiagnostics={
                    item.advancedHeartCareDiagnostics
                  }
                  containerPadding={item.containerPadding}
                  containerPadding1={item.containerPadding1}
                  advancedHeartCareWidth={item.advancedHeartCareWidth}
                />
              ))}
              <div style={{ width: `${spacerWidth}px`, flexShrink: 0 }} />
            </section>
            <Box className="w-full flex justify-end max-sm:!justify-center mq450:!justify-center gap-[22px] !pt-12 !pr-[324px] mq1350:!pr-num-120 mq925:!pr-[60px] mq450:!pr-0 max-sm:!pr-0 box-border">
              <Box onClick={scrollLeft} className="w-11 h-11 [backdrop-filter:blur(12px)] rounded-num-8 bg-web-white-12 overflow-hidden flex items-center justify-center shrink-0 cursor-pointer hover:bg-web-white-24 transition-colors">
                <img className="h-3.5 w-3.5 relative" alt="" src="/SVG9.svg" />
              </Box>
              <Box onClick={scrollRight} className="w-11 h-11 rounded-num-12 bg-web-white-12 overflow-hidden flex items-center justify-center shrink-0 cursor-pointer hover:bg-web-white-24 transition-colors">
                <img className="h-3.5 w-3.5 relative" alt="" src="/SVG10.svg" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Section1;
