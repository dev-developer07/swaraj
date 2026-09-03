import { type FunctionComponent, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Section3 from "../components/Section3";
import Section7 from "../components/Section7";
import { getPublicBlogBySlug, getPublicBlogs } from "../../services/user.service";
import { formatImageUrl } from "../../utils/imageUtils";

const ArticleDetail: FunctionComponent = () => {
    const { slug } = useParams<{ slug: string }>();
    const [blog, setBlog] = useState<any>(null);
    const [allBlogs, setAllBlogs] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    useEffect(() => {
        async function fetchBlogAndAll() {
            setLoading(true);
            setError(null);
            try {
                if (slug) {
                    const res = await getPublicBlogBySlug(slug);
                    if (res && res.success && res.data) {
                        setBlog(res.data);
                    } else {
                        setError("Article not found.");
                    }
                }

                // Fetch other blogs for the "Next Article" card
                const allRes = await getPublicBlogs();
                if (allRes && allRes.success && Array.isArray(allRes.data)) {
                    setAllBlogs(allRes.data);
                }
            } catch (err: any) {
                console.error("Error loading blog details:", err);
                setError("Failed to load article.");
            } finally {
                setLoading(false);
            }
        }
        fetchBlogAndAll();
    }, [slug]);

    const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.style.display = "none";
    };

    const getBlogCategoryAndTitle = (b: any) => {
        if (!b) return { category: "WELLNESS", cleanTitle: "" };
        const title = b.title || "";
        const colonIdx = title.indexOf(":");
        if (colonIdx !== -1) {
            return {
                category: b.category || title.substring(0, colonIdx).trim().toUpperCase(),
                cleanTitle: title.substring(colonIdx + 1).trim()
            };
        }
        // Guess based on keywords
        const lowerTitle = title.toLowerCase();
        if (lowerTitle.includes("icu") || lowerTitle.includes("emergency") || lowerTitle.includes("ambulance")) {
            return { category: "EMERGENCY CARE", cleanTitle: title };
        }
        if (lowerTitle.includes("delivery") || lowerTitle.includes("maternity") || lowerTitle.includes("pregnant") || lowerTitle.includes("mother")) {
            return { category: "MATERNITY", cleanTitle: title };
        }
        if (lowerTitle.includes("joint") || lowerTitle.includes("habit") || lowerTitle.includes("age") || lowerTitle.includes("health")) {
            return { category: "WELLNESS", cleanTitle: title };
        }
        if (lowerTitle.includes("nabh") || lowerTitle.includes("accreditation") || lowerTitle.includes("quality")) {
            return { category: "RESEARCH", cleanTitle: title };
        }
        return { category: b.category || "WELLNESS", cleanTitle: title };
    };

    const getBlogSubtitle = (b: any) => {
        if (!b) return "";
        // Parse out first paragraph or non-heading text
        const paragraphs = b.content ? b.content.split("\n") : [];
        for (const p of paragraphs) {
            const trimmed = p.trim();
            if (trimmed && !trimmed.startsWith("#") && !trimmed.startsWith("-") && !trimmed.startsWith(">")) {
                if (trimmed.length > 150) {
                    return trimmed.substring(0, 150) + "...";
                }
                return trimmed;
            }
        }
        return "Read the latest clinical insights and updates from Swaraj Hospital's medical experts.";
    };

    const calculateReadTime = (text: string) => {
        if (!text) return "5 Min Read";
        const words = text.trim().split(/\s+/).length;
        const minutes = Math.max(1, Math.ceil(words / 200));
        return `${minutes} Min Read`;
    };

    const renderBlogContent = (contentString: string) => {
        if (!contentString) return null;
        const parts = contentString.split("\n");
        return parts.map((part, index) => {
            const trimmed = part.trim();
            if (!trimmed) return null;

            // Heading 3
            if (trimmed.startsWith("###") || trimmed.startsWith("##") || trimmed.startsWith("#")) {
                const headingText = trimmed.replace(/^#+\s*/, "");
                return (
                    <div key={index} className="ap-b2-heading-padded">
                        <h3 className="ap-b2-h3">{headingText}</h3>
                    </div>
                );
            }

            // Quote
            if (trimmed.startsWith(">")) {
                const quoteText = trimmed.replace(/^>\s*/, "").replace(/^"/, "").replace(/"$/, "");
                return (
                    <div key={index} className="ap-b2-quote-wrap">
                        <div className="ap-b2-quote">
                            "{quoteText}"
                        </div>
                    </div>
                );
            }

            // Bullet points
            if (trimmed.startsWith("-") || trimmed.startsWith("*")) {
                const itemText = trimmed.replace(/^[-*]\s*/, "");
                const colonIdx = itemText.indexOf(":");
                const boldPart = colonIdx !== -1 ? itemText.substring(0, colonIdx + 1) : "";
                const regularPart = colonIdx !== -1 ? itemText.substring(colonIdx + 1) : itemText;

                return (
                    <section key={index} className="ap-b2-list">
                        <div className="ap-b2-item ap-b2-item-0" style={{ backgroundImage: "none", paddingLeft: "24px", position: "relative" }}>
                            {/* SVG indicator for bullet */}
                            <span style={{ position: "absolute", left: "0", top: "10px", width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#7791a5" }}></span>
                            <div className="ap-b2-item-text">
                                {boldPart ? <span className="ap-b2-bold" style={{ marginRight: "4px" }}>{boldPart}</span> : null}
                                <span className="ap-b2-dim">{regularPart}</span>
                            </div>
                        </div>
                    </section>
                );
            }

            // Default paragraph
            return (
                <div key={index} className="ap-b2-body" style={{ marginBottom: "16px" }}>
                    <div className="ap-b2-para">{trimmed}</div>
                </div>
            );
        });
    };

    if (loading) {
        return (
            <div className="w-full flex flex-col items-center bg-[#ffffff] overflow-hidden min-h-screen">
                <Navbar />
                <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh" }}>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: "18px", color: "#505050" }}>
                        Loading clinical article...
                    </div>
                </div>
                <Section7 />
            </div>
        );
    }

    if (error || !blog) {
        return (
            <div className="w-full flex flex-col items-center bg-[#ffffff] overflow-hidden min-h-screen">
                <Navbar />
                <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px", minHeight: "60vh" }}>
                    <div style={{ fontFamily: "Stack Sans Text, sans-serif", fontSize: "28px", color: "#0b0c0f" }}>
                        Article Not Found
                    </div>
                    <Link to="/articles" className="ap-next-card-btn" style={{ textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #0b0c0f" }}>
                        <span className="ap-next-card-btn-text">Back to Blogs</span>
                    </Link>
                </div>
                <Section7 />
            </div>
        );
    }

    const { category, cleanTitle } = getBlogCategoryAndTitle(blog);
    const subtitle = getBlogSubtitle(blog);
    const readTime = calculateReadTime(blog.content);
    const formattedDate = blog.createdAt
        ? new Date(blog.createdAt).toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          }).toUpperCase()
        : "JUNE 2025";

    // Next Article finding logic
    const nextBlog = allBlogs.find(b => b.slug !== slug) || allBlogs.find(b => b.slug === slug) || null;
    const nextInfo = getBlogCategoryAndTitle(nextBlog);
    const nextSubtitle = getBlogSubtitle(nextBlog);

    return (
        <>
            <style>{`
                @import url("https://fonts.googleapis.com/css2?family=Lilex:ital,wght@0,400;0,500&display=swap");
                @import url("https://fonts.googleapis.com/css2?family=Stack+Sans+Text:ital,wght@0,400;0,500&display=swap");
                @import url("https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;1,400&display=swap");

                .ap-root {
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                  position: relative;
                  background-color: #fff;
                  align-items: center;
                  gap: 44px;
                  line-height: normal;
                  letter-spacing: normal;
                }

                /* ── Section (hero) ── */
                .ap-section {
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  box-sizing: border-box;
                  max-width: 100%;
                  filter: blur(0);
                  overflow: hidden;
                  padding: 0px 280px 80px;
                  background-image: url(/Section@3x.png);
                  background-color: #0b0c0f;
                  background-size: cover;
                  background-repeat: no-repeat;
                  background-position: top;
                }
                .ap-section-inner {
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  box-sizing: border-box;
                  max-width: 100%;
                  justify-content: space-between;
                  padding: 80px 0px 0px;
                  gap: 0px;
                  flex-shrink: 0;
                }
                .ap-hero-badge-wrap {
                  filter: blur(0);
                  display: flex;
                  width: 100%;
                  flex-direction: column;
                  align-items: flex-start;
                  gap: 24px;
                  max-width: 600px;
                  text-align: left;
                  font-size: 16px;
                  color: #0b0c0f;
                  font-family: Lilex, Arial, sans-serif;
                }
                .ap-badge {
                  filter: blur(0);
                  display: flex;
                  width: max-content;
                  height: 32px;
                  border-radius: 4px;
                  background-color: #f1f2f1;
                  align-items: center;
                  padding: 4px 8px 4px 6px;
                  box-sizing: border-box;
                  gap: 4px;
                }
                .ap-badge-icon {
                  height: 20px;
                  width: 20px;
                  position: relative;
                }
                .ap-badge-text-wrap {
                  height: 24px;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                }
                .ap-badge-text {
                  position: relative;
                  line-height: 24px;
                  text-transform: uppercase;
                  font-weight: 500;
                }
                .ap-hero-title-wrap {
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  padding: 0px 20px 0px 0px;
                  font-size: 64px;
                  color: #fff;
                  font-family: Stack Sans Text, Arial, sans-serif;
                }
                .ap-hero-title {
                  width: 100%;
                  position: relative;
                  font-size: inherit;
                  margin: 0;
                  letter-spacing: -1.5px;
                  line-height: 76.8px;
                  display: inline-block;
                  max-width: 575.8px;
                }
                .ap-hero-sub-wrap {
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-end;
                  max-width: 100%;
                  text-align: left;
                  font-size: 32px;
                  color: #fff;
                  font-family: Inter, Arial, sans-serif;
                }
                .ap-hero-sub-inner {
                  width: 100%;
                  filter: blur(0);
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  max-width: 620px;
                }
                .ap-hero-subtitle {
                  width: 100%;
                  position: relative;
                  line-height: 51.2px;
                  display: inline-block;
                  max-width: 620px;
                }

                /* ── Content section wrapper ── */
                .ap-content {
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  padding: 96px 0px;
                  box-sizing: border-box;
                  max-width: 640px;
                }

                /* ── Blur1 (article meta) ── */
                .ap-blur1 {
                  filter: blur(0);
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  padding: 12px 0px 24px;
                  gap: 23.4px;
                  text-align: left;
                  font-size: 16px;
                  color: #0b0c0f;
                  font-family: Lilex, Arial, sans-serif;
                }
                .ap-blur1-badge {
                  filter: blur(0);
                  display: flex;
                  width: max-content;
                  height: 32px;
                  border-radius: 4px;
                  background-color: #f1f2f1;
                  align-items: center;
                  padding: 4px 8px 4px 6px;
                  box-sizing: border-box;
                  gap: 4px;
                }
                .ap-blur1-badge-icon {
                  height: 20px;
                  width: 20px;
                  position: relative;
                }
                .ap-blur1-badge-text-wrap {
                  height: 24px;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                }
                .ap-blur1-emergency-care {
                  position: relative;
                  line-height: 24px;
                  text-transform: uppercase;
                  font-weight: 500;
                }
                .ap-blur1-heading {
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  font-size: 48px;
                  font-family: Stack Sans Text, Arial, sans-serif;
                }
                .ap-blur1-title {
                  width: 100%;
                  position: relative;
                  font-size: inherit;
                  letter-spacing: -0.72px;
                  line-height: 64.8px;
                  display: inline-block;
                  max-width: 640px;
                }
                .ap-blur1-meta {
                  align-self: stretch;
                  padding: 0.6px 0px 0px;
                  gap: 16px;
                  display: flex;
                  flex-wrap: wrap;
                  align-items: center;
                }
                .ap-blur1-tag {
                  height: 34px;
                  border-radius: 4px;
                  border: 1px solid #e6e6e6;
                  box-sizing: border-box;
                  display: flex;
                  align-items: center;
                  padding: 4px 8px;
                  gap: 8px;
                }
                .ap-blur1-tag-icon {
                  height: 18px;
                  width: 18px;
                  position: relative;
                }
                .ap-blur1-tag-author {
                  position: relative;
                  line-height: 24px;
                  font-weight: 500;
                }
                .ap-blur1-tag-btn {
                  cursor: pointer;
                  border: 1px solid #e6e6e6;
                  padding: 4px 8px;
                  background-color: transparent;
                  height: 34px;
                  border-radius: 4px;
                  box-sizing: border-box;
                  display: flex;
                  align-items: center;
                  gap: 8px;
                }
                .ap-blur1-tag-btn-text {
                  position: relative;
                  font-size: 16px;
                  line-height: 24px;
                  font-weight: 500;
                  font-family: Lilex, Arial, sans-serif;
                  color: #0b0c0f;
                  text-align: left;
                }

                /* ── Divider ── */
                .ap-divider {
                  align-self: stretch;
                  height: 2px;
                  position: relative;
                  border: 1px solid #e6e6e6;
                  box-sizing: border-box;
                }

                /* ── Blur2 (article body) ── */
                .ap-blur2 {
                  filter: blur(0);
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  padding: 40px 0px 0px;
                  gap: 11px;
                  text-align: left;
                  font-size: 20px;
                  color: #0b0c0f;
                  font-family: Stack Sans Text, Arial, sans-serif;
                }
                .ap-b2-heading {
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                }
                .ap-b2-h3 {
                  margin: 0;
                  align-self: stretch;
                  position: relative;
                  font-size: inherit;
                  line-height: 30px;
                  font-weight: 400;
                  font-family: inherit;
                }
                .ap-b2-body {
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  padding: 0px 0px 0.8px;
                  font-size: 18px;
                  color: #505050;
                  font-family: Inter, Arial, sans-serif;
                }
                .ap-b2-para {
                  width: 100%;
                  position: relative;
                  line-height: 28.8px;
                  display: inline-block;
                  max-width: 640px;
                }
                .ap-b2-figure {
                  align-self: stretch;
                  height: auto;
                  max-height: 430.8px;
                  position: relative;
                  max-width: 100%;
                  overflow: hidden;
                  flex-shrink: 0;
                  object-fit: cover;
                }
                .ap-b2-heading-padded {
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  padding: 29px 0px 0px;
                }
                .ap-b2-list {
                  align-self: stretch;
                  overflow: hidden;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  padding: 5px 0px 0px;
                  gap: 16px;
                  text-align: left;
                  font-size: 16px;
                  color: #0b0c0f;
                  font-family: Inter, Arial, sans-serif;
                }
                .ap-b2-item {
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  padding: 0px 0px 0px 36px;
                  background-size: cover;
                  background-repeat: no-repeat;
                  background-position: top;
                }
                .ap-b2-item-text {
                  width: 100%;
                  position: relative;
                  line-height: 24px;
                  display: inline-block;
                  max-width: 604px;
                }
                .ap-b2-bold { font-weight: 500; line-height: 24px; }
                .ap-b2-dim { color: #505050; line-height: 24px; }
                .ap-b2-quote-wrap {
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  padding: 29px 0px 0px;
                  font-size: 24px;
                }
                .ap-b2-quote {
                  width: 100%;
                  position: relative;
                  line-height: 36px;
                  font-weight: 500;
                  display: inline-block;
                  max-width: 640px;
                }
                .ap-b2-conclusion {
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  padding: 0px 0px 0.9px;
                  font-size: 18px;
                  color: #505050;
                  font-family: Inter, Arial, sans-serif;
                }

                /* ── Next Article ── */
                .ap-next {
                  align-self: stretch;
                  border-top: 1px solid #e6e6e6;
                  box-sizing: border-box;
                  padding: 124px 0px 0px;
                  gap: 14px;
                  max-width: 100%;
                  text-align: left;
                  font-size: 20px;
                  color: #0b0c0f;
                  font-family: Stack Sans Text, Arial, sans-serif;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                }
                .ap-next-heading {
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                }
                .ap-next-title {
                  margin: 0;
                  align-self: stretch;
                  position: relative;
                  font-size: inherit;
                  line-height: 30px;
                  font-weight: 400;
                  font-family: inherit;
                }
                .ap-next-card {
                  align-self: stretch;
                  filter: blur(0);
                  border-radius: 12px;
                  background-color: #f1f2f1;
                  display: flex;
                  align-items: flex-start;
                  justify-content: space-between;
                  padding: 24px;
                  box-sizing: border-box;
                  gap: 0px;
                  row-gap: 20px;
                  max-width: 100%;
                  font-size: 14px;
                  color: #7791a5;
                  font-family: Lilex, Arial, sans-serif;
                }
                .ap-next-card-content {
                  flex: 1;
                  padding: 0px 16px 0px 0px;
                  box-sizing: border-box;
                  gap: 85.7px;
                  min-width: 175px;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                }
                .ap-next-card-inner {
                  align-self: stretch;
                  height: auto;
                  gap: 8px;
                  min-width: 253px;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                }
                .ap-next-card-tag {
                  width: 84px;
                  height: 21px;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                }
                .ap-next-card-tag-text {
                  position: relative;
                  line-height: 21px;
                  text-transform: uppercase;
                }
                .ap-next-card-heading {
                  width: 253px;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  padding: 36px 0px 0px;
                  box-sizing: border-box;
                  font-size: 24px;
                  color: #0b0c0f;
                  font-family: Stack Sans Text, Arial, sans-serif;
                }
                .ap-next-card-heading-text {
                  width: 100%;
                  position: relative;
                  letter-spacing: -1.2px;
                  line-height: 36px;
                  display: inline-block;
                  max-width: 253px;
                }
                .ap-next-card-desc {
                  width: 253px;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  font-size: 16px;
                  color: #505050;
                  font-family: Inter, Arial, sans-serif;
                }
                .ap-next-card-desc-text {
                  width: 100%;
                  position: relative;
                  line-height: 24px;
                  display: inline-block;
                  max-width: 253px;
                }
                .ap-next-card-btn {
                  cursor: pointer;
                  border: 0;
                  padding: 8px 16px;
                  background-color: #fff;
                  width: 158px;
                  height: 40px;
                  border-radius: 8px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  box-sizing: border-box;
                }
                .ap-next-card-btn-inner {
                  height: 24px;
                  overflow: hidden;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  padding: 0px 3px;
                }
                .ap-next-card-btn-text {
                  position: relative;
                  font-size: 16px;
                  line-height: 24px;
                  text-transform: uppercase;
                  font-weight: 500;
                  font-family: Lilex, Arial, sans-serif;
                  color: #0b0c0f;
                  text-align: left;
                }
                .ap-next-card-arrow {
                  height: 24px;
                  width: 24px;
                  position: relative;
                }
                .ap-next-card-img {
                  width: 323px;
                  height: 180px;
                  position: relative;
                  border-radius: 4px;
                  object-fit: cover;
                  max-width: 100%;
                }

                /* ── Responsive ── */
                @media screen and (max-width: 1050px) {
                  .ap-section { padding-left: 140px; padding-right: 140px; }
                  .ap-hero-title { font-size: 51px; line-height: 61px; }
                  .ap-hero-subtitle { font-size: 26px; line-height: 41px; }
                  .ap-blur1-title { font-size: 38px; line-height: 52px; }
                }
                @media screen and (max-width: 750px) {
                  .ap-root { gap: 22px; }
                  .ap-section { padding-left: 24px; padding-right: 24px; padding-bottom: 40px; }
                  .ap-section-inner { padding-top: 40px; }
                  .ap-hero-title, .ap-hero-subtitle, .ap-blur1-title { max-width: 100%; font-size: 36px; line-height: 44px; }
                  .ap-hero-subtitle { font-size: 20px; line-height: 30px; }
                  .ap-content { padding-top: 26px; padding-bottom: 26px; padding-left: 24px; padding-right: 24px; max-width: 100%; }
                  .ap-blur1-meta { flex-wrap: wrap; }
                  .ap-next { padding-top: 81px; }
                  .ap-next-card { flex-wrap: wrap; }
                  .ap-next-card-img { flex: 1; }
                  .ap-b2-para, .ap-b2-item-text, .ap-b2-quote { max-width: 100%; }
                }
                @media screen and (max-width: 450px) {
                  .ap-hero-title { font-size: 28px; line-height: 36px; }
                  .ap-hero-subtitle { font-size: 16px; line-height: 24px; }
                  .ap-blur1-title { font-size: 24px; line-height: 32px; }
                  .ap-next-title { font-size: 16px; line-height: 24px; }
                  .ap-next-card { padding-top: 20px; padding-bottom: 20px; }
                  .ap-next-card-content { gap: 43px; }
                  .ap-next-card-heading-text { font-size: 19px; line-height: 29px; }
                  .ap-b2-h3 { font-size: 16px; line-height: 24px; }
                  .ap-b2-quote { font-size: 19px; line-height: 29px; }
                }
            `}</style>
            <div className="w-full flex flex-col items-center bg-[#ffffff] overflow-hidden">
                {/* Navbar on top */}
                <Navbar />

                {/* Main Content Area */}
                <div className="ap-root">
                    {/* Hero Section */}
                    <main className="ap-section">
                        <div className="ap-section-inner">
                            <div className="ap-hero-badge-wrap">
                                <div className="ap-badge">
                                    <img
                                        className="ap-badge-icon"
                                        loading="lazy"
                                        alt=""
                                        src="/Container.svg"
                                        onError={handleImgError}
                                    />
                                    <div className="ap-badge-text-wrap">
                                        <div className="ap-badge-text">{category}</div>
                                    </div>
                                </div>
                                <div className="ap-hero-title-wrap">
                                    <h1 className="ap-hero-title">
                                        {cleanTitle}
                                    </h1>
                                </div>
                            </div>
                            <div className="ap-hero-sub-wrap">
                                <div className="ap-hero-sub-inner">
                                    <div className="ap-hero-subtitle">
                                        {subtitle}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>

                    {/* Article Content */}
                    <div className="ap-content">
                        {/* Article Meta */}
                        <section className="ap-blur1">
                            <div className="ap-blur1-badge">
                                <img
                                    className="ap-blur1-badge-icon"
                                    loading="lazy"
                                    alt=""
                                    src="/Container.svg"
                                    onError={handleImgError}
                                />
                                <div className="ap-blur1-badge-text-wrap">
                                    <div className="ap-blur1-emergency-care">{category}</div>
                                </div>
                            </div>
                            <div className="ap-blur1-heading">
                                <div className="ap-blur1-title">
                                    {cleanTitle}
                                </div>
                            </div>
                            <div className="ap-blur1-meta">
                                <div className="ap-blur1-tag">
                                    <img
                                        className="ap-blur1-tag-icon"
                                        loading="lazy"
                                        alt=""
                                        src="/Container1.svg"
                                        onError={handleImgError}
                                    />
                                    <div className="ap-blur1-badge-text-wrap">
                                        <div className="ap-blur1-tag-author">
                                            {(blog.author && !blog.author.toLowerCase().includes("ankit") && !blog.author.toLowerCase().includes("admin")) ? blog.author : "Swaraj Hospital"}
                                        </div>
                                    </div>
                                </div>
                                <button className="ap-blur1-tag-btn">
                                    <img
                                        className="ap-blur1-tag-icon"
                                        alt=""
                                        src="/Container2.svg"
                                        onError={handleImgError}
                                    />
                                    <div className="ap-blur1-tag-btn-text">{formattedDate}</div>
                                </button>
                                <button className="ap-blur1-tag-btn">
                                    <img
                                        className="ap-blur1-tag-icon"
                                        alt=""
                                        src="/Container3.svg"
                                        onError={handleImgError}
                                    />
                                    <div className="ap-blur1-tag-btn-text">{readTime}</div>
                                </button>
                            </div>
                        </section>

                        {/* Divider */}
                        <div className="ap-divider" />

                        {/* Article Body */}
                        <div className="ap-blur2">
                            {/* Render Body Image if provided */}
                            {blog.featuredImage && (
                                <img
                                    className="ap-b2-figure"
                                    loading="lazy"
                                    alt={cleanTitle}
                                    src={formatImageUrl(blog.featuredImage)}
                                    onError={handleImgError}
                                    style={{ marginBottom: "24px" }}
                                />
                            )}

                            {/* Render parsed elements */}
                            {renderBlogContent(blog.content)}
                        </div>

                        {/* Next Article */}
                        {nextBlog && (
                            <section className="ap-next">
                                <div className="ap-next-heading">
                                    <h3 className="ap-next-title">Next Article</h3>
                                </div>
                                <div className="ap-next-card">
                                    <div className="ap-next-card-content">
                                        <div className="ap-next-card-inner">
                                            <div className="ap-next-card-tag">
                                                <div className="ap-next-card-tag-text">{nextInfo.category}:</div>
                                            </div>
                                            <div className="ap-next-card-heading">
                                                <div className="ap-next-card-heading-text">
                                                    {nextInfo.cleanTitle}
                                                </div>
                                            </div>
                                            <div className="ap-next-card-desc">
                                                <div className="ap-next-card-desc-text">
                                                    {nextSubtitle}
                                                </div>
                                            </div>
                                        </div>
                                        <Link to={`/blog/${nextBlog.slug}`} className="ap-next-card-btn" style={{ textDecoration: "none", display: "flex", gap: "8px" }}>
                                            <div className="ap-next-card-btn-inner">
                                                <span className="ap-next-card-btn-text">Learn more</span>
                                            </div>
                                            <img
                                                className="ap-next-card-arrow"
                                                alt=""
                                                src="/merged-asset-1.svg"
                                                onError={handleImgError}
                                            />
                                        </Link>
                                    </div>
                                    <img
                                        className="ap-next-card-img"
                                        loading="lazy"
                                        alt=""
                                        src={formatImageUrl(nextBlog.featuredImage) || "/Container4@2x.png"}
                                        onError={handleImgError}
                                    />
                                </div>
                            </section>
                        )}
                    </div>
                </div>

                {/* Advanced Multispeciality Care Section */}
                <Section3 />

                {/* Footer Section */}
                <Section7 />
            </div>
        </>
    );
};

export default ArticleDetail;
