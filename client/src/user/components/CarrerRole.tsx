import { type FunctionComponent } from "react";
import { Link } from "react-router-dom";
import SectionBadge from "./SectionBadge";

// ─── Types ────────────────────────────────────────────────────────────────────

type InfoRow = {
  label: string;
  value: string;
  borderBottom?: string;
  height?: string;
};

type BenefitItem = {
  label: string;
  text: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const infoRows: InfoRow[] = [
  { label: "Type of Offer:", value: "Permanent contract" },
  { label: "Work Schedule:", value: "Full-time / Flexible shifts" },
  { label: "Key Benefit:", value: "NABH-aligned training environment" },
  {
    label: "Candidacy:",
    value: "careers@swarajhospital.in",
    borderBottom: "1px solid #aaa",
  },
];

const benefits: BenefitItem[] = [
  {
    label: "Remuneration:",
    text: "Competitive salary based on qualification and experience, with structured increments.",
  },
  {
    label: "Infrastructure:",
    text: "Work with advanced critical care equipment including ventilators, cardiac monitors and infusion systems.",
  },
  {
    label: "Coverage:",
    text: "Medical benefits for you and your immediate family under the hospital's staff health scheme.",
  },
];

// ─── Icons ───────────────────────────────────────────────────────────────────

const checkIcon = (
  <div style={{
    width: "24px",
    height: "24px",
    borderRadius: "6px",
    backgroundColor: "#F1F2F1",
    border: "1px solid #E6E6E6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  }}>
    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 4.5L4.5 8L11 1.5" stroke="#1F2A44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);


// ─── Sub-components ───────────────────────────────────────────────────────────

const SectionHeadingFirst = ({ children }: { children: string }) => (
  <div className="section-heading">
    {checkIcon}
    <span className="section-heading-text">{children}</span>
  </div>
);

const SectionHeadingWithIcon = ({ children }: { children: string }) => (
  <div className="section-heading-2">
    {checkIcon}
    <span className="section-heading-2-text">{children}</span>
  </div>
);

const BodyPara = ({ children }: { children: string }) => (
  <div className="body-para">
    <span className="body-text">{children}</span>
  </div>
);

const FormField = ({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) => (
  <div className="form-field">
    <div className="field-label">
      <span className="field-label-text">
        {label}
        <span className="field-label-required">*</span>
      </span>
    </div>
    <input type={type} placeholder={placeholder} className="field-input" />
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const JobPostingSection: FunctionComponent = () => {
  return (
    <>
      <style>{`
                /* Container padding */
                .career-page {
                  width: 100%;
                  position: relative;
                  background-color: #fff;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  padding: 0 40px;
                  box-sizing: border-box;
                  gap: 80px;
                  font-family: Lilex, Arial, sans-serif;
                  line-height: normal;
                  letter-spacing: normal;
                }

                @media (max-width: 768px) {
                  .career-page {
                    padding: 0 20px;
                    gap: 48px;
                  }
                }

                /* Hero Section */
                .hero-section {
                  align-self: stretch;
                  overflow: hidden;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  padding: 80px 0 0;
                  max-width: 100%;
                  text-align: left;
                  font-size: 16px;
                  color: #0b0c0f;
                }

                @media (max-width: 768px) {
                  .hero-section {
                    padding: 40px 0 0;
                  }
                }

                .hero-inner {
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  padding: 0 40px;
                  gap: 32px;
                  max-width: 1440px;
                  box-sizing: border-box;
                }

                @media (max-width: 768px) {
                  .hero-inner {
                    padding: 0;
                    gap: 20px;
                  }
                }

                .hero-top {
                  align-self: stretch;
                  display: flex;
                  align-items: flex-end;
                  justify-content: space-between;
                  flex-wrap: wrap;
                  gap: 20px;
                  max-width: 100%;
                }

                @media (max-width: 768px) {
                  .hero-top {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 16px;
                  }
                }

                .hero-badge-wrap {
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  padding: 12px 0 0;
                  gap: 22.9px;
                  min-width: 376px;
                  max-width: 579px;
                  box-sizing: border-box;
                }

                @media (max-width: 768px) {
                  .hero-badge-wrap {
                    min-width: 100%;
                    max-width: 100%;
                    padding: 0;
                    gap: 16px;
                  }
                }

                .badge {
                  display: flex;
                  align-items: center;
                  padding: 4px 8px;
                  gap: 6px;
                  border-radius: 4px;
                  background-color: #f1f2f1;
                  box-sizing: border-box;
                  height: 32px;
                }

                .badge-label {
                  font-size: 14px;
                  line-height: 24px;
                  text-transform: uppercase;
                  font-weight: 500;
                  color: #0b0c0f;
                }

                .hero-heading {
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  padding: 0 0 0.7px;
                }

                .hero-title {
                  margin: 0;
                  width: 100%;
                  position: relative;
                  font-size: 64px;
                  letter-spacing: -1.5px;
                  line-height: 76.8px;
                  font-weight: 400;
                  font-family: 'Stack Sans Text', Arial, sans-serif;
                  color: #0b0c0f;
                  display: inline-block;
                  max-width: 579px;
                }

                @media (max-width: 768px) {
                  .hero-title {
                    font-size: 32px;
                    line-height: 40px;
                    letter-spacing: -0.8px;
                    max-width: 100%;
                  }
                }

                .hero-desc {
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  min-width: 227px;
                  max-width: 350px;
                }

                @media (max-width: 768px) {
                  .hero-desc {
                    min-width: 100%;
                    max-width: 100%;
                  }
                }

                .hero-desc-inner {
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                }

                @media (max-width: 768px) {
                  .hero-desc-inner {
                    align-items: flex-start;
                  }
                }

                .hero-desc-text {
                  width: 322px;
                  position: relative;
                  font-size: 18px;
                  line-height: 28.8px;
                  color: #505050;
                  font-family: Inter, Arial, sans-serif;
                  display: flex;
                  align-items: center;
                  max-width: 100%;
                }

                @media (max-width: 768px) {
                  .hero-desc-text {
                    width: 100%;
                    font-size: 15px;
                    line-height: 24px;
                  }
                }

                .hero-divider {
                  align-self: stretch;
                  height: 2px;
                  position: relative;
                  border-top: 1px solid #e6e6e6;
                  box-sizing: border-box;
                }

                /* Details Section */
                .details-section {
                  width: 100%;
                  display: flex;
                  align-items: flex-start;
                  flex-wrap: wrap;
                  align-content: flex-start;
                  gap: 96px;
                  max-width: 1360px;
                }

                @media (max-width: 1024px) {
                  .details-section {
                    gap: 40px;
                  }
                }

                @media (max-width: 768px) {
                  .details-section {
                    flex-direction: column;
                    align-items: stretch;
                    gap: 48px;
                  }
                }

                /* Overview Column */
                .overview-col {
                  flex: 1.173;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  padding: 44px 0 0;
                  box-sizing: border-box;
                  gap: 16px;
                  min-width: 310px;
                  max-width: 100%;
                  text-align: left;
                  font-size: 20px;
                  color: #0b0c0f;
                  font-family: 'Stack Sans Text', Arial, sans-serif;
                }

                @media (max-width: 768px) {
                  .overview-col {
                    padding: 0;
                    order: 2;
                  }
                }

                .section-heading {
                  align-self: stretch;
                  display: flex;
                  align-items: center;
                  gap: 12px;
                  padding: 0 0 0 40px;
                }

                @media (max-width: 768px) {
                  .section-heading {
                    padding: 0;
                  }
                }

                .section-heading-text {
                  font-size: 20px;
                  line-height: 30px;
                  color: #0b0c0f;
                  font-family: 'Stack Sans Text', Arial, sans-serif;
                  font-weight: 500;
                }

                @media (max-width: 768px) {
                  .section-heading-text {
                    font-size: 18px;
                    line-height: 26px;
                  }
                }

                .section-heading-2 {
                  align-self: stretch;
                  display: flex;
                  align-items: center;
                  gap: 12px;
                  padding: 29.3px 0 0 40px;
                }

                @media (max-width: 768px) {
                  .section-heading-2 {
                    padding: 16px 0 0 0;
                  }
                }

                .section-heading-2-text {
                  font-size: 20px;
                  line-height: 30px;
                  color: #0b0c0f;
                  font-family: 'Stack Sans Text', Arial, sans-serif;
                  font-weight: 500;
                }

                @media (max-width: 768px) {
                  .section-heading-2-text {
                    font-size: 18px;
                    line-height: 26px;
                  }
                }

                .body-para {
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  padding: 0 0 0.9px;
                }

                .body-text {
                  width: 100%;
                  font-size: 18px;
                  line-height: 28.8px;
                  color: #505050;
                  font-family: Inter, Arial, sans-serif;
                  display: inline-block;
                  max-width: 776px;
                }

                @media (max-width: 768px) {
                  .body-text {
                    font-size: 15px;
                    line-height: 24px;
                  }
                }

                .benefits-list {
                  align-self: stretch;
                  overflow: hidden;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  padding: 1.3px 0 0 40px;
                  box-sizing: border-box;
                  gap: 16px;
                  max-width: 100%;
                  font-size: 16px;
                  font-family: Inter, Arial, sans-serif;
                }

                @media (max-width: 768px) {
                  .benefits-list {
                    padding: 0;
                  }
                }

                .benefit-row {
                  align-self: stretch;
                  display: flex;
                  align-items: flex-start;
                  max-width: 100%;
                  gap: 12px;
                }

                .benefit-bullet {
                  font-size: 18px;
                  line-height: 24px;
                  color: #0b0c0f;
                  flex-shrink: 0;
                }

                .benefit-text {
                  flex: 1;
                  line-height: 24px;
                  color: #505050;
                  font-size: 16px;
                }

                @media (max-width: 768px) {
                  .benefit-text {
                    font-size: 15px;
                    line-height: 22px;
                  }
                }

                .benefit-label {
                  font-weight: 600;
                  color: #0b0c0f;
                }

                /* Essential Info Card */
                .info-card {
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  border-radius: 24px;
                  background-color: #f1f2f1;
                  padding: 36px;
                  box-sizing: border-box;
                  gap: 24px;
                  min-width: 310px;
                  max-width: 488px;
                  text-align: left;
                  font-size: 16px;
                  color: #0b0c0f;
                  font-family: Lilex, Arial, sans-serif;
                }

                @media (max-width: 768px) {
                  .info-card {
                    max-width: 100%;
                    order: 1;
                    padding: 24px;
                    border-radius: 20px;
                  }
                }

                .info-card-heading {
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  font-size: 24px;
                  font-family: 'Stack Sans Text', Arial, sans-serif;
                }

                @media (max-width: 768px) {
                  .info-card-heading {
                    font-size: 20px;
                  }
                }

                .info-card-title {
                  margin: 0;
                  align-self: stretch;
                  position: relative;
                  font-size: inherit;
                  letter-spacing: -1.2px;
                  line-height: 36px;
                  font-weight: 400;
                  font-family: inherit;
                }

                .info-rows {
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  color: #505050;
                }

                .info-row {
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  border-top: 1px solid #aaa;
                  padding: 16px 0;
                  gap: 7px;
                  box-sizing: border-box;
                }

                .info-row-label {
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                }

                .info-row-label-text {
                  align-self: stretch;
                  line-height: 24px;
                  text-transform: uppercase;
                  font-weight: 500;
                  font-size: 14px;
                  color: #505050;
                  font-family: Lilex, Arial, sans-serif;
                }

                .info-row-value {
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  padding: 0 0 0.8px;
                  font-size: 18px;
                  color: #0b0c0f;
                  font-family: 'Stack Sans Text', Arial, sans-serif;
                }

                @media (max-width: 768px) {
                  .info-row-value {
                    font-size: 16px;
                  }
                }

                .info-row-value-text {
                  align-self: stretch;
                  line-height: 28.8px;
                  word-break: break-all;
                }

                .info-card-cta {
                  align-self: stretch;
                  display: flex;
                  align-items: center;
                  padding: 24px 0 0;
                  color: #fff;
                }

                @media (max-width: 768px) {
                  .info-card-cta {
                    justify-content: center;
                  }
                }

                .cta-button {
                  height: 48px;
                  border-radius: 8px;
                  background-color: #1f2a44;
                  display: inline-flex;
                  align-items: center;
                  justify-content: center;
                  padding: 12px 20px;
                  box-sizing: border-box;
                  gap: 8px;
                  cursor: pointer;
                  border: none;
                  text-decoration: none;
                }

                .cta-button-text {
                  line-height: 24px;
                  text-transform: uppercase;
                  font-weight: 500;
                  color: #fff;
                  font-size: 16px;
                  font-family: Lilex, Arial, sans-serif;
                  white-space: nowrap;
                }

                /* Contact Section */
                .contact-section {
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  flex-wrap: wrap;
                  align-content: flex-start;
                  padding: 60px 0 120px;
                  gap: 20px;
                  max-width: 1360px;
                  box-sizing: border-box;
                }

                @media (max-width: 768px) {
                  .contact-section {
                    flex-direction: column;
                    align-items: stretch;
                    padding: 40px 0 80px;
                    gap: 32px;
                  }
                }

                .contact-left {
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  padding: 12px 0;
                  gap: 22.9px;
                  min-width: 310px;
                  max-width: 548px;
                  box-sizing: border-box;
                  font-size: 16px;
                  color: #0b0c0f;
                  font-family: Lilex, Arial, sans-serif;
                }

                @media (max-width: 768px) {
                  .contact-left {
                    min-width: 100%;
                    max-width: 100%;
                    padding: 0;
                    gap: 16px;
                  }
                }

                .contact-badge {
                  display: flex;
                  align-items: center;
                  padding: 4px 8px;
                  gap: 6px;
                  border-radius: 4px;
                  background-color: #f1f2f1;
                  box-sizing: border-box;
                  height: 32px;
                }

                .contact-badge-label {
                  line-height: 24px;
                  text-transform: uppercase;
                  font-weight: 500;
                  color: #0b0c0f;
                  font-size: 14px;
                }

                .contact-heading-wrap {
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  padding: 0 0 0.7px;
                }

                .contact-title {
                  margin: 0;
                  width: 100%;
                  font-size: 64px;
                  letter-spacing: -1.5px;
                  line-height: 76.8px;
                  font-weight: 400;
                  font-family: 'Stack Sans Text', Arial, sans-serif;
                  color: #0b0c0f;
                  display: inline-block;
                  max-width: 548px;
                }

                @media (max-width: 768px) {
                  .contact-title {
                    font-size: 36px;
                    line-height: 44px;
                    letter-spacing: -1px;
                  }
                }

                .contact-desc-wrap {
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  padding: 19.9px 0 0.6px;
                }

                @media (max-width: 768px) {
                  .contact-desc-wrap {
                    padding: 8px 0 0 0;
                  }
                }

                .contact-desc {
                  width: 100%;
                  font-size: 18px;
                  line-height: 28.8px;
                  color: #505050;
                  font-family: Inter, Arial, sans-serif;
                  display: inline-block;
                  max-width: 548px;
                }

                @media (max-width: 768px) {
                  .contact-desc {
                    font-size: 15px;
                    line-height: 24px;
                  }
                }

                /* Form Styles */
                .form-wrap {
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  padding: 44px 0 15px;
                  min-width: 310px;
                  max-width: 712px;
                  box-sizing: border-box;
                }

                @media (max-width: 768px) {
                  .form-wrap {
                    min-width: 100%;
                    max-width: 100%;
                    padding: 0;
                  }
                }

                .form {
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  gap: 32px;
                  text-align: left;
                  font-size: 16px;
                  color: #1f2a44;
                  font-family: Lilex, Arial, sans-serif;
                }

                @media (max-width: 768px) {
                  .form {
                    gap: 24px;
                  }
                }

                .form-row {
                  display: flex;
                  align-items: flex-start;
                  gap: 16px;
                  align-self: stretch;
                  flex-wrap: wrap;
                }

                @media (max-width: 768px) {
                  .form-row {
                    flex-direction: column;
                    gap: 24px;
                  }
                }

                .form-field {
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  gap: 12px;
                  min-width: 226px;
                  max-width: 100%;
                }

                @media (max-width: 768px) {
                  .form-field {
                    min-width: 100%;
                  }
                }

                .form-field-full {
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  gap: 12px;
                  min-width: 226px;
                  max-width: 100%;
                  align-self: stretch;
                }

                .field-label {
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  padding: 0 0 5px;
                }

                .field-label-text {
                  line-height: 24px;
                  text-transform: uppercase;
                  font-weight: 500;
                  color: #1f2a44;
                  white-space: nowrap;
                }

                .field-label-required {
                  color: #7791a5;
                  line-height: 24px;
                }

                .field-input {
                  align-self: stretch;
                  border-radius: 12px;
                  background-color: #f1f2f1;
                  border: 1px solid #e6e6e6;
                  padding: 14px 12px;
                  color: #0b0c0f;
                  font-family: Inter, Arial, sans-serif;
                  font-size: 16px;
                  outline: none;
                  box-sizing: border-box;
                }

                .field-textarea {
                  align-self: stretch;
                  height: 195px;
                  border-radius: 12px;
                  background-color: #f1f2f1;
                  border: 1px solid #e6e6e6;
                  padding: 12px;
                  color: #0b0c0f;
                  font-family: Inter, Arial, sans-serif;
                  font-size: 16px;
                  outline: none;
                  resize: none;
                  box-sizing: border-box;
                }

                .form-hint {
                  align-self: stretch;
                  line-height: 24px;
                  font-size: 14px;
                  color: #505050;
                  font-family: Inter, Arial, sans-serif;
                }

                .form-submit-row {
                  align-self: stretch;
                  display: flex;
                  padding: 4px 0 0;
                }

                .submit-btn {
                  height: 48px;
                  border-radius: 8px;
                  background-color: #1f2a44;
                  overflow: hidden;
                  display: flex;
                  align-items: center;
                  padding: 12px 20px;
                  box-sizing: border-box;
                  cursor: pointer;
                  border: none;
                  color: #fff;
                  font-size: 16px;
                  font-family: Lilex, Arial, sans-serif;
                  font-weight: 500;
                  text-transform: uppercase;
                  line-height: 24px;
                  letter-spacing: normal;
                }
            `}</style>

      <div className="career-page">
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="hero-section">
          <div className="hero-inner">
            <div className="hero-top">
              {/* Title + badge */}
              <div className="hero-badge-wrap">
                <SectionBadge icon="/SVG.svg" label="Open Position" variant="dark" />
                <div className="hero-heading">
                  <h1 className="hero-title">
                    Staff Nurse
                    <br />
                    ICU &amp; Critical Care
                  </h1>
                </div>
              </div>

              {/* Description */}
              <div className="hero-desc">
                <div className="hero-desc-inner">
                  <span className="hero-desc-text">
                    Join a clinical team committed to delivering life-saving care
                    with precision, compassion and professionalism at Swaraj
                    Hospital, Balangir.
                  </span>
                </div>
              </div>
            </div>

            <div className="hero-divider" />
          </div>
        </section>

        {/* ── Job Details ──────────────────────────────────────────────────── */}
        <div className="details-section">
          {/* Left – overview */}
          <div className="overview-col">
            <SectionHeadingFirst>Job Overview.</SectionHeadingFirst>
            <BodyPara>
              As a key member of our critical care team, you will deliver
              high-dependency nursing care within a fully equipped ICU and Step
              Down ICU. Our facility includes a dedicated NICU, Modular OT and
              24/7 emergency support infrastructure. You will work within a
              structured, senior-led team in a supportive and professionally
              rewarding environment at the heart of western Odisha's most advanced
              hospital.
            </BodyPara>

            <SectionHeadingWithIcon>
              Your Role &amp; Impact
            </SectionHeadingWithIcon>
            <BodyPara>
              You will ensure all patients in the ICU receive continuous,
              attentive and clinically accurate nursing care aligned with NABH
              standards. Your role involves close coordination with senior
              consultants, monitoring of critical vital parameters, medication
              administration and detailed patient documentation. Beyond direct
              care, you will contribute to infection control protocols and support
              junior staff development on the ward.
            </BodyPara>

            <SectionHeadingWithIcon>Professional Profile</SectionHeadingWithIcon>
            <BodyPara>
              Candidates should possess a GNM or B.Sc. Nursing degree from a recognized institution and hold a valid registration with the Odisha Nurses and Midwives Council (ONMC). Prior clinical experience in an ICU or critical care setup is highly valued.
            </BodyPara>

            <SectionHeadingWithIcon>
              Employment &amp; Benefits
            </SectionHeadingWithIcon>
            <div className="benefits-list">
              {benefits.map((b, i) => (
                <div key={i} className="benefit-row">
                  <span className="benefit-bullet">•</span>
                  <span className="benefit-text">
                    <strong className="benefit-label">{b.label}</strong> {b.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right – essential info card */}
          <div className="info-card">
            <div className="info-card-heading">
              <h3 className="info-card-title">Essential information</h3>
            </div>

            <div className="info-rows">
              {infoRows.map((row, i) => (
                <div
                  key={i}
                  className="info-row"
                  style={{
                    ...(row.borderBottom ? { borderBottom: row.borderBottom } : {}),
                  }}
                >
                  <div className="info-row-label">
                    <span className="info-row-label-text">{row.label}</span>
                  </div>
                  <div className="info-row-value">
                    <span className="info-row-value-text">{row.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="info-card-cta">
              <Link to="/career" className="cta-button">
                <span className="cta-button-text">
                  See All Job Openings{" "}
                  <span style={{ fontSize: "24px", lineHeight: "1", verticalAlign: "-2px", marginLeft: "4px" }}>
                    •
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* ── Contact / Form ───────────────────────────────────────────────── */}
        <div className="contact-section">
          {/* Left – contact blurb */}
          <div className="contact-left">
            <div className="contact-badge">
              <span className="contact-badge-label">Affiliated Labs</span>
            </div>

            <div className="contact-heading-wrap">
              <h1 className="contact-title">
                Any Queries?
                <br />
                Let Us Know.
              </h1>
            </div>

            <div className="contact-desc-wrap">
              <span className="contact-desc">
                We work with dedicated clinical and administrative staff across
                every department. Reach out and our HR team will respond within 48
                hours.
              </span>
            </div>
          </div>

          {/* Right – form */}
          <div className="form-wrap">
            <div className="form">
              {/* Row 1: name + email */}
              <div className="form-row">
                <FormField
                  label="Full Name"
                  placeholder="Enter your legal name"
                />
                <FormField
                  label="Email Address"
                  placeholder="Enter Your email"
                  type="email"
                />
              </div>

              {/* Row 2: phone */}
              <div className="form-row">
                <FormField
                  label="Phone Number"
                  placeholder="Enter your phone number"
                  type="tel"
                />
              </div>

              {/* Row 3: message */}
              <div className="form-field-full">
                <div className="field-label">
                  <span className="field-label-text">Write Message</span>
                </div>
                <textarea placeholder="Your message" className="field-textarea" />
                <span className="form-hint">
                  Request only. Our team will call you soon to confirm your slot.
                </span>
              </div>

              {/* Submit */}
              <div className="form-submit-row">
                <button className="submit-btn">Submit Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobPostingSection;
