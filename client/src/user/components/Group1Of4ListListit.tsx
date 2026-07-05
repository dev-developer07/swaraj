import { type FunctionComponent, useMemo, type CSSProperties } from "react";
import { Typography, Box } from "@mui/material";
import NavyButton from "./NavyButton";
import { useNavigate } from "react-router-dom";
import { getSpecialtySlug } from "../data/specialtyData";

export type Group1Of4ListListitType = {
  className?: string;
  background?: string;
  cardiology?: string;
  advancedHeartCareDiagnostics?: string;

  /** Style props */
  containerPadding?: CSSProperties["padding"];
  containerPadding1?: CSSProperties["padding"];
  advancedHeartCareWidth?: CSSProperties["width"];
};

const Group1Of4ListListit: FunctionComponent<Group1Of4ListListitType> = ({
  className = "",
  background,
  cardiology,
  advancedHeartCareDiagnostics,
  containerPadding,
  containerPadding1,
  advancedHeartCareWidth,
}) => {
  const navigate = useNavigate();

  const container1Style: CSSProperties = useMemo(() => {
    return {
      padding: containerPadding,
    };
  }, [containerPadding]);

  const container2Style: CSSProperties = useMemo(() => {
    return {
      padding: containerPadding1,
    };
  }, [containerPadding1]);

  const advancedHeartCareStyle: CSSProperties = useMemo(() => {
    return {
      width: advancedHeartCareWidth,
    };
  }, [advancedHeartCareWidth]);

  return (
    <Box
      onClick={() => {
        if (cardiology) {
          navigate(`/speciality/${getSpecialtySlug(cardiology)}`);
        }
      }}
      className={`w-[436px] group hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer rounded-num-24 bg-web-gray-nurse flex flex-col items-start !p-3 box-border max-w-num-436 shrink-0 text-center text-num-24 text-web-woodsmoke font-stack-sans-text mq450:max-w-full ${className}`}
    >
      <Box className="self-stretch rounded-num-16 overflow-hidden shrink-0">
        <img
          className="self-stretch w-full h-num-278 relative max-w-full group-hover:scale-105 transition-transform duration-500 ease-out shrink-0 object-cover"
          loading="lazy"
          alt=""
          src={background}
        />
      </Box>
      <Box className="self-stretch flex-1 flex flex-col items-start !pt-6 !pb-num-0 !pl-num-0 !pr-num-0">
        <Box className="self-stretch flex-1 rounded-num-16 bg-web-white flex flex-col items-start justify-between">
          <Box
            className="self-stretch flex-1 flex flex-col items-center justify-between !pt-num-38 !pb-num-38 !pl-num-28 !pr-num-22"
            style={container1Style}
          >
            <Box className="flex flex-col items-center gap-2">
              <Typography
                className="!m-0 relative shrink-0 mq450:text-num-19 mq450:leading-num-29"
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{
                  fontWeight: "400",
                  lineHeight: "36px",
                  letterSpacing: "-1.2px",
                }}
              >
                {cardiology}
              </Typography>
              <Box className="flex flex-col items-start !pt-2 !pb-num-0 !pl-num-0 !pr-num-0 shrink-0 text-num-16 text-web-emperor font-inter">
                <Box
                  className="flex flex-col items-center !pt-num-0 !pb-num-0 !pl-1 !pr-1"
                  style={container2Style}
                >
                  <div
                    className="w-[354px] relative leading-num-24 flex items-center justify-center"
                    style={advancedHeartCareStyle}
                  >
                    {advancedHeartCareDiagnostics}
                  </div>
                </Box>
              </Box>
            </Box>
            <Box className="flex flex-col items-start !pt-num-32 !pb-num-0 !pl-num-0 !pr-num-0 shrink-0 mt-auto">
              <NavyButton
                label="View SPECIALITY Details"
                variant="filled"
                endIcon="/container-3.png"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Group1Of4ListListit;
