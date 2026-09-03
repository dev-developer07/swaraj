/**
 * Converts various image URL formats (including Google Drive share links,
 * Google Images search result URLs, missing-protocol strings) into clean,
 * directly displayable image URLs.
 */
export function formatImageUrl(url?: string | null): string {
  if (!url || typeof url !== "string") return "";
  let clean = url.trim();
  if (!clean) return "";

  // Prepend https:// if protocol is missing and not a relative path / data URI
  if (!clean.startsWith("http://") && !clean.startsWith("https://") && !clean.startsWith("/") && !clean.startsWith("data:")) {
    clean = "https://" + clean;
  }

  try {
    const parsed = new URL(clean);

    // 1. Google Drive link conversion
    // e.g. https://drive.google.com/file/d/1ABC123xyz/view?usp=sharing
    // or https://drive.google.com/open?id=1ABC123xyz
    if (parsed.hostname.includes("drive.google.com")) {
      const fileDMatch = parsed.pathname.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
      if (fileDMatch && fileDMatch[1]) {
        return `https://lh3.googleusercontent.com/d/${fileDMatch[1]}`;
      }
      const idParam = parsed.searchParams.get("id");
      if (idParam) {
        return `https://lh3.googleusercontent.com/d/${idParam}`;
      }
    }

    // 2. Google Images search result link conversion
    // e.g. https://www.google.com/imgres?imgurl=https%3A%2F%2Fsite.com%2Fimg.jpg&imgrefurl=...
    if (parsed.hostname.includes("google.") && (parsed.pathname.includes("/imgres") || parsed.pathname.includes("/url"))) {
      const imgurl = parsed.searchParams.get("imgurl");
      if (imgurl) {
        return decodeURIComponent(imgurl);
      }
    }
  } catch (e) {
    // If URL parsing fails, return clean string
  }

  return clean;
}
