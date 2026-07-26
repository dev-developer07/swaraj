import { type FunctionComponent, useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import SectionBadge from "./SectionBadge";
import ScrollReveal from "./ScrollReveal";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const totalDistance = viewportHeight + rect.height;
        const progress = (viewportHeight - rect.top) / totalDistance;
        // Shift translateY from -50px to 50px
        setOffsetY((progress - 0.5) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`flex items-start !pt-num-0 !pb-[50px] !pl-num-0 !pr-num-0 box-border max-w-full text-left text-num-16 text-web-woodsmoke font-lilex mq925:!pb-num-21 mq925:box-border mq450:!pb-6 mq450:box-border mq1350:!pb-num-32 mq1350:box-border ${className}`}
    >
      <Box className="flex flex-col items-start max-w-full">
        <Box className="w-[1920px] h-[980px] relative bg-web-white max-w-full overflow-hidden mq925:h-auto mq925:py-12 mq450:h-auto mq450:py-10">
          <Box className="absolute top-[120px] left-[240px] mq1825:left-[100px] mq1350:left-[40px] mq1825:top-[80px] mq1350:top-[60px] h-auto flex flex-col items-start max-w-full shrink-0 mq925:relative mq925:top-0 mq925:left-0 mq925:w-full mq925:px-6 mq450:relative mq450:top-0 mq450:left-0 mq450:w-full mq450:px-4">
            <ScrollReveal direction="left">
              <Box className="w-[690px] mq1825:w-[580px] mq1350:w-[480px] flex flex-col items-start !pt-3 !pb-num-0 !pl-num-0 !pr-num-0 box-border gap-5 max-w-[690px] mq925:max-w-full mq925:w-full mq450:max-w-full mq450:w-full">
              <SectionBadge
                icon="/SVG.svg"
                label="our scope"
                variant="dark"
              />
              <Box className="self-stretch flex flex-col items-start !pt-1 !pb-num-0 !pl-num-0 !pr-num-0 text-num-24 font-stack-sans-text">
                <Typography
                  className="!m-0 self-stretch relative mq450:text-num-19 mq450:leading-num-29"
                  variant="inherit"
                  variantMapping={{ inherit: "h3" }}
                  sx={{
                    fontWeight: "400",
                    lineHeight: "36px",
                    letterSpacing: "-1.2px",
                  }}
                >
                  The Scope of Our Care
                </Typography>
              </Box>
              <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-2 !pl-num-0 !pr-num-0 text-num-20 text-web-emperor font-inter">
                <div className="self-stretch relative leading-num-32 mq450:text-num-16 mq450:leading-num-26">
                  Every patient we treat is a balance of clinical precision and
                  human compassion. By addressing the root cause with advanced
                  diagnostics and specialist expertise, we ensure long-term
                  health and recovery for every family we serve.
                </div>
              </Box>
              <Box className="self-stretch h-0.5 relative border-web-mercury border-solid border-[1px] box-border" />
              <section className="self-stretch border-web-mercury border-solid border-b-[1px] flex flex-col items-start !pt-2 !pb-num-28 !pl-num-0 !pr-num-0 gap-4 text-left text-num-14 text-web-emperor font-lilex">
                <Box className="self-stretch flex flex-col items-start">
                  <div className="self-stretch relative leading-num-24 uppercase font-medium">
                    Perks and Benefits:
                  </div>
                </Box>
                <Box className="self-stretch flex flex-col items-start gap-4 text-num-18 text-web-woodsmoke font-inter">
                  <Box className="self-stretch flex items-start gap-4">
                    <Box className="h-7 w-7 flex flex-col items-start justify-start pt-[3px] shrink-0">
                      <img
                        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/SVG5.svg"
                      />
                    </Box>
                    <Box className="flex items-start justify-start">
                      <div className="w-full max-w-[641.1px] relative leading-num-28_8 flex items-start shrink-0 mq925:!w-full mq925:shrink mq450:!w-full mq450:shrink">
                        <span className="w-full">
                          <Typography
                            variant="inherit"
                            variantMapping={{ inherit: "span" }}
                            sx={{ fontWeight: "500", lineHeight: "28.8px" }}
                          >
                            ADVANCED DIAGNOSTICS
                          </Typography>
                          <Typography
                            variant="inherit"
                            variantMapping={{ inherit: "span" }}
                            sx={{ lineHeight: "28.8px" }}
                          >
                            {" "}
                            — 1.5 Tesla MRI, 64-Slice CT, 4D Ultrasound and
                            Digital X-Ray under one roof.
                          </Typography>
                        </span>
                      </div>
                    </Box>
                  </Box>
                  <Box className="self-stretch flex items-start gap-4">
                    <Box className="h-7 w-7 flex flex-col items-start justify-start pt-[3px] shrink-0">
                      <img
                        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/SVG5.svg"
                      />
                    </Box>
                    <Box className="flex items-start justify-start">
                      <div className="w-full max-w-[592.1px] relative leading-num-28_8 flex items-start shrink-0 mq925:!w-full mq925:shrink mq450:!w-full mq450:shrink">
                        <span className="w-full">
                          <Typography
                            variant="inherit"
                            variantMapping={{ inherit: "span" }}
                            sx={{ fontWeight: "500", lineHeight: "28.8px" }}
                          >
                            SPECIALIST-LED CARE
                          </Typography>
                          <Typography
                            variant="inherit"
                            variantMapping={{ inherit: "span" }}
                            sx={{ lineHeight: "28.8px" }}
                          >
                            {" "}
                            — 13+ specialities with experienced doctors across
                            every major discipline.
                          </Typography>
                        </span>
                      </div>
                    </Box>
                  </Box>
                  <Box className="self-stretch flex items-start gap-4">
                    <Box className="h-7 w-7 flex flex-col items-start justify-start pt-[3px] shrink-0">
                      <img
                        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/SVG5.svg"
                      />
                    </Box>
                    <Box className="flex items-start justify-start">
                      <div className="w-full max-w-[639.1px] relative leading-num-28_8 flex items-start shrink-0 mq925:!w-full mq925:shrink mq450:!w-full mq450:shrink">
                        <span className="w-full">
                          <Typography
                            variant="inherit"
                            variantMapping={{ inherit: "span" }}
                            sx={{ fontWeight: "500", lineHeight: "28.8px" }}
                          >
                            ROUND-THE-CLOCK EMERGENCY
                          </Typography>
                          <Typography
                            variant="inherit"
                            variantMapping={{ inherit: "span" }}
                            sx={{ lineHeight: "28.8px" }}
                          >
                            {" "}
                            — 24/7 emergency department with ICU on Wheels
                            ambulance support.
                          </Typography>
                        </span>
                      </div>
                    </Box>
                  </Box>
                  <Box className="self-stretch flex items-start gap-4">
                    <Box className="h-7 w-7 flex flex-col items-start justify-start pt-[3px] shrink-0">
                      <img
                        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/SVG5.svg"
                      />
                    </Box>
                    <Box className="flex items-start justify-start">
                      <div className="w-full max-w-[589.1px] relative leading-num-28_8 flex items-start shrink-0 mq925:!w-full mq925:shrink mq450:!w-full mq450:shrink">
                        <span className="w-full">
                          <Typography
                            variant="inherit"
                            variantMapping={{ inherit: "span" }}
                            sx={{ fontWeight: "500", lineHeight: "28.8px" }}
                          >
                            PATIENT DIGNITY FIRST
                          </Typography>
                          <Typography
                            variant="inherit"
                            variantMapping={{ inherit: "span" }}
                            sx={{ lineHeight: "28.8px" }}
                          >
                            {" "}
                            — Every consultation, every procedure, designed
                            around the person not the condition.
                          </Typography>
                        </span>
                      </div>
                    </Box>
                  </Box>
                  <Box className="self-stretch flex items-start gap-4">
                    <Box className="h-7 w-7 flex flex-col items-start justify-start pt-[3px] shrink-0">
                      <img
                        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/SVG5.svg"
                      />
                    </Box>
                    <Box className="flex items-start justify-start">
                      <div className="w-full max-w-[621.1px] relative leading-num-28_8 flex items-start shrink-0 mq925:!w-full mq925:shrink mq450:!w-full mq450:shrink">
                        <span className="w-full">
                          <Typography
                            variant="inherit"
                            variantMapping={{ inherit: "span" }}
                            sx={{ fontWeight: "500", lineHeight: "28.8px" }}
                          >
                            RESEARCH-BACKED TREATMENT
                          </Typography>
                          <Typography
                            variant="inherit"
                            variantMapping={{ inherit: "span" }}
                            sx={{ lineHeight: "28.8px" }}
                          >
                            {" "}
                            — NABH pre-accredited protocols ensuring safety,
                            quality and consistency.
                          </Typography>
                        </span>
                      </div>
                    </Box>
                  </Box>
                </Box>
              </section>
              {/* Mobile-only / Tablet-only surgeon image */}
              <Box className="hidden mq925:block mq450:block w-full mt-6">
                <img
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                  src="/Container11@2x.png"
                  alt="Swaraj Hospital Scope of Care"
                  loading="lazy"
                />
              </Box>
              </Box>
            </ScrollReveal>
          </Box>
          <Box className="absolute w-[calc(100%_-_1170px)] top-[calc(50%_-_326.5px)] right-[240px] left-[930px] h-[733px] flex flex-col items-start !pt-num-0 !pb-num-0 !pl-num-40 !pr-num-40 box-border max-w-num-1440 shrink-0 mq1825:max-w-full" />
          <img
            className="absolute h-[120%] top-[-10%] right-[0px] w-[640px] mq1825:w-[520px] mq1350:w-[420px] object-cover shrink-0 mq925:hidden mq450:hidden"
            style={{
              transform: `translateY(${offsetY}px)`,
              willChange: "transform",
            }}
            loading="lazy"
            alt=""
            src="/Container11@2x.png"
          />
        </Box>
      </Box>
    </section>
  );
};

export default FrameComponent1;
