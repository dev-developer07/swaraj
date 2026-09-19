import { apiRequest } from "./api.client";

// ─── Auth / OTP ──────────────────────────────────────────────

export async function requestOTP(phone: string) {
  return apiRequest("/auth/request-otp", {
    method: "POST",
    body: JSON.stringify({ phone }),
  });
}

export async function verifyOTP(phone: string, otp: string) {
  return apiRequest("/auth/verify-otp", {
    method: "POST",
    body: JSON.stringify({ phone, otp }),
  });
}

export async function getUserProfile(token: string) {
  return apiRequest("/auth/profile", {}, token);
}

export async function updateUserProfile(
  payload: {
    name?: string;
    careof?: string;
    email?: string;
    address?: string;
  },
  token: string
) {
  return apiRequest("/auth/profile", {
    method: "PATCH",
    body: JSON.stringify(payload),
  }, token);
}

// ─── Lead / Enquiry ──────────────────────────────────────────

export async function submitLead(payload: {
  name: string;
  phone: string;
  preferredDate: string;
  doctorId: string;
  notes?: string;
}) {
  return apiRequest("/booking/lead", {
    method: "POST",
    body: JSON.stringify(payload)
  });
}

export async function getPublicDoctors() {
  return apiRequest("/booking/doctors-list", {});
}

// Fetch public published blogs
export async function getPublicBlogs() {
  return apiRequest("/booking/blogs", {});
}

export async function getPublicBlogBySlug(slug: string) {
  return apiRequest(`/booking/blogs/${slug}`, {});
}

// ─── Booking (Paid) ──────────────────────────────────────────

export async function requestBooking(payload: {
  doctorId: string;
  appointmentDate: string;
  notes?: string;
  patientName: string;
  phone: string;
  email?: string;
  careof?: string;
  address?: string;
}, token?: string) {
  return apiRequest("/booking/request-booking", {
    method: "POST",
    body: JSON.stringify(payload)
  }, token);
}

export async function verifyPayment(payload: {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}, token?: string) {
  return apiRequest("/booking/verify-payment", {
    method: "POST",
    body: JSON.stringify(payload)
  }, token);
}

// ─── Public Careers ──────────────────────────────────────────

export async function getPublicJobRoles() {
  return apiRequest("/career/job-roles", {});
}

export async function getPublicJobRoleById(id: string) {
  return apiRequest(`/career/job-roles/${id}`, {});
}

