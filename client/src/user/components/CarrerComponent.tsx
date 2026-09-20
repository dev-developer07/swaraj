import { useState, useEffect, useMemo, type FunctionComponent, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import styles from "./CarrerComponent.module.css";
import { getPublicJobRoles } from "../../services/user.service";

// ─── Types ───────────────────────────────────────────────────────────────────

type DoctorItem = {
    container: string;
    name: string;
    specialty: string;
    gridColumn: string;
    gridRow: string;
};

type JobItem = {
    date: string;
    title: string;
    department: string;
    commitment: string;
    location?: string;
    id?: string;
};

// ─── Data ────────────────────────────────────────────────────────────────────

const doctors: DoctorItem[] = [
    {
        container: "/doctors/dr-sujnanendra-mishra.jpeg",
        name: "DR. Sujnanendra Mishra",
        specialty: "Obstetrics & Gynaecology",
        gridColumn: "1",
        gridRow: "1",
    },
    {
        container: "/doctors/dr-bikramaditya-padhi.jpeg",
        name: "DR. Bikramaditya Padhi",
        specialty: "Cardiology",
        gridColumn: "2",
        gridRow: "1",
    },
    {
        container: "/doctors/dr-rajat-bral.jpeg",
        name: "DR. Rajat Bral",
        specialty: "General Medicine",
        gridColumn: "1",
        gridRow: "2",
    },
    {
        container: "/doctors/dr-swadhin-ku-mishra.jpeg",
        name: "DR. Swadhin Ku. Mishra",
        specialty: "Obstetrics & Gynaecology",
        gridColumn: "2",
        gridRow: "2",
    },
    {
        container: "/doctors/dr-sabyasachi-swain.jpeg",
        name: "DR. Sabyasachi Swain",
        specialty: "Orthopaedics & Joint Replacement",
        gridColumn: "1",
        gridRow: "3",
    },
    {
        container: "/doctors/dr-anil-ku-patra.png",
        name: "DR. Anil Ku. Patra",
        specialty: "Neurology",
        gridColumn: "2",
        gridRow: "3",
    },
];

const jobs: JobItem[] = [
    {
        date: "2026-02-15",
        title: "Consultant Cardiologist",
        department: "Cardiology",
        commitment: "Part-time",
        id: "consultant-cardiologist",
    },
    {
        date: "2026-03-20",
        title: "Resident Medical Officer",
        department: "Emergency",
        commitment: "Full-time",
        id: "resident-medical-officer",
    },
    {
        date: "2026-04-25",
        title: "Radiographer",
        department: "Diagnostics",
        commitment: "Permanent",
        id: "radiographer",
    },
    {
        date: "2026-02-28",
        title: "Staff Nurse — ICU",
        department: "Critical Care",
        commitment: "Full-time",
        id: "staff-nurse",
    },
    {
        date: "2026-03-01",
        title: "Physiotherapist",
        department: "Rehabilitation",
        commitment: "Full-time",
        id: "physiotherapist",
    },
];

const benefits = [
    {
        label: "Competitive Remuneration",
        img: "/Intro-Image@2x.png",
        top: "-60.2px",
        gridRow: "1 / span 8",
        rotation: "rotate(-4deg)",
    },
    {
        label: "Advanced Infrastructure",
        img: "/Intro-Image1@2x.png",
        top: "-135.4px",
        gridRow: "1 / span 4",
        rotation: "rotate(3deg)",
    },
    {
        label: "Continuous Learning",
        img: "/Intro-Image2@2x.png",
        top: "-210.6px",
        gridRow: "1 / span 2",
        rotation: "rotate(-2deg)",
    },
    {
        label: "Health Coverage",
        img: "/Intro-Image3@2x.png",
        top: "-285.8px",
        gridRow: "1 / span 2",
        rotation: "rotate(4deg)",
    },
    {
        label: "Supportive Environment",
        img: "/Intro-Image@2x.png",
        top: "-285.8px",
        gridRow: "1 / span 2",
        rotation: "rotate(-3deg)",
    },
];

// ─── Inline Styles ───────────────────────────────────────────────────────────

const s: Record<string, CSSProperties> = {
    // Root
    pageRoot: {
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        lineHeight: "normal",
        letterSpacing: "normal",
    },

    // ── Hero Section ──
    heroSection: {
        alignSelf: "stretch",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "80px 24px 0",
        boxSizing: "border-box",
        maxWidth: "100%",
    },
    heroInner: {
        width: "100%",
        maxWidth: "1240px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "80px",
        alignSelf: "center",
    },
    heroCopy: {
        width: "100%",
        maxWidth: "950px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        fontSize: "16px",
        color: "#0b0c0f",
        fontFamily: "Lilex, Arial, sans-serif",
    },
    badge: {
        filter: "blur(0)",
        borderRadius: "4px",
        backgroundColor: "#f1f2f1",
        display: "flex",
        alignItems: "center",
        padding: "4px 8px 4px 6px",
        gap: "4px",
        flexShrink: 0,
    },
    badgeIconWrap: {
        height: "20px",
        width: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
    },
    badgeIcon: {
        alignSelf: "stretch",
        flex: 1,
        position: "relative",
        maxWidth: "100%",
        overflow: "hidden",
        maxHeight: "100%",
    },
    badgeText: {
        position: "relative",
        lineHeight: "24px",
        textTransform: "uppercase",
        fontWeight: 500,
    },
    heroTitleWrap: {
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "24px 0 0",
        fontSize: "70px",
        fontFamily: "Stack Sans Text, Arial, sans-serif",
    },
    heroTitleInner: {
        filter: "blur(0)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0",
    },
    heroH1: {
        margin: 0,
        position: "relative",
        fontSize: "inherit",
        letterSpacing: "-1.05px",
        lineHeight: "84px",
        fontWeight: 400,
        fontFamily: "inherit",
        textAlign: "center",
    },
    heroSubWrap: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "24px 0 0",
        flexShrink: 0,
        fontSize: "20px",
        color: "#505050",
        fontFamily: "Inter, Arial, sans-serif",
    },
    heroSubInner: {
        filter: "blur(0)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0",
    },
    heroSubText: {
        maxWidth: "728px",
        width: "100%",
        position: "relative",
        lineHeight: "32px",
        textAlign: "center",
    },
    heroImage: {
        width: "100%",
        maxWidth: "1240px",
        height: "auto",
        aspectRatio: "1240/744",
        borderRadius: "36px",
        objectFit: "cover",
    },

    // ── Mission Section ──
    missionSection: {
        width: "1440px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "140px 40px 0",
        boxSizing: "border-box",
        gap: "80px",
        maxWidth: "1440px",
        textAlign: "left",
        fontSize: "20px",
        color: "#0b0c0f",
        fontFamily: "Lilex, Arial, sans-serif",
    },
    missionRow: {
        display: "flex",
        alignItems: "flex-start",
        alignSelf: "stretch",
        gap: "160px",
        minHeight: "513.59px",
        maxWidth: "100%",
        flexShrink: 0,
    },
    missionBadgeCol: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        alignSelf: "stretch",
        textAlign: "left",
        fontSize: "16px",
    },
    missionCopyCol: {
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "44px",
        maxWidth: "650px",
        width: "650px",
        textAlign: "left",
        fontSize: "48px",
        fontFamily: "Stack Sans Text, Arial, sans-serif",
    },
    missionH1Wrap: {
        filter: "blur(0)",
        display: "flex",
        alignItems: "flex-end",
        padding: "0 0 0.2px",
        boxSizing: "border-box",
        maxWidth: "100%",
        width: "650px",
    },
    missionH1: {
        margin: 0,
        height: "130px",
        width: "508px",
        position: "relative",
        fontSize: "inherit",
        letterSpacing: "-0.72px",
        lineHeight: "64.8px",
        fontWeight: 400,
        fontFamily: "inherit",
        display: "inline-block",
    },
    missionBodyStack: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "24px",
        fontSize: "20px",
        fontFamily: "Inter, Arial, sans-serif",
        maxWidth: "100%",
    },
    missionSubHeadWrap: {
        width: "650px",
        filter: "blur(0)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        fontSize: "24px",
        fontFamily: "Stack Sans Text, Arial, sans-serif",
    },
    missionSubHead: {
        margin: 0,
        position: "relative",
        fontSize: "inherit",
        letterSpacing: "-1.2px",
        lineHeight: "36px",
        fontWeight: 400,
        fontFamily: "inherit",
    },
    missionBodyText: {
        alignSelf: "stretch",
        position: "relative",
        lineHeight: "32px",
    },
    missionBodyBlur: {
        width: "650px",
        filter: "blur(0)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        maxWidth: "100%",
    },

    // ── Why Join Us Section ──
    whySection: {
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "140px 24px 0",
        boxSizing: "border-box",
        position: "relative",
        isolation: "isolate",
        maxWidth: "100%",
    },
    whyOverlayBlur: {
        width: "100%",
        height: "120.07%",
        position: "absolute",
        margin: 0,
        top: "10%",
        right: 0,
        bottom: "-30.08%",
        left: 0,
        filter: "blur(300px)",
        borderRadius: "1560px",
        backgroundColor: "rgba(119, 145, 165, 0.6)",
        zIndex: 0,
        flexShrink: 0,
    },
    whyCard: {
        alignSelf: "stretch",
        borderRadius: "16px",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "80px 44px 140px",
        maxWidth: "100%",
        zIndex: 1,
        flexShrink: 0,
        boxSizing: "border-box",
        position: "relative",
    },
    whyHeaderRow: {
        alignSelf: "stretch",
        borderBottom: "1px solid #e6e6e6",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: "0 0 80px",
        gap: "20px",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "16px",
        color: "#0b0c0f",
        fontFamily: "Lilex, Arial, sans-serif",
    },
    whyHeaderLeft: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "20px",
        alignSelf: "stretch",
        maxWidth: "100%",
    },
    whyH1Wrap: {
        filter: "blur(0)",
        display: "flex",
        alignItems: "flex-end",
        padding: "0 0 0.2px 38px",
        boxSizing: "border-box",
        maxWidth: "100%",
        textAlign: "right",
        fontSize: "48px",
        fontFamily: "Stack Sans Text, Arial, sans-serif",
    },
    whyH1: {
        margin: 0,
        position: "relative",
        fontSize: "inherit",
        letterSpacing: "-0.72px",
        lineHeight: "64.8px",
        fontWeight: 400,
        fontFamily: "inherit",
        color: "#0b0c0f",
    },
    // Benefits list
    benefitsSection: {
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "24px 0 0",
        gap: "32px",
        textAlign: "left",
        fontSize: "16px",
        color: "#7791a5",
        fontFamily: "Lilex, Arial, sans-serif",
    },
    benefitsLabel: {
        alignSelf: "stretch",
        position: "relative",
        lineHeight: "24px",
        textTransform: "uppercase",
    },
    benefitRow: {
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "16px 0",
        boxSizing: "border-box",
        textAlign: "left",
        fontSize: "24px",
        color: "#0b0c0f",
        fontFamily: "Inter, Arial, sans-serif",
    },
    benefitLabelCell: {
        display: "flex",
        alignItems: "center",
        flexShrink: 0,
    },
    benefitLabelInner: {
        display: "flex",
        alignItems: "center",
        gap: "16px",
    },
    benefitIconWrap: {
        height: "24px",
        width: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    benefitLabelText: {
        margin: 0,
        position: "relative",
        fontSize: "inherit",
        lineHeight: "51.2px",
        fontWeight: 400,
        fontFamily: "inherit",
    },
    benefitImage: {
        width: "460px",
        height: "460px",
        margin: 0,
        position: "absolute",
        right: "44px",
        objectFit: "cover",
        maxWidth: "460px",
        borderRadius: "16px",
        border: "8px solid #ffffff",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.12)",
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), z-index 0.4s, box-shadow 0.4s",
        pointerEvents: "none",
    },

    // ── Specialists Section ──
    specialistsSection: {
        width: "1360px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "200px 0 0",
        gap: "20px",
        boxSizing: "border-box",
    },
    specialistsSidebar: {
        width: "550px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        maxWidth: "550px",
        textAlign: "left",
        fontSize: "16px",
        color: "#0b0c0f",
        fontFamily: "Lilex, Arial, sans-serif",
    },
    specialistsBadge: {
        filter: "blur(0)",
        borderRadius: "4px",
        backgroundColor: "rgba(255,255,255,0.8)",
        display: "flex",
        alignItems: "center",
        padding: "4px 8px 4px 6px",
        gap: "4px",
        flexShrink: 0,
    },
    specialistsH2Wrap: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "24px 9px 0 0",
        flexShrink: 0,
        fontSize: "64px",
        fontFamily: "Stack Sans Text, Arial, sans-serif",
    },
    specialistsH2: {
        margin: 0,
        position: "relative",
        fontSize: "inherit",
        letterSpacing: "-1.5px",
        lineHeight: "76.8px",
        fontWeight: 400,
        fontFamily: "inherit",
    },
    specialistsBodyWrap: {
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "14px 30px 0 0",
        flexShrink: 0,
        fontSize: "18px",
        fontFamily: "Inter, Arial, sans-serif",
    },
    specialistsBody: {
        alignSelf: "stretch",
        position: "relative",
        lineHeight: "28.8px",
    },
    doctorGrid: {
        width: "730px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    doctorGridInner: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        maxWidth: "100%",
    },
    doctorList: {
        alignSelf: "stretch",
        height: "570px",
        display: "grid",
        boxSizing: "border-box",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gridTemplateRows: "repeat(3, 182px)",
        gap: "12px",
    },
    // Doctor card
    doctorCard: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0 0 6px",
        textAlign: "left",
        fontSize: "16px",
        color: "#0b0c0f",
        fontFamily: "Inter, Arial, sans-serif",
    },
    doctorCardLink: {
        filter: "blur(0)",
        borderRadius: "16px",
        backgroundColor: "#fff",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "12px",
        alignSelf: "stretch",
        gap: "20px",
    },
    doctorCardTop: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        alignSelf: "stretch",
        gap: "20px",
    },
    doctorCardArrowWrap: {
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px",
    },
    doctorCardArrow: {
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "1920px",
    },
    doctorArrowImg: {
        width: "8px",
        height: "8px",
        position: "relative",
        objectFit: "cover",
    },
    doctorPhoto: {
        height: "80px",
        width: "80px",
        borderRadius: "4px",
        objectFit: "cover",
    },
    doctorInfo: {
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "4px",
    },
    doctorNameWrap: {
        alignSelf: "stretch",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    },
    doctorName: {
        alignSelf: "stretch",
        position: "relative",
        lineHeight: "24px",
        textTransform: "uppercase",
        fontWeight: 500,
    },
    doctorSpecialtyWrap: {
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        color: "#505050",
    },
    doctorSpecialty: {
        alignSelf: "stretch",
        position: "relative",
        lineHeight: "24px",
    },

    // ── Job Openings Section ──
    jobsSection: {
        width: "1360px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "100px 0 0",
        gap: "80px",
        boxSizing: "border-box",
        textAlign: "left",
        fontSize: "16px",
        color: "#0b0c0f",
        fontFamily: "Lilex, Arial, sans-serif",
        maxWidth: "100%",
    },
    jobsHeader: {
        alignSelf: "stretch",
        filter: "blur(0)",
        borderBottom: "1px solid #e6e6e6",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        padding: "0 0 48px",
        gap: "20px",
        boxSizing: "border-box",
    },
    jobsHeaderLeft: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        minWidth: "410px",
        maxWidth: "410px",
    },
    jobsH1Wrap: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "24px 20px 0 0",
        flexShrink: 0,
        fontSize: "64px",
        fontFamily: "Stack Sans Text, Arial, sans-serif",
    },
    jobsH1: {
        margin: 0,
        position: "relative",
        fontSize: "inherit",
        letterSpacing: "-1.5px",
        lineHeight: "76.8px",
        fontWeight: 400,
        fontFamily: "inherit",
    },
    jobsHeaderRight: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        minWidth: "247px",
        maxWidth: "380px",
        color: "#505050",
        fontFamily: "Inter, Arial, sans-serif",
    },
    jobsSubText: {
        alignSelf: "stretch",
        position: "relative",
        lineHeight: "24px",
    },
    // Table
    jobsTable: {
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        fontSize: "18px",
        color: "#7791a5",
    },
    jobsTableHead: {
        alignSelf: "stretch",
        height: "44.8px",
        display: "grid",
        boxSizing: "border-box",
        gridTemplateColumns: "1fr 1fr 1fr 0.75fr 0.75fr 0.75fr",
        gridTemplateRows: "28.796899795532227px",
        gap: "16px",
        paddingLeft: "16px",
        paddingBottom: "16px",
        overflow: "auto",
    },
    jobsTableHeadCell: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0 0 0.8px",
        boxSizing: "border-box",
    },
    jobsTableHeadText: {
        position: "relative",
        lineHeight: "28.8px",
        textTransform: "uppercase",
    },
    jobsTableBody: {
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    },
    // Job row
    jobRow: {
        alignSelf: "stretch",
        height: "89px",
        filter: "blur(0)",
        backgroundColor: "#fff",
        borderTop: "1px solid #e6e6e6",
        boxSizing: "border-box",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 0.75fr 0.75fr 0.75fr",
        alignItems: "center",
        gap: "16px",
        paddingLeft: "16px",
        paddingRight: "16px",
        textAlign: "left",
        fontSize: "18px",
        color: "#505050",
        fontFamily: "Inter, Arial, sans-serif",
    },
    jobCellDate: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        color: "#7791a5",
    },
    jobCellTitle: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        color: "#0b0c0f",
    },
    jobCellDept: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        color: "#505050",
    },
    jobCellCommit: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        color: "#505050",
    },
    jobCellLocation: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        color: "#505050",
    },
    jobCellText: {
        position: "relative",
        lineHeight: "28.8px",
        color: "inherit",
    },
    jobSeeBtn: {
        cursor: "pointer",
        border: 0,
        padding: "12px 20px",
        backgroundColor: "#f1f2f1",
        height: "48px",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        position: "relative",
        isolation: "isolate",
    },
    jobSeeBtnText: {
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0 3px",
        zIndex: 2,
        position: "relative",
        fontSize: "16px",
        lineHeight: "24px",
        textTransform: "uppercase",
        fontWeight: 500,
        fontFamily: "Lilex, Arial, sans-serif",
        color: "#0b0c0f",
    },
    jobSeeBtnArrow: {
        margin: 0,
        position: "absolute",
        top: "20px",
        left: "126.6px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "1920px",
        zIndex: 1,
    },
    jobSeeBtnIcon: {
        width: "24px",
        height: "24px",
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
        zIndex: 1,
    },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

const Badge = ({ text }: { text: string }) => (
    <div className={styles.badge} style={s.badge}>
        <div style={s.badgeIconWrap}>
            <img style={s.badgeIcon} loading="lazy" alt="" src="/SVG.svg" />
        </div>
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
            }}
        >
            <div style={s.badgeText}>{text}</div>
        </div>
    </div>
);

const BenefitRow = ({
    label,
}: {
    label: string;
}) => {
    return (
        <section className={styles.benefitRow} style={s.benefitRow}>
            <div className={styles.benefitLabelCell} style={s.benefitLabelCell}>
                <div className={styles.benefitLabelInner} style={s.benefitLabelInner}>
                    <div style={s.benefitIconWrap}>
                        <img style={s.badgeIcon} loading="lazy" alt="" src="/Vector(1).png" />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                        }}
                    >
                        <h1 className={styles.benefitLabelText} style={s.benefitLabelText}>{label}</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

const DoctorCard = ({ item }: { item: DoctorItem }) => {
    const cardStyle: CSSProperties = useMemo(
        () => ({
            ...s.doctorCard,
            gridColumn: item.gridColumn,
            gridRow: item.gridRow,
        }),
        [item.gridColumn, item.gridRow]
    );
    return (
        <div className={styles.doctorCard} style={cardStyle}>
            <div className={styles.doctorCardLink} style={s.doctorCardLink}>
                <div className={styles.doctorCardTop} style={s.doctorCardTop}>
                    <div className={styles.doctorCardArrowWrap} style={s.doctorCardArrowWrap}>
                        <div className={styles.doctorCardArrow} style={s.doctorCardArrow}>
                            <img
                                className={styles.doctorArrowImg}
                                style={s.doctorArrowImg}
                                alt=""
                                src="/699f6877b8f1c6d2edfe4bd7-Button-20Ball-svg@2x.png"
                            />
                        </div>
                    </div>
                    <img
                        className={styles.doctorPhoto}
                        style={s.doctorPhoto}
                        loading="lazy"
                        alt=""
                        src={item.container}
                    />
                </div>
                <div className={styles.doctorInfo} style={s.doctorInfo}>
                    <div className={styles.doctorNameWrap} style={s.doctorNameWrap}>
                        <div className={styles.doctorName} style={s.doctorName}>{item.name}</div>
                    </div>
                    <div className={styles.doctorSpecialtyWrap} style={s.doctorSpecialtyWrap}>
                        <div className={styles.doctorSpecialty} style={s.doctorSpecialty}>{item.specialty}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const JobRow = ({ item }: { item: JobItem }) => (
    <div className={styles.jobRow} style={s.jobRow}>
        <div className={styles.jobCellDate} style={s.jobCellDate}>
            <div className={styles.jobCellText} style={s.jobCellText}>{item.date}</div>
        </div>
        <div className={styles.jobCellTitle} style={s.jobCellTitle}>
            <div className={styles.jobCellText} style={s.jobCellText}>{item.title}</div>
        </div>
        <div className={styles.jobCellDept} style={s.jobCellDept}>
            <div className={styles.jobCellText} style={s.jobCellText}>{item.department}</div>
        </div>
        <div className={styles.jobCellCommit} style={s.jobCellCommit}>
            <div className={styles.jobCellText} style={s.jobCellText}>{item.commitment}</div>
        </div>
        <div className={styles.jobCellLocation} style={s.jobCellLocation}>
            <div className={styles.jobCellText} style={s.jobCellText}>{item.location || "On-site"}</div>
        </div>
        <Link to={item.id ? `/career/${item.id}` : "/career"} className={styles.jobSeeBtn} style={{ ...s.jobSeeBtn, textDecoration: "none" }}>
            <div className={styles.jobSeeBtnText} style={{ ...s.jobSeeBtnText, flexDirection: "row", gap: "6px", alignItems: "center", fontSize: "14px", letterSpacing: "0.5px" }}>
                <span>SEE ROLE</span>
                <span style={{ fontSize: "24px", lineHeight: 0, paddingBottom: "2px" }}>•</span>
            </div>
        </Link>
    </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const JobBoardSection: FunctionComponent = () => {
    const [jobList, setJobList] = useState<JobItem[]>(jobs);

    useEffect(() => {
        getPublicJobRoles()
            .then((res: any) => {
                if (res.success && Array.isArray(res.data) && res.data.length > 0) {
                    const formatted = res.data.map((r: any) => ({
                        id: r.id,
                        date: new Date(r.createdAt || r.date || Date.now()).toISOString().split("T")[0],
                        title: r.title,
                        department: r.department,
                        commitment: r.commitment || "Full-time",
                        location: r.location || "On-site"
                    }));
                    setJobList(formatted);
                }
            })
            .catch((err) => console.error("Error fetching job roles:", err));
    }, []);
    return (
        <div className={styles.pageRoot} style={s.pageRoot}>
            {/* ── 1. Hero ── */}
            <main className={styles.heroSection} style={s.heroSection}>
                <div className={styles.heroInner} style={s.heroInner}>
                    <section className={styles.heroCopy} style={s.heroCopy}>
                        <div className={styles.badge} style={s.badge}>
                            <div style={s.badgeIconWrap}>
                                <img style={s.badgeIcon} loading="lazy" alt="" src="/SVG.svg" />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                }}
                            >
                                <div style={s.badgeText}>JOB BOARD</div>
                            </div>
                        </div>
                        <div className={styles.heroTitleWrap} style={s.heroTitleWrap}>
                            <div style={s.heroTitleInner}>
                                <h1 className={styles.heroH1} style={s.heroH1}>
                                    Build the Future of{" "}
                                    <br /> Healthcare in Odisha
                                </h1>
                            </div>
                        </div>
                        <div className={styles.heroSubWrap} style={s.heroSubWrap}>
                            <div style={s.heroSubInner}>
                                <div className={styles.heroSubText} style={s.heroSubText}>
                                    Join a team dedicated to clinical excellence and compassionate
                                    care. We are raising the standard of healthcare in western
                                    Odisha, one patient at a time.
                                </div>
                            </div>
                        </div>
                    </section>
                    <img
                        className={styles.heroImage}
                        style={s.heroImage}
                        loading="lazy"
                        alt=""
                        src="/team-hero.jpg"
                    />
                </div>
            </main>

            {/* ── 2. Mission ── */}
            <section className={styles.missionSection} style={s.missionSection}>
                <div className={styles.missionRow} style={s.missionRow}>
                    {/* Left badge column */}
                    <section className={styles.missionBadgeCol} style={s.missionBadgeCol}>
                        <Badge text="ABOUT OUR VISION" />
                    </section>

                    {/* Right copy column */}
                    <section className={styles.missionCopyCol} style={s.missionCopyCol}>
                        <div className={styles.missionH1Wrap} style={s.missionH1Wrap}>
                            <h1 className={styles.missionH1} style={s.missionH1}>
                                Make a Difference and{" "}
                                <br /> Transform Lives
                            </h1>
                        </div>
                        <div className={styles.missionBodyStack} style={s.missionBodyStack}>
                            <div className={styles.missionSubHeadWrap} style={s.missionSubHeadWrap}>
                                <h3 className={styles.missionSubHead} style={s.missionSubHead}>
                                    Join the team redefining healthcare in Balangir.
                                </h3>
                            </div>
                            <div className={styles.missionBodyBlur} style={s.missionBodyBlur}>
                                <div className={styles.missionBodyText} style={s.missionBodyText}>
                                    We believe clinical excellence starts with a supportive
                                    environment. Our focus is on building a workplace where your
                                    expertise grows alongside our patients' wellbeing — ensuring a
                                    balanced, meaningful and rewarding professional life.
                                </div>
                            </div>
                            <div className={styles.missionBodyBlur} style={s.missionBodyBlur}>
                                <div className={styles.missionBodyText} style={s.missionBodyText}>
                                    Swaraj Hospital combines advanced diagnostic infrastructure
                                    with a deeply human approach to care. By joining us, you
                                    become a key part of a mission to make world-class healthcare
                                    accessible to every family in western Odisha.
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            {/* ── 3. Why Join Us ── */}
            <section className={styles.whySection} style={s.whySection}>
                <div style={s.whyOverlayBlur} />
                <div className={styles.whyCard} style={s.whyCard}>
                    {/* Header */}
                    <div className={styles.whyHeaderRow} style={s.whyHeaderRow}>
                        <div className={styles.whyHeaderLeft} style={s.whyHeaderLeft}>
                            <Badge text="WHY JOIN US?" />
                        </div>
                        <div className={styles.whyH1Wrap} style={s.whyH1Wrap}>
                            <h1 className={styles.whyH1} style={s.whyH1}>
                                Love your work,
                                <br />
                                Grow your career.
                            </h1>
                        </div>
                    </div>

                    {/* Benefits & Staff Testimonial Grid */}
                    <div className="w-full flex flex-col lg:flex-row justify-between items-stretch gap-10 pt-8">
                        {/* Left: Benefits List */}
                        <div className="flex-1 flex flex-col items-start gap-6 max-w-full lg:max-w-[52%]">
                            <div className={styles.benefitsLabel} style={s.benefitsLabel}>Benefits list</div>
                            <div className="w-full flex flex-col items-start">
                                {benefits.map((b, i) => (
                                    <BenefitRow
                                        key={i}
                                        label={b.label}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Right: Staff Voice Testimonial Card */}
                        <div className="flex-1 w-full lg:max-w-[44%] bg-[#F4F7F6] border border-[#E1E8E5] rounded-2xl p-8 lg:p-10 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] relative overflow-hidden group">
                            {/* Decorative background accent */}
                            <div className="absolute -right-6 -top-6 w-32 h-32 bg-[#7791A5]/10 rounded-full blur-2xl pointer-events-none" />

                            <div>
                                {/* Header Badge & Quote Icon */}
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-xs uppercase tracking-wider font-semibold text-[#7791A5] bg-white px-3.5 py-1.5 rounded-full border border-[#E2E8F0]">
                                        Staff Voice
                                    </span>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#005BB7] opacity-80">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" fill="currentColor"/>
                                    </svg>
                                </div>

                                {/* Quote Content */}
                                <blockquote className="text-[#0B0C0F] text-lg lg:text-xl font-normal leading-relaxed tracking-tight italic mb-8">
                                    “Joining Swaraj Hospital has been an incredibly rewarding journey. The collaborative medical culture, modern surgical infrastructure, and patient-first commitment empower us to deliver exceptional care every day.”
                                </blockquote>
                            </div>

                            {/* Author Info */}
                            <div className="flex items-center gap-4 pt-6 border-t border-[#E1E8E5]">
                                <img
                                    src="/doctors/dr-bikramaditya-padhi.jpeg"
                                    alt="Dr. Bikramaditya Padhi"
                                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0"
                                    onError={(e) => {
                                        (e.target as HTMLElement).setAttribute('src', '/Container5@2x.png');
                                    }}
                                />
                                <div>
                                    <h4 className="text-[#0B0C0F] font-semibold text-base leading-snug m-0">
                                        Dr. Bikramaditya Padhi
                                    </h4>
                                    <p className="text-[#7791A5] text-sm font-medium m-0 mt-0.5">
                                        Senior Consultant Specialist
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 4. Specialists ── */}
            <section className={styles.specialistsSection} style={s.specialistsSection}>
                {/* Sidebar */}
                <section className={styles.specialistsSidebar} style={s.specialistsSidebar}>
                    <div className={styles.specialistsBadge} style={s.specialistsBadge}>
                        <div style={s.badgeIconWrap}>
                            <img style={s.badgeIcon} alt="" src="/SVG.svg" />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                            }}
                        >
                            <div
                                className={styles.badgeText}
                                style={{
                                    ...s.badgeText,
                                    fontFamily: "Lilex, Arial, sans-serif",
                                }}
                            >
                                OUR SPECIALISTS
                            </div>
                        </div>
                    </div>
                    <div className={styles.specialistsH2Wrap} style={s.specialistsH2Wrap}>
                        <h1 className={styles.specialistsH2} style={s.specialistsH2}>
                            The Hands Behind{" "}
                            <br />
                            the Care
                        </h1>
                    </div>
                    <div className={styles.specialistsBodyWrap} style={s.specialistsBodyWrap}>
                        <div className={styles.specialistsBody} style={s.specialistsBody}>
                            From emergency medicine to advanced surgery, our specialists cover
                            every dimension of patient health.
                        </div>
                    </div>
                </section>

                {/* Doctor grid */}
                <div className={styles.doctorGrid} style={s.doctorGrid}>
                    <div className={styles.doctorGridInner} style={s.doctorGridInner}>
                        <div className={styles.doctorList} style={s.doctorList}>
                            {doctors.map((doc, i) => (
                                <DoctorCard key={i} item={doc} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 5. Job Openings ── */}
            <footer className={styles.jobsSection} style={s.jobsSection}>
                {/* Header */}
                <div className={styles.jobsHeader} style={s.jobsHeader}>
                    <div className={styles.jobsHeaderLeft} style={s.jobsHeaderLeft}>
                        <Badge text="CURRENT OPENINGS" />
                        <div className={styles.jobsH1Wrap} style={s.jobsH1Wrap}>
                            <h1 className={styles.jobsH1} style={s.jobsH1}>
                                Start your{" "}
                                <br />
                                new chapter
                            </h1>
                        </div>
                    </div>
                    <div className={styles.jobsHeaderRight} style={s.jobsHeaderRight}>
                        <div
                            style={{
                                alignSelf: "stretch",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                            }}
                        >
                            <div className={styles.jobsSubText} style={s.jobsSubText}>
                                Explore open roles that match your expertise. Join
                                <br />a team focused on excellence and growth.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className={styles.jobsTable} style={s.jobsTable}>
                    {/* Head row */}
                    <div className={styles.jobsTableHead} style={s.jobsTableHead}>
                        {[
                            { label: "DATE", col: 1 },
                            { label: "Title", col: 2 },
                            { label: "Department", col: 3 },
                            { label: "Commitment", col: 4 },
                            { label: "Location", col: 5 },
                        ].map(({ label, col }) => (
                            <div
                                key={col}
                                style={
                                    {
                                        ...s.jobsTableHeadCell,
                                        gridColumn: col,
                                        gridRow: 1,
                                    } as CSSProperties
                                }
                            >
                                <div style={s.jobsTableHeadText}>{label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Body rows */}
                    <div className={styles.jobsTableBody} style={s.jobsTableBody}>
                        {jobList.map((job, i) => (
                            <JobRow key={i} item={job} />
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default JobBoardSection;
