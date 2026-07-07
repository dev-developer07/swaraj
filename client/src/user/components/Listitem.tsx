import { type FunctionComponent, useMemo, type CSSProperties, useState, useEffect } from "react";
import { Box } from "@mui/material";

export type ListitemType = {
  className?: string;
  container?: string;
  dRAnkitPadhi?: string;
  cardiology?: string;

  /** Style props */
  listitemGridColumn?: CSSProperties["gridColumn"];
  listitemWidth?: CSSProperties["width"];
  linkWidth?: CSSProperties["width"];
  linkAlignSelf?: CSSProperties["alignSelf"];
  containerJustifyContent?: CSSProperties["justifyContent"];
  containerGap?: CSSProperties["gap"];
};

const Listitem: FunctionComponent<ListitemType> = ({
  className = "",
  container,
  dRAnkitPadhi,
  cardiology,
  listitemGridColumn,
  listitemWidth,
  linkWidth,
  linkAlignSelf,
  containerJustifyContent,
  containerGap,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const listitemStyle: CSSProperties = useMemo(() => {
    if (isMobile) {
      return {
        gridColumn: "auto",
        gridRow: "auto",
        width: "100%",
      };
    }
    return {
      gridColumn: listitemGridColumn,
      width: listitemWidth,
    };
  }, [listitemGridColumn, listitemWidth, isMobile]);

  const linkStyle: CSSProperties = useMemo(() => {
    if (isMobile) {
      return {
        width: "100%",
        alignSelf: "stretch",
      };
    }
    return {
      width: linkWidth,
      alignSelf: linkAlignSelf,
    };
  }, [linkWidth, linkAlignSelf, isMobile]);

  const container6Style: CSSProperties = useMemo(() => {
    if (isMobile) {
      return {
        justifyContent: "space-between",
        gap: "20px",
      };
    }
    return {
      justifyContent: containerJustifyContent,
      gap: containerGap,
    };
  }, [containerJustifyContent, containerGap, isMobile]);

  return (
    <Box
      className={`flex flex-col items-start !pt-num-10 !pb-num-0 !pl-num-0 !pr-num-0 col-[1] row-[1] mq925:col-auto mq925:row-auto mq450:col-auto mq450:row-auto shrink-0 text-left text-num-16 text-web-woodsmoke font-inter ${className}`}
      style={listitemStyle}
    >
      <Box
        className="w-num-322_7 mq925:w-full mq450:w-full rounded-num-16 bg-web-white overflow-hidden flex flex-col items-start !p-3 box-border gap-5"
        style={linkStyle}
      >
        <Box
          className="self-stretch flex items-start justify-between gap-5"
          style={container6Style}
        >
          <Box className="overflow-hidden flex items-center justify-center !p-2">
            <Box className="overflow-hidden flex flex-col items-center justify-center max-w-num-1920">
              <img
                className="w-2 h-2 relative object-cover"
                alt=""
                src="/699f6877b8f1c6d2edfe4bd7-button-20ball-svg.png"
              />
            </Box>
          </Box>
          <img
            className="h-20 w-20 rounded-num-4 object-cover"
            loading="lazy"
            alt=""
            src={container}
          />
        </Box>
        <Box className="self-stretch flex flex-col items-start gap-1">
          <Box className="self-stretch overflow-hidden flex flex-col items-start">
            <div className="self-stretch relative leading-num-24 uppercase font-medium">
              {dRAnkitPadhi}
            </div>
          </Box>
          <Box className="self-stretch flex flex-col items-start text-web-emperor">
            <div className="self-stretch relative leading-num-24">
              {cardiology}
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Listitem;
