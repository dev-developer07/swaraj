// API Base URL config (supports VITE_API_URL env variable for production/Vercel deployment)
const ENV_API_URL = import.meta.env.VITE_API_URL;
export const API_BASE = ENV_API_URL ? ENV_API_URL : (window.location.hostname === "localhost" ? "http://localhost:3000/api" : "/api");

export async function apiRequest(path: string, options: RequestInit = {}, token?: string) {
  const headers = {
    "Content-Type": "application/json",
    ...(token ? { "Authorization": `Bearer ${token}` } : {}),
    ...options.headers
  };
  
  const res = await fetch(`${API_BASE}${path}`, { ...options, headers });
  const json = await res.json();
  
  if (!res.ok) {
    throw new Error(json.message || "Something went wrong");
  }
  
  return json;
}
