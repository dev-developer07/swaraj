import { type FunctionComponent, useState } from "react";
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
      container: "/Container5@2x.png",
      dRAnkitPadhi: "DR. Ankit Padhi",
      cardiology: "Cardiology",
      listitemGridColumn: "1" as const,
      listitemWidth: undefined,
      linkWidth: "322.7px" as const,
      linkAlignSelf: undefined,
      containerJustifyContent: "space-between" as const,
      containerGap: "20px" as const,
    },
    {
      container: "/Container8@2x.png",
      dRAnkitPadhi: "Dr. Suraj Samal",
      cardiology: "Neurology",
      listitemGridColumn: "2" as const,
      listitemWidth: "322.7px" as const,
      linkWidth: "unset" as const,
      linkAlignSelf: "stretch" as const,
      containerJustifyContent: "unset" as const,
      containerGap: "194.7px" as const,
    },
    {
      container: "/Container6@2x.png",
      dRAnkitPadhi: "DR. Priyanka Patra",
      cardiology: "Obstetrics & Gynaecology",
      listitemGridColumn: "3" as const,
      listitemWidth: "322.7px" as const,
      linkWidth: "unset" as const,
      linkAlignSelf: "stretch" as const,
      containerJustifyContent: "unset" as const,
      containerGap: "194.6px" as const,
    },
  ]);
  return (
    <Box
      className={`w-[1400px] flex flex-col items-center !pt-num-0 !pb-num-0 !pl-5 !pr-5 box-border gap-[34px] max-w-full shrink-0 mq925:gap-[17px] ${className}`}
    >
      <section className="w-[599px] flex flex-col items-center justify-center max-w-num-599 text-center text-num-16 text-web-woodsmoke font-lilex mq925:max-w-full">
        <SectionBadge
          icon="/SVG.svg"
          label="since 2010"
          variant="light"
        />
        <Box className="flex flex-col items-start !pt-6 !pb-num-0 !pl-num-0 !pr-num-0 box-border max-w-num-500 text-num-48 font-stack-sans-text mq925:max-w-full">
          <Box className="w-[500px] h-num-129_6 [filter:blur(0px)] overflow-hidden shrink-0 flex items-end !pt-num-0 !pb-num-0_2 !pl-[59px] !pr-[58px] box-border mq925:!pl-num-29 mq925:!pr-num-29 mq925:box-border">
            <Typography
              className="!m-0 h-num-130 w-[382px] relative inline-block mq925:text-num-38 mq925:leading-num-52 mq450:text-num-29 mq450:leading-num-39"
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
          <Box className="[filter:blur(0px)] overflow-hidden flex flex-col items-center !pt-num-0 !pb-num-0 !pl-num-5 !pr-num-5">
            <div className="w-num-589 relative leading-num-24 flex items-center justify-center">
              A multidisciplinary team dedicated to precision and compassion.
              Bridging advanced medical technology with patient-centred care for
              every family in western Odisha.
            </div>
          </Box>
        </Box>
      </section>
      <section className="w-[992px] flex flex-col items-center justify-center max-w-[992px] mq1350:max-w-full">
        <Box className="self-stretch flex flex-col items-start !pt-5 !pb-num-0 !pl-num-0 !pr-num-0">
          <div className="self-stretch h-num-182 grid box-border grid-cols-[repeat(auto-fit,_minmax(244px,_1fr))] grid-rows-[182px] gap-3">
            {listitemItems.map((item, index) => (
              <Listitem
                key={index}
                container={item.container}
                dRAnkitPadhi={item.dRAnkitPadhi}
                cardiology={item.cardiology}
                listitemGridColumn={item.listitemGridColumn}
                listitemWidth={item.listitemWidth}
                linkWidth={item.linkWidth}
                linkAlignSelf={item.linkAlignSelf}
                containerJustifyContent={item.containerJustifyContent}
                containerGap={item.containerGap}
              />
            ))}
          </div>
        </Box>
        <Box className="self-stretch flex flex-col items-start !pt-num-10 !pb-num-0 !pl-num-0 !pr-num-0 box-border max-w-full !mt-[-8px] relative">
          <Box className="self-stretch flex items-center justify-center flex-wrap content-center gap-3 max-w-full">
            <Listitem1
              container="/Container9@2x.png"
              dRAnuradhaAcharya="DR. Anuradha Acharya"
              orthopaedicsJointReplacement={`Orthopaedics & Joint Replacement`}
            />
            <Listitem1
              container="/Container10@2x.png"
              dRAnuradhaAcharya="DR. Barsha Dash"
              orthopaedicsJointReplacement={`Pediatrics & Neonatology`}
            />
          </Box>
        </Box>
      </section>
      <Box className="self-stretch flex items-center justify-center">
        <NavyButton
          label="MEET THE TEAM"
          variant="filled"
          endIcon="/69959585702a1a429f59d932-frame-svg.png"
        />
      </Box>
    </Box>
  );
};

export default Container1;
