import { type FunctionComponent, useMemo, type CSSProperties, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Section3 from "./Section3";
import Section7 from "./Section7";
import { getPublicBlogs } from "../../services/user.service";
import styles from "./BlogsPage.module.css";

// ─── Types ───────────────────────────────────────────────────────────────────

type BlogCardProps = {
    category: string;
    title: string;
    description: string;
    image: string;
    gridColumn?: CSSProperties["gridColumn"];
    gridRow?: CSSProperties["gridRow"];
    bodyMinWidth?: CSSProperties["minWidth"];
    bodyAlignSelf?: CSSProperties["alignSelf"];
    ctaBorder?: CSSProperties["border"];
    ctaBtnBorder?: CSSProperties["border"];
    ctaBtnPadding?: CSSProperties["padding"];
    ctaBtnBg?: CSSProperties["backgroundColor"];
    slug?: string;
};

// ─── Blog Card ───────────────────────────────────────────────────────────────

const BlogCard: FunctionComponent<BlogCardProps> = ({
    category,
    title,
    description,
    image,
    gridColumn,
    gridRow,
    bodyMinWidth,
    bodyAlignSelf,
    ctaBorder,
    slug,
}) => {
    const cardStyle: CSSProperties = useMemo(
        () => ({ gridColumn, gridRow }),
        [gridColumn, gridRow]
    );
    const bodyStyle: CSSProperties = useMemo(
        () => ({ minWidth: bodyMinWidth, alignSelf: bodyAlignSelf }),
        [bodyMinWidth, bodyAlignSelf]
    );
    const ctaStyle: CSSProperties = useMemo(
        () => ({ border: ctaBorder }),
        [ctaBorder]
    );


    const finalSlug = slug || title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

    return (
        <Link to={`/blog/${finalSlug}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
            <section className={styles.blogCard} style={cardStyle}>
                <div className={styles.blogCardBody}>
                    <div className={styles.blogCardMeta} style={bodyStyle}>
                        <div className={styles.blogCardMetaInner}>
                            <div className={styles.blogCardCategory}>{category}</div>
                        </div>
                        <div className={styles.blogCardTitleWrap}>
                            <div className={styles.blogCardTitle}>{title}</div>
                        </div>
                        <div className={styles.blogCardDescWrap}>
                            <div className={styles.blogCardDesc}>{description}</div>
                        </div>
                    </div>
                    <div className={styles.blogCardCta} style={ctaStyle}>
                        <div className={styles.learnMore}>LEARN MORE</div>
                        <span className={styles.ctaDot}>•</span>
                    </div>
                </div>
                <img 
                    className={styles.blogCardImg} 
                    loading="lazy" 
                    alt="" 
                    src={image} 
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = "/Container@2x.png";
                    }}
                />
            </section>
        </Link>
    );
};

// ─── Main Component ───────────────────────────────────────────────────────────

type BlogsPageProps = {
    className?: string;
};

const BlogsPage: FunctionComponent<BlogsPageProps> = ({ className = "" }) => {
    const [blogs, setBlogs] = useState<BlogCardProps[]>([]);
    const [visibleCount, setVisibleCount] = useState(6);

    const handleShowMore = () => {
        setVisibleCount(prev => prev + 6);
    };

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await getPublicBlogs();
                if (res.success && Array.isArray(res.data) && res.data.length > 0) {
                    const mapped = res.data.map((blog: any, i: number) => {
                        const defaultImages = [
                            "/Container@2x.png",
                            "/Container1@2x.png",
                            "/Container2@2x.png",
                            "/Container3@2x.png",
                            "/Container4@2x.png",
                            "/Container5@2x.png"
                        ];
                        
                        let cleanDesc = blog.content
                            .replace(/[#*`>_\-]/g, "")
                            .replace(/\s+/g, " ")
                            .trim();
                        if (cleanDesc.length > 150) {
                            cleanDesc = cleanDesc.substring(0, 147) + "...";
                        }

                        // Determine category and title from the database title
                        const titleVal = blog.title || "";
                        const colonIdx = titleVal.indexOf(":");
                        let categoryVal = "PATIENT CARE:";
                        let titleClean = titleVal;
                        if (colonIdx !== -1) {
                            categoryVal = titleVal.substring(0, colonIdx + 1).toUpperCase();
                            titleClean = titleVal.substring(colonIdx + 1).trim();
                        } else {
                            // Guesses based on keywords
                            const lowerT = titleVal.toLowerCase();
                            if (lowerT.includes("heart") || lowerT.includes("cardiac")) {
                                categoryVal = "PATIENT CARE:";
                            } else if (lowerT.includes("mri") || lowerT.includes("scan")) {
                                categoryVal = "SPECIALITIES:";
                            } else if (lowerT.includes("delivery") || lowerT.includes("maternity") || lowerT.includes("expect")) {
                                categoryVal = "MATERNITY:";
                            } else if (lowerT.includes("icu") || lowerT.includes("emergency") || lowerT.includes("wheels")) {
                                categoryVal = "EMERGENCY CARE:";
                            } else if (lowerT.includes("joint") || lowerT.includes("habit") || lowerT.includes("ortho")) {
                                categoryVal = "WELLNESS:";
                            } else if (lowerT.includes("nabh") || lowerT.includes("accreditation") || lowerT.includes("quality")) {
                                categoryVal = "RESEARCH:";
                            }
                        }

                        return {
                            category: categoryVal,
                            title: titleClean,
                            description: cleanDesc,
                            image: blog.featuredImage || defaultImages[i % defaultImages.length],
                            gridColumn: String((i % 2) + 1),
                            gridRow: String(Math.floor(i / 2) + 1),
                            bodyMinWidth: i === 2 ? undefined : "253px",
                            bodyAlignSelf: i === 2 ? "stretch" : undefined,
                            ctaBtnBorder: "none",
                            ctaBtnPadding: "0",
                            ctaBtnBg: "transparent",
                            slug: blog.slug
                        };
                    });
                    setBlogs(mapped);
                } else {
                    setBlogs([]);
                }
            } catch (err) {
                console.error("Failed to load backend blogs:", err);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <div className={[styles.page, className].join(" ")} style={{ width: "100%" }}>
            <Box className="sticky top-0 z-[100] w-full bg-[#FFFFFF] shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
                <Navbar />
            </Box>
            {/* ── Main content wrapper ── */}
            <main className={styles.mainWrap}>
                {/* Hero */}
                <header className={styles.heroSection}>
                    <img
                        className={styles.heroBg}
                        alt=""
                        src="/Blogs hero Image.png"
                    />
                    <div className={styles.heroOverlay} />
                    <div className={styles.heroContent}>
                        <section className={styles.heroTop}>
                            <div className={styles.heroBadge}>
                                <button className={styles.heroBadgeBtn}>
                                    <img
                                        className={styles.heroBadgeIcon}
                                        loading="lazy"
                                        alt=""
                                        src="/SVG.svg"
                                    />
                                </button>
                                <div>
                                    <div className={styles.heroBadgeText}>INNOVATION</div>
                                </div>
                            </div>
                            <div className={styles.heroHeadingWrap}>
                                <h1 className={styles.heroHeading}>
                                    Insights into
                                    <br />
                                    Modern Healthcare
                                </h1>
                            </div>
                        </section>
                        <section className={styles.heroBottom}>
                            <div className={styles.heroSubWrap}>
                                <div className={styles.heroSub}>
                                    Exploring the intersection of medical precision and
                                    compassionate care through expert-led articles from the
                                    specialists at Swaraj Hospital.
                                </div>
                            </div>
                        </section>
                    </div>
                </header>

                {/* Blog Grid */}
                <div className={styles.gridSection}>
                    <div className={styles.blogGrid}>
                        {blogs.slice(0, visibleCount).map((card, i) => (
                            <BlogCard key={i} {...card} />
                        ))}
                    </div>
                    {blogs.length > visibleCount && (
                        <div className={styles.showMoreContainer}>
                            <button className={styles.showMoreBtn} onClick={handleShowMore}>
                                Show More
                            </button>
                        </div>
                    )}
                </div>
            </main>

            {/* Advanced Multispeciality Care */}
            <Box className="w-full">
                <Section3 />
            </Box>

            {/* Footer Section */}
            <Box className="w-full">
                <Section7 />
            </Box>
        </div>
    );
};

export default BlogsPage;
