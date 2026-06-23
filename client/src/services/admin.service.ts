import { apiRequest } from "./api.client";

export async function adminLogin(payload: any) {
  return apiRequest("/admin/login", {
    method: "POST",
    body: JSON.stringify(payload)
  });
}

// Doctors CRUD
export async function getDoctors(token: string) {
  return apiRequest("/admin/doctors", {}, token);
}

export async function createDoctor(payload: any, token: string) {
  return apiRequest("/admin/doctors", {
    method: "POST",
    body: JSON.stringify(payload)
  }, token);
}

export async function updateDoctor(id: string, payload: any, token: string) {
  return apiRequest(`/admin/doctors/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload)
  }, token);
}

export async function deleteDoctor(id: string, token: string) {
  return apiRequest(`/admin/doctors/${id}`, { method: "DELETE" }, token);
}

// Specializations CRUD
export async function getSpecializations(token: string) {
  return apiRequest("/admin/specializations", {}, token);
}

export async function createSpecialization(payload: any, token: string) {
  return apiRequest("/admin/specializations", {
    method: "POST",
    body: JSON.stringify(payload)
  }, token);
}

export async function updateSpecialization(id: string, payload: any, token: string) {
  return apiRequest(`/admin/specializations/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload)
  }, token);
}

export async function deleteSpecialization(id: string, token: string) {
  return apiRequest(`/admin/specializations/${id}`, { method: "DELETE" }, token);
}

// Bookings
export async function getBookings(token: string) {
  return apiRequest("/admin/bookings", {}, token);
}

export async function confirmBooking(id: string, token: string) {
  return apiRequest(`/admin/bookings/${id}/confirm`, { method: "POST" }, token);
}

export async function rescheduleBooking(id: string, payload: any, token: string) {
  return apiRequest(`/admin/bookings/${id}/reschedule`, {
    method: "POST",
    body: JSON.stringify(payload)
  }, token);
}

export async function cancelBooking(id: string, token: string) {
  return apiRequest(`/admin/bookings/${id}/cancel`, { method: "POST" }, token);
}

export async function deleteBooking(id: string, token: string) {
  return apiRequest(`/admin/bookings/${id}`, { method: "DELETE" }, token);
}

// Callback Leads
export async function getLeads(token: string) {
  return apiRequest("/admin/leads", {}, token);
}

export async function updateLeadStatus(id: string, payload: any, token: string) {
  return apiRequest(`/admin/leads/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload)
  }, token);
}

export async function deleteLead(id: string, token: string) {
  return apiRequest(`/admin/leads/${id}`, { method: "DELETE" }, token);
}

// Blog CMS CRUD
export async function getBlogs(token: string) {
  return apiRequest("/admin/blogs", {}, token);
}

export async function createBlog(payload: any, token: string) {
  return apiRequest("/admin/blogs", {
    method: "POST",
    body: JSON.stringify(payload)
  }, token);
}

export async function updateBlog(id: string, payload: any, token: string) {
  return apiRequest(`/admin/blogs/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload)
  }, token);
}

export async function deleteBlog(id: string, token: string) {
  return apiRequest(`/admin/blogs/${id}`, { method: "DELETE" }, token);
}
