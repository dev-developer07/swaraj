// API Base URL config (resolves backend if running on Vite dev server port 5173)
export const API_BASE = window.location.hostname === "localhost" ? "http://localhost:3000/api" : "/api";

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
