import { type FunctionComponent } from "react";

export type Background1Type = {
  className?: string;
  icon?: string;
};

const ITEMS = [
  "NABH PRE-ACCREDITED",
  "99% PATIENT SATISFACTION",
  "15+ YEARS OF EXPERTISE"
];

const Background1: FunctionComponent<Background1Type> = ({
  className = "",
  icon = "/Vector(2).png",
}) => {
  return (
    <section className={`self-stretch bg-web-gothic flex flex-col items-center max-w-full text-left text-num-16 text-web-woodsmoke font-inter ${className}`}>
      <div className="w-full h-[60px] relative bg-transparent overflow-hidden shrink-0">
        <div className="absolute top-[16px] left-0 flex items-center h-7 w-max animate-marquee-50">
          {[...Array(4)].map((_, groupIndex) => (
            <div
              key={groupIndex}
              className="flex items-center gap-[60px] shrink-0 whitespace-nowrap flex-nowrap"
              style={{ paddingRight: "60px" }}
            >
              {ITEMS.map((text, index) => (
                <div key={index} className="flex items-center gap-2.5 shrink-0">
                  <img
                    className={icon === "/SVG4.svg" ? "w-7 h-7 relative object-contain shrink-0" : "w-[19px] h-[21px] relative object-contain shrink-0"}
                    loading="lazy"
                    alt=""
                    src={icon}
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
  );
};

export default Background1;
