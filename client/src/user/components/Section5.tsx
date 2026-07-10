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
      sliceCTScan: "Pathology",
      sVG1: "/SVG18.svg",
      testingCardBG: "/Card.png",
    },
    {
      sliceCTScan: "Radiology",
      sVG1: "/SVG16.svg",
      testingCardBG: "/Card(1).png",
    },
    {
      sliceCTScan: "1.5 Tesla MRI",
      sVG1: "/SVG18.svg",
      testingCardBG: "/Card(2).png",
    },
    {
      sliceCTScan: "64-Slice CT Scan",
      sVG1: "/SVG16.svg",
      testingCardBG: "/Card(3).png",
    },
    {
      sliceCTScan: "4D Ultrasound",
      sVG1: "/SVG18.svg",
      testingCardBG: "/Card(4).png",
    },
    {
      sliceCTScan: "Digital X-Ray",
      sVG1: "/SVG16.svg",
      testingCardBG: "/Card(5).png",
    },
    {
      sliceCTScan: "Colour Doppler",
      sVG1: "/SVG18.svg",
      testingCardBG: "/Card(6).png",
    },
    {
      sliceCTScan: "Mammography",
      sVG1: "/SVG16.svg",
      testingCardBG: "/Card(7).png",
    },
    {
      sliceCTScan: "Echo & TMT Test",
      sVG1: "/SVG18.svg",
      testingCardBG: "/Card(8).png",
    },
  ]);

  return (
    <Box
      className={`self-stretch bg-web-white overflow-hidden flex flex-col items-start !pt-num-0 !pb-num-200 !pl-num-280 !pr-0 box-border shrink-0 max-w-full mq925:!pl-num-70 mq925:!pr-0 mq925:!pb-num-84 mq925:box-border mq1350:!pl-num-140 mq1350:!pr-0 mq1350:!pb-num-130 mq1350:box-border mq450:!pl-6 ${className} max-[450px]:!pl-0 max-[450px]:!pr-0 max-[450px]:!w-[390px] max-[450px]:!max-w-full max-[450px]:!mx-auto max-[450px]:!pb-[140px]`}
    >
      <Box className="self-stretch flex flex-col items-start !pt-num-140 !pb-num-0 !pl-num-0 !pr-num-0 box-border gap-[46px] max-w-full mq925:gap-[23px] mq925:!pt-[91px] mq925:box-border mq450:!pt-[59px] mq450:box-border max-[450px]:!gap-6 max-[450px]:!pt-[59px] max-[450px]:!pb-0 max-[450px]:!pl-0 max-[450px]:!pr-0 max-[450px]:!w-full max-[450px]:!max-w-full">
        <section className="self-stretch flex items-end flex-wrap content-end gap-[492px] max-w-full text-left text-num-16 text-web-woodsmoke font-lilex mq925:gap-[123px] mq1350:gap-[246px] mq450:gap-[61px] box-border max-[450px]:!gap-4 max-[450px]:!flex max-[450px]:!flex-col max-[450px]:!items-start max-[450px]:!px-5 max-[450px]:!box-border">
          <Box className="[filter:blur(0px)] flex flex-col items-start max-w-[490px] mq925:max-w-full max-[450px]:!max-w-full">
            <SectionBadge
              icon="/SVG.svg"
              label="WHAT WE DIAGNOSE"
              variant="dark"
            />
            <Box className="flex flex-col items-start !pt-6 !pb-num-0 !pl-num-0 !pr-num-2 text-num-48 font-stack-sans-text max-[450px]:!pt-4">
              <Typography
                className="!m-0 relative mq925:text-num-38 mq925:leading-num-52 mq450:text-num-29 mq450:leading-num-39 max-[450px]:!text-[28px] max-[450px]:!leading-[38px] max-[450px]:!tracking-[-0.42px] max-[450px]:!text-[#0B0C0F] max-[450px]:!w-[345px] max-[450px]:!max-w-full"
                variant="inherit"
                variantMapping={{ inherit: "h1" }}
                sx={{
                  fontWeight: "400",
                  lineHeight: "64.8px",
                  letterSpacing: "-0.72px",
                }}
              >
                <span className="whitespace-nowrap">Advanced Diagnostics</span>
                <br />
                <span className="whitespace-nowrap">for accurate treatment.</span>
              </Typography>
            </Box>
          </Box>
          <Box className="flex-1 flex flex-col items-start max-w-[378px] mq925:max-w-full mq925:w-full mq450:max-w-full mq450:w-full font-inter max-[450px]:!flex-none max-[450px]:!w-[350px] max-[450px]:!max-w-full">
            <Box className="self-stretch [filter:blur(0px)] flex flex-col items-start">
              <div className="w-[378px] mq925:w-full mq450:w-full relative leading-num-24 flex items-center max-[450px]:!w-[350px] max-[450px]:!max-w-full max-[450px]:!text-[16px] max-[450px]:!leading-[24px] max-[450px]:!text-[#0B0C0F] max-[450px]:!h-auto">
                State-of-the-art diagnostic technology and lab-grade testing to
                ensure every condition is identified with precision and treated
                with confidence.
              </div>
            </Box>
          </Box>
        </section>
        <Box className="self-stretch flex flex-col items-start justify-center relative isolate max-w-full">
          <section ref={scrollRef} className="w-[100vw] h-num-438 flex items-stretch overflow-x-auto no-scrollbar scroll-smooth !pt-num-0 !pb-num-0 !pl-num-0 !pr-num-0 box-border gap-6 shrink-0 text-left text-num-16 text-web-white font-inter mq925:h-auto mq450:!max-w-none max-[450px]:!h-[320px] max-[450px]:!pl-5 max-[450px]:!pr-5 max-[450px]:!w-[100vw] max-[450px]:!box-border">
            {diagnosticsItems.map((item, index) => (
              <Group2Of
                key={index}
                testingCardBG={item.testingCardBG}
                sVG1={item.sVG1}
                sliceCTScan={item.sliceCTScan}
              />
            ))}
            <div style={{ width: `${rightSpacer}px`, flexShrink: 0 }} />
          </section>
          <Box onClick={scrollLeft} className="w-11 h-[10.05%] min-h-[44px] !!m-[0 important] absolute top-[104.95%] right-[350px] bottom-[-15%] [backdrop-filter:blur(12px)] rounded-num-8 bg-web-gray-nurse overflow-hidden flex items-center justify-center z-[1] shrink-0 cursor-pointer hover:bg-web-white transition-colors max-[450px]:!absolute max-[450px]:!top-[344px] max-[450px]:!right-[76px] max-[450px]:!bottom-auto max-[450px]:!left-auto max-[450px]:!flex">
            <Box className="h-6 w-6 flex items-center justify-center">
              <img className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full" alt="" src="/SVG19.svg" />
            </Box>
          </Box>
          <Box onClick={scrollRight} className="w-11 h-[10.05%] min-h-[44px] !!m-[0 important] absolute top-[104.95%] right-[280px] bottom-[-15%] rounded-num-12 bg-web-gray-nurse overflow-hidden flex items-center justify-center z-[2] shrink-0 cursor-pointer hover:bg-web-white transition-colors max-[450px]:!absolute max-[450px]:!top-[344px] max-[450px]:!right-5 max-[450px]:!bottom-auto max-[450px]:!left-auto max-[450px]:!flex">
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
