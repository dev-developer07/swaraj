import { type FunctionComponent, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import BackgroundBlur from "./BackgroundBlur";
import SectionBadge from "./SectionBadge";
import NavyButton from "./NavyButton";

export type Section6Type = {
  className?: string;
};

const Section6: FunctionComponent<Section6Type> = ({ className = "" }) => {
  const [backgroundBlurItems] = useState([
    {
      howCanIBookAnAppointmentOnlin: "How can I book an appointment online?",
      answer: "Booking an appointment is very easy! Simply click on the 'Book Appointment' button on the top right corner of our website, select your preferred doctor, date, and time, and you'll receive a confirmation instantly."
    },
    {
      howCanIBookAnAppointmentOnlin: "Do you accept medical insurance?",
      answer: "Yes, we accept a wide variety of major medical insurance plans. Our dedicated billing team is happy to help you verify your coverage and ensure you get the maximum benefits from your plan."
    },
    {
      howCanIBookAnAppointmentOnlin: "What should I bring to my first visit?",
      answer: "For your first visit, please bring your photo ID, insurance card, any previous medical records or test results relevant to your visit, and a list of your current medications. We look forward to welcoming you!"
    },
    {
      howCanIBookAnAppointmentOnlin:
        "Is there emergency care available after hours?",
      answer: "Absolutely! Our emergency department is open 24/7 to provide immediate, high-quality care for any urgent medical situations, ensuring you and your family are always protected."
    },
    {
      howCanIBookAnAppointmentOnlin:
        "What payment options do you provide for treatments?",
      answer: "We offer flexible payment options to ensure your health comes first. You can pay via credit card, debit card, or health savings accounts, and we also offer accessible financing plans for more extensive treatments."
    },
  ]);
  return (
    <Box
      className={`bg-web-white overflow-hidden flex flex-col items-start !pt-num-200 !pb-num-200 !pl-num-280 !pr-num-280 box-border max-w-full text-left text-num-16 text-web-woodsmoke font-lilex mq925:!pt-num-84 mq925:!pb-num-84 mq925:!pl-num-70 mq925:!pr-num-70 mq925:box-border mq1350:!pt-num-130 mq1350:!pb-num-130 mq1350:!pl-num-140 mq1350:!pr-num-140 mq1350:box-border ${className}`}
    >
      <Box className="w-num-1360 flex items-start gap-[103px] max-w-full mq925:gap-[51px] mq450:gap-[26px]">
        <Box className="w-[457px] flex flex-col items-start !pt-3 !pb-num-0 !pl-num-0 !pr-num-0 box-border gap-[23.4px] max-w-[457px] mq450:max-w-full">
          <SectionBadge icon="/SVG.svg" label="FAQ — quiry" variant="dark" />
          <Box className="self-stretch flex flex-col items-start text-num-48 font-stack-sans-text">
            <Typography
              className="!m-0 self-stretch relative mq925:text-num-38 mq925:leading-num-52 mq450:text-num-29 mq450:leading-num-39"
              variant="inherit"
              variantMapping={{ inherit: "h1" }}
              sx={{
                fontWeight: "400",
                lineHeight: "64.8px",
                letterSpacing: "-0.72px",
              }}
            >
              Everything You
              <br />
              Need to Know
            </Typography>
          </Box>
        </Box>
        <section className="w-[800px] flex flex-col items-start max-w-full text-left text-num-16 text-web-mine-shaft font-inter">
          <Box className="self-stretch flex items-center justify-end gap-2">
            <NavyButton label="Clinic" variant="filled" />
            <Button
              className="!pt-1 !pb-1 !pl-4 !pr-num-15 box-border max-w-num-800 mq925:max-w-full"
              disableElevation
              variant="contained"
              sx={{
                color: "#222",
                fontSize: "16",
                background: "#f1f2f1",
                borderRadius: "4px",
                "&:hover": { background: "#f1f2f1" },
              }}
            >
              DOCTORS
            </Button>
            <Box className="rounded-num-4 bg-web-gray-nurse flex flex-col items-start !pt-1 !pb-1 !pl-4 !pr-4 box-border max-w-num-800 mq925:max-w-full">
              <div className="relative leading-num-24 uppercase">PRICING</div>
            </Box>
          </Box>
          <Box className="self-stretch overflow-hidden flex flex-col items-start !pt-11 !pb-num-0 !pl-num-0 !pr-num-0 box-border max-w-full mq925:!pt-num-29 mq925:box-border">
            <Box className="w-full flex flex-col items-start gap-3 max-w-num-800 mq925:max-w-full">
              {backgroundBlurItems.map((item, index) => (
                <BackgroundBlur
                  key={index}
                  howCanIBookAnAppointmentOnlin={
                    item.howCanIBookAnAppointmentOnlin
                  }
                  answer={item.answer}
                />
              ))}
            </Box>
          </Box>
        </section>
      </Box>
    </Box>
  );
};

export default Section6;
