import { type FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";

export type Section7Type = {
  className?: string;
};

const Section7: FunctionComponent<Section7Type> = ({ className = "" }) => {
  return (
    <footer
      className={`bg-web-white overflow-hidden flex flex-col items-start !pt-num-200 !pb-num-200 !pl-num-280 !pr-num-280 box-border max-w-full text-left text-num-16 text-web-woodsmoke font-inter mq925:!pt-num-84 mq925:!pb-num-84 mq925:!pl-num-70 mq925:!pr-num-70 mq925:box-border mq1350:!pt-num-130 mq1350:!pb-num-130 mq1350:!pl-num-140 mq1350:!pr-num-140 mq1350:box-border ${className}`}
    >
      <Box className="w-num-1360 flex flex-col items-start gap-6 max-w-full">
        <section className="self-stretch flex items-start !pt-num-0 !pb-6 !pl-num-0 !pr-num-0 gap-[982.2px] text-left text-num-18 text-web-woodsmoke font-inter mq925:gap-[246px] mq1350:gap-[491px] mq1825:flex-wrap mq450:gap-[123px]">
          <Box className="flex items-center">
            <img
              className="h-[82.3px] w-[111.7px] relative"
              loading="lazy"
              alt=""
              src="/1-922.svg"
            />
          </Box>
          <Box className="h-[69.6px] w-num-188_8 flex flex-col items-start !pt-[39.8px] !pb-num-0 !pl-num-0 !pr-num-0 box-border gap-[11px]">
            <Box className="!mt-[-40.8px] w-num-188_8 flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0 box-border shrink-0">
              <div className="relative leading-num-28_8">
                +91 (630) 555-0362
              </div>
            </Box>
            <Box className="w-num-188_8 flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0 box-border shrink-0">
              <div className="relative leading-num-28_8 shrink-0">
                swarajhospital@gmail.com
              </div>
            </Box>
          </Box>
        </section>
        <Box className="self-stretch h-0.5 relative border-web-mercury border-solid border-[1px] box-border" />
        <Box className="self-stretch flex items-start !pt-9 !pb-9 !pl-num-0 !pr-num-0 box-border gap-11 min-h-[616.98px] max-w-full mq925:gap-[22px] mq925:!pt-num-23 mq925:!pb-num-23 mq925:box-border mq1825:flex-wrap mq450:!pt-5 mq450:!pb-5 mq450:box-border">
          <Box className="w-[789px] flex flex-col items-start gap-2 max-w-full mq1825:flex-1 mq1825:min-w-full">
            <section className="self-stretch flex flex-col items-start !pt-num-32 !pb-num-0 !pl-num-0 !pr-num-0 text-left text-num-18 text-web-woodsmoke font-lilex">
              <Box className="self-stretch flex items-start gap-10 mq925:gap-5 mq1350:flex-wrap">
                <Box className="flex flex-col items-start gap-[11px]">
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-14 !pl-num-0 !pr-num-0 text-num-20">
                    <Box className="self-stretch flex flex-col items-start">
                      <Typography
                        className="!m-0 self-stretch relative uppercase mq450:text-num-16 mq450:leading-num-26"
                        variant="inherit"
                        variantMapping={{ inherit: "h3" }}
                        sx={{ fontWeight: "500", lineHeight: "32px" }}
                      >
                        Specialties
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0">
                    <div className="relative tracking-num--0_18 leading-num-28_8 uppercase font-medium">
                      general medicine
                    </div>
                  </Box>
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0">
                    <div className="relative tracking-num--0_18 leading-num-28_8 uppercase font-medium">
                      general surgery
                    </div>
                  </Box>
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0">
                    <div className="relative tracking-num--0_18 leading-num-28_8 uppercase font-medium">{`Obstetrics & Gynaecology`}</div>
                  </Box>
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0">
                    <div className="relative tracking-num--0_18 leading-num-28_8 uppercase font-medium">
                      {`Orthopaedics `}
                      <br />
                      {`& Joint Replacement`}
                    </div>
                  </Box>
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0">
                    <div className="relative tracking-num--0_18 leading-num-28_8 uppercase font-medium">{`Pediatrics & Neonatology`}</div>
                  </Box>
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0">
                    <div className="relative tracking-num--0_18 leading-num-28_8 uppercase font-medium">
                      Cardiology
                    </div>
                  </Box>
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0">
                    <div className="relative tracking-num--0_18 leading-num-28_8 uppercase font-medium">
                      {`minimal access `}
                      <br />
                      {`& laparoscopic surgery`}
                    </div>
                  </Box>
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0">
                    <div className="relative tracking-num--0_18 leading-num-28_8 uppercase font-medium">
                      ophthalmology
                    </div>
                  </Box>
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0">
                    <div className="relative tracking-num--0_18 leading-num-28_8 uppercase font-medium">
                      neurology
                    </div>
                  </Box>
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0">
                    <div className="relative tracking-num--0_18 leading-num-28_8 uppercase font-medium">
                      urology
                    </div>
                  </Box>
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0">
                    <div className="relative tracking-num--0_18 leading-num-28_8 uppercase font-medium">{`dental & maxillofacial surgery`}</div>
                  </Box>
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0">
                    <div className="relative tracking-num--0_18 leading-num-28_8 uppercase font-medium">
                      gastroenterology
                    </div>
                  </Box>
                </Box>
                <Box className="flex flex-col items-start !pt-num-0 !pb-[40.8px] !pl-num-0 !pr-num-0 box-border gap-[11px] min-w-[159.31px] mq450:!pb-[27px] mq450:box-border">
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-14 !pl-num-0 !pr-num-0 text-num-20">
                    <Box className="self-stretch flex flex-col items-start">
                      <Typography
                        className="!m-0 self-stretch relative uppercase mq450:text-num-16 mq450:leading-num-26"
                        variant="inherit"
                        variantMapping={{ inherit: "h3" }}
                        sx={{ fontWeight: "500", lineHeight: "32px" }}
                      >
                        Services
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0">
                    <div className="relative tracking-num--0_18 leading-num-28_8 uppercase font-medium">
                      24/7 emergency
                    </div>
                  </Box>
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0">
                    <div className="relative tracking-num--0_18 leading-num-28_8 uppercase font-medium">
                      icu
                    </div>
                  </Box>
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0">
                    <div className="relative tracking-num--0_18 leading-num-28_8 uppercase font-medium">
                      stepdown icu
                    </div>
                  </Box>
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0">
                    <div className="relative tracking-num--0_18 leading-num-28_8 uppercase font-medium">
                      nicu
                    </div>
                  </Box>
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0">
                    <div className="relative tracking-num--0_18 leading-num-28_8 uppercase font-medium">
                      modular ot
                    </div>
                  </Box>
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0">
                    <div className="relative tracking-num--0_18 leading-num-28_8 uppercase font-medium">
                      hdu
                    </div>
                  </Box>
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0">
                    <div className="relative tracking-num--0_18 leading-num-28_8 uppercase font-medium">
                      24/7 ambulance
                    </div>
                  </Box>
                </Box>
                <Box className="flex flex-col items-start gap-[11px] min-w-[159.31px]">
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-14 !pl-num-0 !pr-num-0 text-num-20">
                    <Box className="self-stretch flex flex-col items-start">
                      <Typography
                        className="!m-0 self-stretch relative uppercase mq450:text-num-16 mq450:leading-num-26"
                        variant="inherit"
                        variantMapping={{ inherit: "h3" }}
                        sx={{ fontWeight: "500", lineHeight: "32px" }}
                      >
                        Diagnostics
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0">
                    <div className="relative tracking-num--0_18 leading-num-28_8 uppercase font-medium">
                      Pathology
                    </div>
                  </Box>
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0">
                    <div className="relative tracking-num--0_18 leading-num-28_8 uppercase font-medium">
                      Radiology
                    </div>
                  </Box>
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0">
                    <div className="relative tracking-num--0_18 leading-num-28_8 uppercase font-medium">
                      1.5 tesla mri
                    </div>
                  </Box>
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0">
                    <div className="relative tracking-num--0_18 leading-num-28_8 uppercase font-medium">
                      64 slice ct
                    </div>
                  </Box>
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0">
                    <div className="relative tracking-num--0_18 leading-num-28_8 uppercase font-medium">
                      4d ultrasound
                    </div>
                  </Box>
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0">
                    <div className="relative tracking-num--0_18 leading-num-28_8 uppercase font-medium">
                      digital x-ray
                    </div>
                  </Box>
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0">
                    <div className="relative tracking-num--0_18 leading-num-28_8 uppercase font-medium">
                      color doppler
                    </div>
                  </Box>
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0">
                    <div className="relative tracking-num--0_18 leading-num-28_8 uppercase font-medium">
                      mammography
                    </div>
                  </Box>
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0">
                    <div className="relative tracking-num--0_18 leading-num-28_8 uppercase font-medium">{`echo & tmt test`}</div>
                  </Box>
                </Box>
              </Box>
            </section>
            <Box className="flex flex-col items-start !pt-[60px] !pb-num-0 !pl-num-0 !pr-num-0">
              <Box className="flex items-center justify-center gap-4 mq450:flex-wrap">
                <Box className="h-num-60 w-[60px] rounded-num-60 bg-web-white border-web-mercury border-solid border-[1px] box-border flex items-center justify-center">
                  <Box className="h-7 w-7 flex flex-col items-start justify-center">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                      loading="lazy"
                      alt=""
                      src="/SVG21.svg"
                    />
                  </Box>
                </Box>
                <Box className="h-num-60 w-[60px] rounded-num-60 bg-web-white border-web-mercury border-solid border-[1px] box-border flex items-center justify-center">
                  <Box className="h-7 w-7 flex flex-col items-start justify-center">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                      loading="lazy"
                      alt=""
                      src="/SVG23.svg"
                    />
                  </Box>
                </Box>
                <Box className="h-num-60 w-[60px] rounded-num-60 bg-web-white border-web-mercury border-solid border-[1px] box-border flex items-center justify-center">
                  <Box className="h-7 w-7 flex flex-col items-start justify-center">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                      loading="lazy"
                      alt=""
                      src="/SVG24.svg"
                    />
                  </Box>
                </Box>
                <Box className="h-num-60 w-[60px] rounded-num-60 bg-web-white border-web-mercury border-solid border-[1px] box-border flex items-center justify-center">
                  <Box className="h-7 w-7 flex flex-col items-start justify-center">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                      loading="lazy"
                      alt=""
                      src="/SVG26.svg"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <section className="flex-1 flex flex-col items-start gap-[60px] min-w-[341px] max-w-[525px] text-left text-[36px] text-web-woodsmoke font-stack-sans-text mq925:gap-[30px] mq925:max-w-full mq1350:min-w-full">
            <Box className="w-[525px] rounded-num-12 bg-web-gray-nurse hidden flex-col items-start !pt-num-23 !pb-num-39 !pl-6 !pr-6 box-border gap-[60px] shrink-0">
              <Box className="self-stretch flex flex-col items-start gap-3">
                <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0">
                  <div className="self-stretch relative tracking-[-1px] leading-[46.8px] mq925:text-num-29 mq925:leading-[37px] mq450:text-num-22 mq450:leading-7">
                    Stay Informed with Oralic
                  </div>
                </Box>
                <Box className="self-stretch flex flex-col items-start text-num-16 text-web-emperor font-inter">
                  <div className="self-stretch relative leading-num-24">
                    Join our community for exclusive updates on the Oralic
                    <br />
                    standard of care and clinical innovations.
                  </div>
                </Box>
              </Box>
              <Box className="self-stretch flex items-center !pt-num-0 !pb-num-0 !pl-num-0 !pr-num-29 gap-3 text-num-16 text-web-rolling-stone font-inter mq925:flex-wrap">
                <Box className="h-[50px] w-[300px] rounded-num-12 bg-web-white border-web-mercury border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-start !pt-num-14 !pb-num-14 !pl-3 !pr-3">
                  <Box className="self-stretch overflow-hidden flex flex-col items-start">
                    <div className="self-stretch relative">
                      Your email address...
                    </div>
                  </Box>
                </Box>
                <Box className="rounded-num-8 bg-web-cloud-burst overflow-hidden flex flex-col items-center !pt-3 !pb-3 !pl-5 !pr-5 text-center text-web-white font-lilex">
                  <div className="relative leading-num-24">SUBMIT NOW</div>
                </Box>
              </Box>
            </Box>
            <Box className="self-stretch flex flex-col items-start justify-between gap-0 shrink-0 text-num-18 font-inter">
              <Box className="flex flex-col items-start !pt-num-23 !pb-num-0 !pl-num-0 !pr-num-0">
                <Box className="flex flex-col items-start gap-[15px]">
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0">
                    <div className="relative leading-num-28_8">
                      +91 (630) 555-0362
                    </div>
                  </Box>
                  <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0_8 !pl-num-0 !pr-num-0">
                    <div className="relative leading-num-28_8">
                      swarajhospital@gmail.com
                    </div>
                  </Box>
                </Box>
              </Box>
              <Box className="self-stretch h-[50px] flex flex-col items-start !pt-6 !pb-6 !pl-num-0 !pr-num-0 box-border">
                <Box className="self-stretch h-0.5 relative border-web-mercury border-solid border-[1px] box-border" />
              </Box>
              <Box className="self-stretch flex items-end justify-between gap-5 mq925:flex-wrap mq925:gap-5">
                <Box className="h-[57.6px] flex-1 flex items-end !pt-num-0 !pb-num-0_7 !pl-num-0 !pr-num-0 box-border min-w-[188px] max-w-[290px]">
                  <div className="h-[58px] w-[271.9px] relative leading-num-28_8 flex items-center shrink-0">
                    Shri Jyoti Nagar, Patnagarh Road, Balangir
                  </div>
                </Box>
                <Box className="border-web-woodsmoke border-solid border-b-[1px] box-border flex items-center !pt-num-0 !pb-num-2 !pl-num-0 !pr-num-0 gap-2 max-w-[525px] text-num-16 font-lilex mq925:max-w-full">
                  <Box className="flex flex-col items-start">
                    <div className="relative tracking-[-0.8px] leading-num-24 uppercase font-semibold">
                      View on map
                    </div>
                  </Box>
                  <Box className="flex flex-col items-start !pt-px !pb-[7px] !pl-num-0 !pr-num-0">
                    <img className="w-4 h-4 relative" alt="" src="/SVG27.svg" />
                  </Box>
                </Box>
              </Box>
            </Box>
          </section>
        </Box>
        <Box className="self-stretch h-0.5 relative border-web-mercury border-solid border-[1px] box-border" />
        <Box className="self-stretch flex items-center justify-between !pt-num-0 !pb-6 !pl-num-0 !pr-num-0 box-border gap-5 max-w-full mq1350:flex-wrap mq1350:gap-5">
          <Box className="flex flex-col items-start max-w-full">
            <div className="relative leading-num-24">
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "span" }}
                sx={{ lineHeight: "24px" }}
              >{`Copyright © Swaraj | Designed By `}</Typography>
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "b" }}
                sx={{ lineHeight: "24px" }}
              >
                UnderGrads
              </Typography>
            </div>
          </Box>
          <Box className="flex items-center gap-2.5 max-w-full font-lilex mq450:flex-wrap">
            <Box className="flex flex-col items-start">
              <div className="relative tracking-[-0.16px] leading-num-24 uppercase font-medium">{`Terms & Conditions`}</div>
            </Box>
            <Box className="h-5 w-px relative bg-web-mercury mq450:w-full mq450:h-px" />
            <Box className="flex flex-col items-start">
              <div className="relative tracking-[-0.16px] leading-num-24 uppercase font-medium">
                Privacy Policy
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};

export default Section7;
