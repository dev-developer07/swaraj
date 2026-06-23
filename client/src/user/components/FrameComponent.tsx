import { type FunctionComponent } from "react";

import Section from "./Section";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex items-start !pt-[50px] !pb-[50px] !pl-num-0 !pr-num-0 box-border max-w-full mq925:!pb-[45px] mq925:box-border mq1350:!pb-[69px] mq1350:box-border ${className}`}
    >
      <Section />
    </section>
  );
};

export default FrameComponent;
