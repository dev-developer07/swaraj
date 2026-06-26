import { type FunctionComponent, type CSSProperties } from "react";
import { Link } from "react-router-dom";

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
        height: "94.8px",
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

// ─── Styles ───────────────────────────────────────────────────────────────────

const css: Record<string, CSSProperties> = {
    // Page wrapper
    page: {
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 30px",
        boxSizing: "border-box",
        gap: "80px",
        fontFamily: "Lilex, Arial, sans-serif",
        lineHeight: "normal",
        letterSpacing: "normal",
    },

    // ── Hero section ──────────────────────────────────────────────────────────
    heroSection: {
        alignSelf: "stretch",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "80px 0 0",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "16px",
        color: "#0b0c0f",
    },
    heroInner: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0 40px",
        gap: "32px",
        maxWidth: "1440px",
        boxSizing: "border-box",
    },
    heroTop: {
        alignSelf: "stretch",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "20px",
        maxWidth: "100%",
    },
    heroBadgeWrap: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "12px 0 0",
        gap: "22.9px",
        minWidth: "376px",
        maxWidth: "579px",
        boxSizing: "border-box",
    },
    badge: {
        width: "163px",
        height: "32px",
        borderRadius: "4px",
        backgroundColor: "#f1f2f1",
        display: "flex",
        alignItems: "center",
        padding: "4px 8px 4px 6px",
        gap: "4px",
        boxSizing: "border-box",
    },
    badgeIcon: {
        height: "20px",
        width: "20px",
        position: "relative",
    },
    badgeLabel: {
        position: "relative",
        lineHeight: "24px",
        textTransform: "uppercase",
        fontWeight: 500,
        color: "#0b0c0f",
    },
    heroHeading: {
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0 0 0.7px",
    },
    heroTitle: {
        margin: 0,
        width: "100%",
        position: "relative",
        fontSize: "64px",
        letterSpacing: "-1.5px",
        lineHeight: "76.8px",
        fontWeight: 400,
        fontFamily: "'Stack Sans Text', Arial, sans-serif",
        color: "#0b0c0f",
        display: "inline-block",
        maxWidth: "579px",
    },
    heroDesc: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        minWidth: "227px",
        maxWidth: "350px",
    },
    heroDescInner: {
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    heroDescText: {
        width: "322px",
        position: "relative",
        fontSize: "18px",
        lineHeight: "28.8px",
        color: "#505050",
        fontFamily: "Inter, Arial, sans-serif",
        display: "flex",
        alignItems: "center",
        maxWidth: "100%",
    },
    heroDivider: {
        alignSelf: "stretch",
        height: "2px",
        position: "relative",
        border: "1px solid #e6e6e6",
        boxSizing: "border-box",
    },

    // ── Job details section ───────────────────────────────────────────────────
    detailsSection: {
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        flexWrap: "wrap",
        alignContent: "flex-start",
        gap: "96px",
        maxWidth: "1360px",
    },

    // Left column – job overview
    overviewCol: {
        flex: "1.173",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "44px 0 0",
        boxSizing: "border-box",
        gap: "14.7px",
        minWidth: "310px",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "20px",
        color: "#0b0c0f",
        fontFamily: "'Stack Sans Text', Arial, sans-serif",
    },
    sectionHeading: {
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0 0 0 40px",
    },
    sectionHeadingText: {
        position: "relative",
        lineHeight: "30px",
        fontSize: "20px",
        color: "#0b0c0f",
        fontFamily: "'Stack Sans Text', Arial, sans-serif",
    },
    sectionHeading2: {
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "29.3px 0 0 40px",
        position: "relative",
        isolation: "isolate",
        zIndex: 0,
    },
    sectionHeading2Text: {
        position: "relative",
        lineHeight: "30px",
        zIndex: 2,
        flexShrink: 0,
        fontSize: "20px",
        color: "#0b0c0f",
        fontFamily: "'Stack Sans Text', Arial, sans-serif",
    },
    sectionHeading2Img: {
        width: "100%",
        height: "30px",
        position: "absolute",
        margin: 0,
        right: 0,
        bottom: 0,
        left: 0,
        maxWidth: "100%",
        overflow: "hidden",
        flexShrink: 0,
        objectFit: "cover",
        zIndex: 1,
    },
    bodyPara: {
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0 0 0.9px",
    },
    bodyText: {
        width: "100%",
        position: "relative",
        fontSize: "18px",
        lineHeight: "28.8px",
        color: "#505050",
        fontFamily: "Inter, Arial, sans-serif",
        display: "inline-block",
        maxWidth: "776px",
    },

    benefitsList: {
        alignSelf: "stretch",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "1.3px 0 0 40px",
        boxSizing: "border-box",
        gap: "16px",
        maxWidth: "100%",
        fontSize: "16px",
        fontFamily: "Inter, Arial, sans-serif",
    },
    benefitRow: {
        alignSelf: "stretch",
        display: "flex",
        alignItems: "center",
        maxWidth: "100%",
        gap: "8px",
    },
    benefitBulletWrap: {
        width: "0.1px",
        position: "relative",
        lineHeight: "24px",
        display: "flex",
        alignItems: "center",
        flexShrink: 0,
    },
    benefitText: {
        flex: 1,
        position: "relative",
        lineHeight: "24px",
        display: "inline-block",
        minWidth: "478px",
        maxWidth: "735.9px",
        color: "#0b0c0f",
    },
    benefitLabel: {
        fontWeight: 600,
        lineHeight: "24px",
    },

    // Right column – essential info card
    infoCard: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        borderRadius: "24px",
        backgroundColor: "#f1f2f1",
        padding: "36px",
        boxSizing: "border-box",
        gap: "24px",
        minWidth: "310px",
        maxWidth: "488px",
        textAlign: "left",
        fontSize: "16px",
        color: "#0b0c0f",
        fontFamily: "Lilex, Arial, sans-serif",
    },
    infoCardHeading: {
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        fontSize: "24px",
        fontFamily: "'Stack Sans Text', Arial, sans-serif",
    },
    infoCardTitle: {
        margin: 0,
        alignSelf: "stretch",
        position: "relative",
        fontSize: "inherit",
        letterSpacing: "-1.2px",
        lineHeight: "36px",
        fontWeight: 400,
        fontFamily: "inherit",
    },
    infoRows: {
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        color: "#505050",
    },
    infoRow: {
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        borderTop: "1px solid #aaa",
        padding: "16px 0",
        gap: "7px",
    },
    infoRowLabel: {
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    },
    infoRowLabelText: {
        alignSelf: "stretch",
        position: "relative",
        lineHeight: "24px",
        textTransform: "uppercase",
        fontWeight: 500,
        fontSize: "16px",
        color: "#505050",
        fontFamily: "Lilex, Arial, sans-serif",
    },
    infoRowValue: {
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0 0 0.8px",
        fontSize: "18px",
        color: "#0b0c0f",
        fontFamily: "'Stack Sans Text', Arial, sans-serif",
    },
    infoRowValueText: {
        alignSelf: "stretch",
        position: "relative",
        lineHeight: "28.8px",
    },
    infoCardCta: {
        alignSelf: "stretch",
        display: "flex",
        alignItems: "center",
        padding: "24px 0 0",
        color: "#fff",
    },
    ctaButton: {
        height: "48px",
        borderRadius: "8px",
        backgroundColor: "#1f2a44",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "12px 20px",
        boxSizing: "border-box",
        gap: "8px",
        cursor: "pointer",
        border: "none",
        textDecoration: "none",
    },
    ctaButtonText: {
        position: "relative",
        lineHeight: "24px",
        textTransform: "uppercase",
        fontWeight: 500,
        color: "#fff",
        fontSize: "16px",
        fontFamily: "Lilex, Arial, sans-serif",
        overflow: "hidden",
    },
    ctaIcon: {
        height: "24px",
        width: "24px",
        position: "relative",
    },

    // ── Contact / form section ────────────────────────────────────────────────
    contactSection: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignContent: "flex-start",
        padding: "60px 0 0",
        gap: "20px",
        maxWidth: "1360px",
        boxSizing: "border-box",
    },
    contactLeft: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "12px 0",
        gap: "22.9px",
        minWidth: "310px",
        maxWidth: "548px",
        boxSizing: "border-box",
        fontSize: "16px",
        color: "#0b0c0f",
        fontFamily: "Lilex, Arial, sans-serif",
    },
    contactBadge: {
        width: "182px",
        height: "32px",
        borderRadius: "4px",
        backgroundColor: "#f1f2f1",
        display: "flex",
        alignItems: "center",
        padding: "4px 8px 4px 6px",
        gap: "4px",
        boxSizing: "border-box",
    },
    contactBadgeLabel: {
        lineHeight: "24px",
        textTransform: "uppercase",
        fontWeight: 500,
        color: "#0b0c0f",
    },
    contactHeadingWrap: {
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0 0 0.7px",
    },
    contactTitle: {
        margin: 0,
        width: "100%",
        position: "relative",
        fontSize: "64px",
        letterSpacing: "-1.5px",
        lineHeight: "76.8px",
        fontWeight: 400,
        fontFamily: "'Stack Sans Text', Arial, sans-serif",
        color: "#0b0c0f",
        display: "inline-block",
        maxWidth: "548px",
    },
    contactDescWrap: {
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "19.9px 0 0.6px",
    },
    contactDesc: {
        width: "100%",
        position: "relative",
        fontSize: "18px",
        lineHeight: "28.8px",
        color: "#505050",
        fontFamily: "Inter, Arial, sans-serif",
        display: "inline-block",
        maxWidth: "548px",
    },

    // Form
    formWrap: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "44px 0 15px",
        minWidth: "310px",
        maxWidth: "712px",
        boxSizing: "border-box",
    },
    form: {
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        textAlign: "left",
        fontSize: "16px",
        color: "#1f2a44",
        fontFamily: "Lilex, Arial, sans-serif",
    },
    formRow: {
        display: "flex",
        alignItems: "flex-start",
        gap: "16px",
        alignSelf: "stretch",
        flexWrap: "wrap",
    },
    formField: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        minWidth: "226px",
        maxWidth: "100%",
    },
    formFieldFull: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        minWidth: "226px",
        maxWidth: "100%",
        alignSelf: "stretch",
    },
    fieldLabel: {
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0 0 5px",
    },
    fieldLabelText: {
        position: "relative",
        lineHeight: "24px",
        textTransform: "uppercase",
        fontWeight: 500,
        color: "#1f2a44",
        whiteSpace: "nowrap",
    },
    fieldLabelRequired: {
        color: "#7791a5",
        lineHeight: "24px",
    },
    fieldInput: {
        alignSelf: "stretch",
        borderRadius: "12px",
        backgroundColor: "#f1f2f1",
        border: "1px solid #e6e6e6",
        padding: "14px 12px",
        color: "#7e7f80",
        fontFamily: "Inter, Arial, sans-serif",
        fontSize: "16px",
        outline: "none",
        boxSizing: "border-box",
    },
    fieldTextarea: {
        alignSelf: "stretch",
        height: "195px",
        borderRadius: "12px",
        backgroundColor: "#f1f2f1",
        border: "1px solid #e6e6e6",
        padding: "12px",
        color: "#7e7f80",
        fontFamily: "Inter, Arial, sans-serif",
        fontSize: "16px",
        outline: "none",
        resize: "none",
        boxSizing: "border-box",
    },
    formHint: {
        alignSelf: "stretch",
        position: "relative",
        lineHeight: "24px",
        fontSize: "14px",
        color: "#0b0c0f",
    },
    formSubmitRow: {
        alignSelf: "stretch",
        display: "flex",
        padding: "4px 0 0",
    },
    submitBtn: {
        height: "48px",
        borderRadius: "8px",
        backgroundColor: "#1f2a44",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        padding: "12px 20px",
        boxSizing: "border-box",
        cursor: "pointer",
        border: "none",
        color: "#fff",
        fontSize: "16px",
        fontFamily: "Lilex, Arial, sans-serif",
        fontWeight: 500,
        textTransform: "uppercase",
        lineHeight: "24px",
        letterSpacing: "normal",
    },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

const SectionHeadingFirst = ({ children }: { children: string }) => (
    <div style={css.sectionHeading}>
        <span style={css.sectionHeadingText}>{children}</span>
    </div>
);

const SectionHeadingWithIcon = ({ children }: { children: string }) => (
    <div style={css.sectionHeading2}>
        <span style={css.sectionHeading2Text}>{children}</span>
    </div>
);

const BodyPara = ({ children }: { children: string }) => (
    <div style={css.bodyPara}>
        <span style={css.bodyText}>{children}</span>
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
    <div style={css.formField}>
        <div style={css.fieldLabel}>
            <span style={css.fieldLabelText}>
                {label}
                <span style={css.fieldLabelRequired}>*</span>
            </span>
        </div>
        <input type={type} placeholder={placeholder} style={css.fieldInput} />
    </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const JobPostingSection: FunctionComponent = () => {
    return (
        <div style={css.page}>
            {/* ── Hero ─────────────────────────────────────────────────────────── */}
            <section style={css.heroSection}>
                <div style={css.heroInner}>
                    <div style={css.heroTop}>
                        {/* Title + badge */}
                        <div style={css.heroBadgeWrap}>
                            <div style={css.badge}>
                                <span style={css.badgeLabel}>Open Position</span>
                            </div>
                            <div style={css.heroHeading}>
                                <h1 style={css.heroTitle}>
                                    Staff Nurse
                                    <br />
                                    ICU &amp; Critical Care
                                </h1>
                            </div>
                        </div>

                        {/* Description */}
                        <div style={css.heroDesc}>
                            <div style={css.heroDescInner}>
                                <span style={css.heroDescText}>
                                    Join a clinical team committed to delivering life-saving care
                                    with precision, compassion and professionalism at Swaraj
                                    Hospital, Balangir.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div style={css.heroDivider} />
                </div>
            </section>

            {/* ── Job Details ──────────────────────────────────────────────────── */}
            <div style={css.detailsSection}>
                {/* Left – overview */}
                <div style={css.overviewCol}>
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
                    <div style={css.benefitsList}>
                        {benefits.map((b, i) => (
                            <div key={i} style={css.benefitRow}>
                                <span style={css.benefitBulletWrap}>
                                    <ul
                                        style={{
                                            margin: 0,
                                            padding: "0 0 0 21px",
                                            fontFamily: "inherit",
                                            fontSize: "inherit",
                                        }}
                                    >
                                        <li style={{ lineHeight: "24px" }}> </li>
                                    </ul>
                                </span>
                                <span style={css.benefitText}>
                                    <span style={css.benefitLabel}>{b.label}</span> {b.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right – essential info card */}
                <div style={css.infoCard}>
                    <div style={css.infoCardHeading}>
                        <h3 style={css.infoCardTitle}>Essential information</h3>
                    </div>

                    <div style={css.infoRows}>
                        {infoRows.map((row, i) => (
                            <div
                                key={i}
                                style={{
                                    ...css.infoRow,
                                    ...(row.height ? { height: row.height } : {}),
                                    ...(row.borderBottom
                                        ? { borderBottom: row.borderBottom }
                                        : {}),
                                }}
                            >
                                <div style={css.infoRowLabel}>
                                    <span style={css.infoRowLabelText}>{row.label}</span>
                                </div>
                                <div style={css.infoRowValue}>
                                    <span style={css.infoRowValueText}>{row.value}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={css.infoCardCta}>
                        <Link to="/career" style={css.ctaButton}>
                            <span style={css.ctaButtonText}>See All Job Openings</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* ── Contact / Form ───────────────────────────────────────────────── */}
            <div style={css.contactSection}>
                {/* Left – contact blurb */}
                <div style={css.contactLeft}>
                    <div style={css.contactBadge}>
                        <span style={css.contactBadgeLabel}>Affiliated Labs</span>
                    </div>

                    <div style={css.contactHeadingWrap}>
                        <h1 style={css.contactTitle}>
                            Any Queries?
                            <br />
                            Let Us Know.
                        </h1>
                    </div>

                    <div style={css.contactDescWrap}>
                        <span style={css.contactDesc}>
                            We work with dedicated clinical and administrative staff across
                            every department. Reach out and our HR team will respond within 48
                            hours.
                        </span>
                    </div>
                </div>

                {/* Right – form */}
                <div style={css.formWrap}>
                    <div style={css.form}>
                        {/* Row 1: name + email */}
                        <div style={css.formRow}>
                            <FormField
                                label="Full Name"
                                placeholder="Enter your legal name"
                            />
                            <FormField
                                label="Full Name"
                                placeholder="Enter Your email"
                                type="email"
                            />
                        </div>

                        {/* Row 2: phone */}
                        <div style={css.formRow}>
                            <FormField
                                label="Full Name"
                                placeholder="Enter your phone number"
                                type="tel"
                            />
                        </div>

                        {/* Row 3: message */}
                        <div style={css.formFieldFull}>
                            <div style={css.fieldLabel}>
                                <span style={css.fieldLabelText}>Write Message</span>
                            </div>
                            <textarea placeholder="Your message" style={css.fieldTextarea} />
                            <span style={css.formHint}>
                                Request only. Our team will call you soon to confirm your slot.
                            </span>
                        </div>

                        {/* Submit */}
                        <div style={css.formSubmitRow}>
                            <button style={css.submitBtn}>Submit Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobPostingSection;
