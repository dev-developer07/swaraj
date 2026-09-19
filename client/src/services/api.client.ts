const ENV_API_URL = import.meta.env.VITE_API_URL;
export const API_BASE = ENV_API_URL
  ? (ENV_API_URL.endsWith("/api") ? ENV_API_URL : `${ENV_API_URL.replace(/\/$/, "")}/api`)
  : (window.location.hostname === "localhost" ? "http://localhost:3000/api" : "/api");

export async function apiRequest(path: string, options: RequestInit = {}, token?: string) {
  const headers = {
    "Content-Type": "application/json",
    ...(token ? { "Authorization": `Bearer ${token}` } : {}),
    ...options.headers
  };
  
  const res = await fetch(`${API_BASE}${path}`, { ...options, headers });
  const text = await res.text();
  
  let json: any = {};
  try {
    json = JSON.parse(text);
  } catch {
    if (!res.ok) {
      throw new Error(`Server status ${res.status}. Please check backend server and VITE_API_URL variable in Vercel.`);
    }
    throw new Error("Invalid response format received from backend API.");
  }
  
  if (!res.ok) {
    throw new Error(json.message || "Something went wrong");
  }
  
  return json;
}
