import { type FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Listitem from "./Listitem";
import Listitem1 from "./Listitem1";
import SectionBadge from "./SectionBadge";
import NavyButton from "./NavyButton";

export type Container1Type = {
  className?: string;
};

const Container1: FunctionComponent<Container1Type> = ({ className = "" }) => {
  const [listitemItems] = useState([
    {
      container: "/doctors/dr-sujnanendra-mishra.jpeg",
      dRAnkitPadhi: "DR. Sujnanendra Mishra",
      cardiology: "Obstetrics & Gynaecology",
    },
    {
      container: "/doctors/dr-bikramaditya-padhi.jpeg",
      dRAnkitPadhi: "DR. Bikramaditya Padhi",
      cardiology: "Cardiology",
    },
    {
      container: "/doctors/dr-rajat-bral.jpeg",
      dRAnkitPadhi: "DR. Rajat Bral",
      cardiology: "General Medicine",
    },
    {
      container: "/doctors/dr-swadhin-ku-mishra.jpeg",
      dRAnkitPadhi: "DR. Swadhin Ku. Mishra",
      cardiology: "Obstetrics & Gynaecology",
    },
    {
      container: "/doctors/dr-sabyasachi-swain.jpeg",
      dRAnkitPadhi: "DR. Sabyasachi Swain",
      cardiology: "Orthopaedics & Joint Replacement",
    },
    {
      container: "/doctors/dr-anil-ku-patra.png",
      dRAnkitPadhi: "DR. Anil Ku. Patra",
      cardiology: "Neurology",
    },
  ]);
  return (
    <Box
      className={`w-full max-w-[1400px] flex flex-col items-center !pt-num-0 !pb-num-0 !pl-5 !pr-5 box-border gap-[34px] max-w-full shrink-0 mq925:gap-[17px] ${className}`}
    >
      <section className="w-full max-w-num-599 flex flex-col items-center justify-center text-center text-num-16 text-web-woodsmoke font-lilex">
        <SectionBadge
          icon="/SVG.svg"
          label="since 2010"
          variant="light"
        />
        <Box className="flex flex-col items-start !pt-6 !pb-num-0 !pl-num-0 !pr-num-0 box-border max-w-num-500 text-num-48 font-stack-sans-text mq925:max-w-full mq450:max-w-full max-[450px]:!max-w-full max-[450px]:!w-full max-[450px]:!items-center">
          <Box className="w-full max-w-[500px] mq925:h-auto mq450:h-auto h-num-129_6 [filter:blur(0px)] overflow-hidden shrink-0 flex items-end !pt-num-0 !pb-num-0_2 !pl-[59px] !pr-[58px] box-border mq925:!pl-num-29 mq925:!pr-num-29 mq925:box-border mq450:!pl-4 mq450:!pr-4 mq450:box-border max-[450px]:!h-auto max-[450px]:!pl-0 max-[450px]:!pr-0 max-[450px]:!justify-center max-[450px]:!w-full">
            <Typography
              className="!m-0 h-auto w-full max-w-[382px] relative inline-block mq925:text-num-38 mq925:leading-num-52 mq450:text-num-29 mq450:leading-num-39 max-[450px]:!text-[28px] max-[450px]:!leading-[38px] max-[450px]:!tracking-[-0.42px] max-[450px]:!text-[#0B0C0F] max-[450px]:!flex max-[450px]:!items-center max-[450px]:!justify-center max-[450px]:!text-center max-[450px]:!w-[319px] max-[450px]:!max-w-full"
              variant="inherit"
              variantMapping={{ inherit: "h1" }}
              sx={{
                fontWeight: "400",
                lineHeight: "64.8px",
                letterSpacing: "-0.72px",
              }}
            >
              Helping Hands.
              <br />
              Specialist Minds.
            </Typography>
          </Box>
        </Box>
        <Box className="flex flex-col items-start !pt-4 !pb-num-0 !pl-num-0 !pr-num-0 font-inter">
          <Box className="[filter:blur(0px)] overflow-hidden flex flex-col items-center !pt-num-0 !pb-num-0 !pl-num-5 !pr-num-5 mq925:!pl-4 mq925:!pr-4 mq450:!pl-4 mq450:!pr-4">
            <div className="w-num-589 mq925:w-full mq450:w-full max-w-full relative leading-num-24 text-center">
              A multidisciplinary team dedicated to precision and compassion.
              Bridging advanced medical technology with patient-centred care for
              every family in western Odisha.
            </div>
          </Box>
        </Box>
      </section>
      <section className="w-full max-w-[992px] flex flex-col items-center justify-center mq1350:max-w-full">
        <Box className="self-stretch flex flex-col items-start !pt-5 !pb-num-0 !pl-num-0 !pr-num-0">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {listitemItems.map((item, index) => (
              <Listitem
                key={index}
                container={item.container}
                dRAnkitPadhi={item.dRAnkitPadhi}
                cardiology={item.cardiology}
              />
            ))}
          </div>
        </Box>
      </section>
      <Box className="self-stretch flex items-center justify-center">
        <Link to="/meet-the-team" className="no-underline">
          <NavyButton
            label="MEET THE TEAM"
            variant="filled"
            endIcon="/69959585702a1a429f59d932-frame-svg.png"
          />
        </Link>
      </Box>
    </Box>
  );
};

export default Container1;
