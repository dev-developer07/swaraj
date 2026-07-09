import { apiRequest } from "./api.client";

// Request Callback Lead
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

// Create OPD Doctor Booking Order (Razorpay Order creation)
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
  return apiRequest("/booking/request", {
    method: "POST",
    body: JSON.stringify(payload)
  }, token);
}

// Verify signature
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
