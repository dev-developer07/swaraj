import { type FunctionComponent, useState, useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Group2Of from "./Group2Of";
import SectionBadge from "./SectionBadge";

export type Section5Type = {
  className?: string;
};

const Section5: FunctionComponent<Section5Type> = ({ className = "" }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [rightSpacer, setRightSpacer] = useState(0);

  useEffect(() => {
    const updateSpacer = () => {
      if (scrollRef.current) {
        const rect = scrollRef.current.getBoundingClientRect();
        setRightSpacer(rect.left);
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

  const [diagnosticsItems] = useState([
    {
      sliceCTScan: "1.5 Tesla MRI",
      sVG1: "/SVG16.svg",
      sVG: "/SVG28.svg",
      testingCardBG: "/Testing-Card-BG@2x.png",
      gingivalTissueHealth: "1.5 Tesla MRI",
      periodontalPocketDepth: "Brain & Spine Imaging",
      gumRecessionTracking: "Joint Diagnostics",
      inflammationMarkers: "Soft Tissue Analysis",
      softTissueScreening: "Vascular Scans",
    },
    {
      sliceCTScan: "64-Slice CT Scan",
      sVG1: "/SVG18.svg",
      sVG: "/SVG14.svg",
      testingCardBG: "/Testing-Card-BG1@2x.png",
      gingivalTissueHealth: "Gingival & Tissue Health",
      periodontalPocketDepth: "Periodontal Pocket Depth",
      gumRecessionTracking: "Gum Recession Tracking",
      inflammationMarkers: "Inflammation Markers",
      softTissueScreening: "Soft Tissue Screening",
    },
    {
      sliceCTScan: "Advanced Diagnostics",
      sVG1: "/SVG16.svg",
      sVG: "/SVG28.svg",
      testingCardBG: "/Testing-Card-BG2@2x.png",
      gingivalTissueHealth: "Advanced Diagnostics",
      periodontalPocketDepth: "Digital 3D Bone Mapping",
      gumRecessionTracking: "High-Res Panoramic X-Ray",
      inflammationMarkers: "Oral Cancer Screening",
      softTissueScreening: "Jaw Joint (TMJ) Function",
    },
    {
      sliceCTScan: "Cardiac Diagnostics",
      sVG1: "/SVG18.svg",
      sVG: "/SVG17.svg",
      testingCardBG: "/Testing-Card-BG3@2x.png",
      gingivalTissueHealth: "Aesthetic Symmetry",
      periodontalPocketDepth: "Tooth Shade Graduation",
      gumRecessionTracking: "Midline Alignment",
      inflammationMarkers: "Smile Arc Analysis",
      softTissueScreening: "Proportional Symmetry",
    },
    {
      sliceCTScan: "4D Ultrasound",
      sVG1: "/SVG16.svg",
      sVG: "/SVG28.svg",
      testingCardBG: "/Testing-Card-BG@2x.png",
      gingivalTissueHealth: "4D Ultrasound",
      periodontalPocketDepth: "Fetal Development Tracking",
      gumRecessionTracking: "Abdominal Imaging",
      inflammationMarkers: "Pelvic Ultrasound",
      softTissueScreening: "Thyroid Scans",
    },
    {
      sliceCTScan: "Endoscopy",
      sVG1: "/SVG18.svg",
      sVG: "/SVG14.svg",
      testingCardBG: "/Testing-Card-BG1@2x.png",
      gingivalTissueHealth: "Endoscopy Services",
      periodontalPocketDepth: "Upper GI Endoscopy",
      gumRecessionTracking: "Colonoscopy",
      inflammationMarkers: "Biopsy Collection",
      softTissueScreening: "Polyp Removal",
    },
    {
      sliceCTScan: "Mammography",
      sVG1: "/SVG16.svg",
      sVG: "/SVG28.svg",
      testingCardBG: "/Testing-Card-BG2@2x.png",
      gingivalTissueHealth: "Mammography",
      periodontalPocketDepth: "Digital Breast Tomosynthesis",
      gumRecessionTracking: "Breast Ultrasound",
      inflammationMarkers: "Image-Guided Biopsy",
      softTissueScreening: "Bone Density Testing",
    },
    {
      sliceCTScan: "Pathology Lab",
      sVG1: "/SVG18.svg",
      sVG: "/SVG17.svg",
      testingCardBG: "/Testing-Card-BG3@2x.png",
      gingivalTissueHealth: "Pathology Services",
      periodontalPocketDepth: "Blood & Fluid Analysis",
      gumRecessionTracking: "Tissue Biopsy",
      inflammationMarkers: "Molecular Testing",
      softTissueScreening: "Cytology",
    },
    {
      sliceCTScan: "Genetic Testing",
      sVG1: "/SVG16.svg",
      sVG: "/SVG28.svg",
      testingCardBG: "/Testing-Card-BG@2x.png",
      gingivalTissueHealth: "Genetic Screening",
      periodontalPocketDepth: "DNA Sequencing",
      gumRecessionTracking: "Hereditary Risk Assessment",
      inflammationMarkers: "Pharmacogenomics",
      softTissueScreening: "Prenatal Genetics",
    },
  ]);

  return (
    <Box
      className={`self-stretch bg-web-white overflow-hidden flex flex-col items-start !pt-num-0 !pb-num-200 !pl-num-280 !pr-0 box-border shrink-0 max-w-full mq925:!pl-num-70 mq925:!pr-0 mq925:!pb-num-84 mq925:box-border mq1350:!pl-num-140 mq1350:!pr-0 mq1350:!pb-num-130 mq1350:box-border ${className}`}
    >
      <Box className="self-stretch flex flex-col items-start !pt-num-140 !pb-num-0 !pl-num-0 !pr-num-0 box-border gap-[46px] max-w-full mq925:gap-[23px] mq925:!pt-[91px] mq925:box-border mq450:!pt-[59px] mq450:box-border">
        <section className="self-stretch flex items-end flex-wrap content-end justify-between max-w-full text-left text-num-16 text-web-woodsmoke font-lilex mq925:gap-[123px] mq1350:gap-[246px] mq450:gap-[61px] !pr-num-280 mq925:!pr-num-70 mq1350:!pr-num-140 box-border">
          <Box className="[filter:blur(0px)] flex flex-col items-start max-w-[490px] mq925:max-w-full">
            <SectionBadge
              icon="/SVG.svg"
              label="WHAT WE DIAGNOSE"
              variant="dark"
            />
            <Box className="flex flex-col items-start !pt-6 !pb-num-0 !pl-num-0 !pr-num-2 shrink-0 text-num-48 font-stack-sans-text">
              <Typography
                className="!m-0 relative mq925:text-num-38 mq925:leading-num-52 mq450:text-num-29 mq450:leading-num-39"
                variant="inherit"
                variantMapping={{ inherit: "h1" }}
                sx={{
                  fontWeight: "400",
                  lineHeight: "64.8px",
                  letterSpacing: "-0.72px",
                }}
              >
                <span className="whitespace-nowrap">Advanced Diagnostics</span> <br />
                <span className="whitespace-nowrap">for accurate treatment.</span>
              </Typography>
            </Box>
          </Box>
          <Box className="flex-1 flex flex-col items-start min-w-[246px] max-w-[378px] font-inter">
            <Box className="self-stretch [filter:blur(0px)] flex flex-col items-start">
              <div className="w-[378px] relative leading-num-24 flex items-center">
                State-of-the-art diagnostic technology and lab-grade testing to
                ensure every condition is identified with precision and treated
                with confidence.
              </div>
            </Box>
          </Box>
        </section>
        <Box className="self-stretch flex flex-col items-start justify-center relative isolate max-w-full">
          <section ref={scrollRef} className="w-[100vw] h-num-438 flex items-stretch overflow-x-hidden scroll-smooth !pt-num-0 !pb-num-0 !pl-num-0 !pr-num-0 box-border gap-6 shrink-0 text-left text-num-16 text-web-white font-inter mq925:h-auto mq450:max-w-full">
            {diagnosticsItems.map((item, index) => (
              <Group2Of
                key={index}
                testingCardBG={item.testingCardBG}
                sVG={item.sVG}
                gingivalTissueHealth={item.gingivalTissueHealth}
                periodontalPocketDepth={item.periodontalPocketDepth}
                gumRecessionTracking={item.gumRecessionTracking}
                inflammationMarkers={item.inflammationMarkers}
                softTissueScreening={item.softTissueScreening}
                sVG1={item.sVG1}
                sliceCTScan={item.sliceCTScan}
              />
            ))}
            <div style={{ width: `${rightSpacer}px`, flexShrink: 0 }} />
          </section>
          <Box onClick={scrollLeft} className="w-11 h-[10.05%] min-h-[44px] !!m-[0 important] absolute top-[104.95%] right-[350px] bottom-[-15%] [backdrop-filter:blur(12px)] rounded-num-8 bg-web-gray-nurse overflow-hidden flex items-center justify-center z-[1] shrink-0 cursor-pointer hover:bg-web-white transition-colors">
            <Box className="h-6 w-6 flex items-center justify-center">
              <img className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full" alt="" src="/SVG19.svg" />
            </Box>
          </Box>
          <Box onClick={scrollRight} className="w-11 h-[10.05%] min-h-[44px] !!m-[0 important] absolute top-[104.95%] right-[280px] bottom-[-15%] rounded-num-12 bg-web-gray-nurse overflow-hidden flex items-center justify-center z-[2] shrink-0 cursor-pointer hover:bg-web-white transition-colors">
            <Box className="h-6 w-6 flex items-center justify-center">
              <img className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full" alt="" src="/SVG20.svg" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Section5;
