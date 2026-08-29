import React, { useState, useEffect } from "react";
import { Plus, Heart, UserCheck, Clock, ClipboardList, BookOpen, AlertCircle, RefreshCw } from "lucide-react";
import * as adminService from "../services/admin.service";
import Sidebar from "./components/Sidebar";
import TopHeader from "./components/TopHeader";
import OverviewTab from "./views/OverviewTab";
import BookingsTab from "./views/BookingsTab";
import LeadsTab from "./views/LeadsTab";
import DoctorsTab from "./views/DoctorsTab";
import SpecializationsTab from "./views/SpecializationsTab";
import BlogsTab from "./views/BlogsTab";

export default function AdminDashboard() {
  // Authentication & Session
  const [token, setToken] = useState<string | null>(localStorage.getItem("adminToken"));
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  // Tab State
  const [activeTab, setActiveTab] = useState("overview");

  // Data Lists
  const [doctors, setDoctors] = useState<any[]>([]);
  const [specializations, setSpecializations] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  const [leads, setLeads] = useState<any[]>([]);
  const [blogs, setBlogs] = useState<any[]>([]);

  // Page Load States
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Modal Controllers
  const [showModal, setShowModal] = useState<"specialization" | "doctor" | "reschedule" | "lead_status" | "blog" | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  // Form Fields
  const [specForm, setSpecForm] = useState({ name: "", description: "" });
  const [doctorForm, setDoctorForm] = useState<{
    name: string;
    specializationId: string;
    experienceYears: number;
    bookingFee: number;
    profileImage: string;
    description: string;
    email: string;
    phone: string;
    isActive: boolean;
    schedules: Array<{ day: string; slots: string[] }>;
  }>({
    name: "",
    specializationId: "",
    experienceYears: 0,
    bookingFee: 0,
    profileImage: "",
    description: "",
    email: "",
    phone: "",
    isActive: true,
    schedules: []
  });
  const [rescheduleForm, setRescheduleForm] = useState({ appointmentDate: "", notes: "" });
  const [leadForm, setLeadForm] = useState<{ status: "NEW" | "CONTACTED" | "QUALIFIED" | "LOST"; notes: string }>({
    status: "NEW",
    notes: ""
  });
  const [blogForm, setBlogForm] = useState({ title: "", slug: "", content: "", featuredImage: "", isPublished: false });

  const handleImageFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setDoctorForm(prev => ({ ...prev, profileImage: reader.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Load Data
  const loadDashboardData = async (jwt: string) => {
    setLoading(true);
    setError(null);
    try {
      const [docsRes, specsRes, booksRes, leadsRes, blogsRes] = await Promise.all([
        adminService.getDoctors(jwt),
        adminService.getSpecializations(jwt),
        adminService.getBookings(jwt),
        adminService.getLeads(jwt),
        adminService.getBlogs(jwt)
      ]);
      setDoctors(docsRes.data || []);
      setSpecializations(specsRes.data || []);
      setBookings(booksRes.data || []);
      setLeads(leadsRes.data || []);
      setBlogs(blogsRes.data || []);
    } catch (err: any) {
      console.error(err);
      if (err.message?.includes("unauthorized") || err.message?.includes("Unauthorized") || err.message?.includes("token")) {
        handleLogout();
      } else {
        setError(err.message || "Failed to retrieve terminal parameters.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      loadDashboardData(token);
    }
  }, [token]);

  // Auth Operations
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setLoginLoading(true);
    try {
      const res = await adminService.adminLogin({ username, password });
      if (res.success && res.data?.token) {
        localStorage.setItem("adminToken", res.data.token);
        setToken(res.data.token);
      } else {
        setLoginError(res.message || "Invalid credentials.");
      }
    } catch (err: any) {
      setLoginError(err.message || "Connection refused by OPD server.");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setToken(null);
    setDoctors([]);
    setSpecializations([]);
    setBookings([]);
    setLeads([]);
    setBlogs([]);
  };

  // Specialization Submit
  const handleCreateOrUpdateSpec = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    try {
      if (editMode && selectedItem) {
        await adminService.updateSpecialization(selectedItem.id, specForm, token);
      } else {
        await adminService.createSpecialization(specForm, token);
      }
      setShowModal(null);
      loadDashboardData(token);
    } catch (err: any) {
      alert(err.message || "Error submitting specialization.");
    }
  };

  // Doctor Submit
  const handleCreateOrUpdateDoctor = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    try {
      const payload = {
        ...doctorForm,
        schedules: JSON.stringify(doctorForm.schedules)
      };
      if (editMode && selectedItem) {
        await adminService.updateDoctor(selectedItem.id, payload, token);
      } else {
        await adminService.createDoctor(payload, token);
      }
      setShowModal(null);
      loadDashboardData(token);
    } catch (err: any) {
      alert(err.message || "Error saving doctor.");
    }
  };

  // Reschedule Submit
  const handleRescheduleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token || !selectedItem) return;
    try {
      await adminService.rescheduleBooking(selectedItem.id, {
        appointmentDate: rescheduleForm.appointmentDate,
        notes: rescheduleForm.notes
      }, token);
      setShowModal(null);
      loadDashboardData(token);
    } catch (err: any) {
      alert(err.message || "Error rescheduling.");
    }
  };

  // Lead Status Submit
  const handleUpdateLeadStatus = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token || !selectedItem) return;
    try {
      await adminService.updateLeadStatus(selectedItem.id, leadForm, token);
      setShowModal(null);
      loadDashboardData(token);
    } catch (err: any) {
      alert(err.message || "Error updating lead status.");
    }
  };

  // Blog Submit
  const handleCreateOrUpdateBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    try {
      const payload = {
        title: blogForm.title,
        slug: blogForm.slug || undefined,
        content: blogForm.content,
        featuredImage: blogForm.featuredImage || undefined,
        status: blogForm.isPublished ? "PUBLISHED" : "DRAFT"
      };
      if (editMode && selectedItem) {
        await adminService.updateBlog(selectedItem.id, payload, token);
      } else {
        await adminService.createBlog(payload, token);
      }
      setShowModal(null);
      loadDashboardData(token);
    } catch (err: any) {
      alert(err.message || "Error saving blog article.");
    }
  };

  // Confirm / Cancel / Delete Generic
  const handleConfirmBooking = async (id: string) => {
    if (!token) return;
    try {
      await adminService.confirmBooking(id, token);
      loadDashboardData(token);
    } catch (err: any) {
      alert(err.message || "Error confirming booking.");
    }
  };

  const handleCancelBooking = async (id: string) => {
    if (!token) return;
    if (!confirm("Are you sure you want to cancel this booking? Patient will be notified.")) return;
    try {
      await adminService.cancelBooking(id, token);
      loadDashboardData(token);
    } catch (err: any) {
      alert(err.message || "Error cancelling booking.");
    }
  };

  const handleDeleteBooking = async (id: string) => {
    if (!token) return;
    if (!confirm("Confirm hard-deletion of this booking record?")) return;
    try {
      await adminService.deleteBooking(id, token);
      loadDashboardData(token);
    } catch (err: any) {
      alert(err.message || "Error deleting booking.");
    }
  };

  const handleDeleteLead = async (id: string) => {
    if (!token) return;
    if (!confirm("Confirm hard-deletion of this callback lead?")) return;
    try {
      await adminService.deleteLead(id, token);
      loadDashboardData(token);
    } catch (err: any) {
      alert(err.message || "Error deleting lead.");
    }
  };

  const handleToggleDoctorStatus = async (doctor: any) => {
    if (!token) return;
    try {
      await adminService.updateDoctor(doctor.id, {
        isActive: !doctor.isActive
      }, token);
      loadDashboardData(token);
    } catch (err: any) {
      alert(err.message || "Error toggling doctor status.");
    }
  };

  const handleDeleteDoctor = async (id: string) => {
    if (!token) return;
    if (!confirm("Delete doctor profile? This may affect bookings attached to this doctor.")) return;
    try {
      await adminService.deleteDoctor(id, token);
      loadDashboardData(token);
    } catch (err: any) {
      alert(err.message || "Error deleting doctor.");
    }
  };

  const handleDeleteSpec = async (id: string) => {
    if (!token) return;
    if (!confirm("Delete specialization category?")) return;
    try {
      await adminService.deleteSpecialization(id, token);
      loadDashboardData(token);
    } catch (err: any) {
      alert(err.message || "Error deleting specialization.");
    }
  };

  const handleDeleteBlog = async (id: string) => {
    if (!token) return;
    if (!confirm("Delete this blog article?")) return;
    try {
      await adminService.deleteBlog(id, token);
      loadDashboardData(token);
    } catch (err: any) {
      alert(err.message || "Error deleting article.");
    }
  };

  // Schedule Rows Helper
  const addScheduleRow = () => {
    setDoctorForm({
      ...doctorForm,
      schedules: [...doctorForm.schedules, { day: "Monday", slots: [] }]
    });
  };

  const removeScheduleRow = (idx: number) => {
    const next = [...doctorForm.schedules];
    next.splice(idx, 1);
    setDoctorForm({ ...doctorForm, schedules: next });
  };

  const updateScheduleDay = (idx: number, day: string) => {
    const next = [...doctorForm.schedules];
    next[idx] = { ...next[idx], day };
    setDoctorForm({ ...doctorForm, schedules: next });
  };

  const updateScheduleSlots = (idx: number, rawSlots: string) => {
    const next = [...doctorForm.schedules];
    next[idx] = {
      ...next[idx],
      slots: rawSlots.split(",").map(s => s.trim()).filter(Boolean)
    };
    setDoctorForm({ ...doctorForm, schedules: next });
  };

  // Open modals helper
  const openSpecModal = (spec?: any) => {
    if (spec) {
      setEditMode(true);
      setSelectedItem(spec);
      setSpecForm({ name: spec.name, description: spec.description || "" });
    } else {
      setEditMode(false);
      setSelectedItem(null);
      setSpecForm({ name: "", description: "" });
    }
    setShowModal("specialization");
  };

  const openDoctorModal = (doc?: any) => {
    if (doc) {
      setEditMode(true);
      setSelectedItem(doc);
      let parsed = [];
      if (doc.schedules) {
        let current = doc.schedules;
        while (typeof current === "string") {
          try {
            const temp = JSON.parse(current);
            if (temp === current) break;
            current = temp;
          } catch (e) {
            break;
          }
        }
        parsed = Array.isArray(current) ? current : [];
      }
      setDoctorForm({
        name: doc.name || "",
        specializationId: doc.specializationId || "",
        experienceYears: doc.experienceYears || 0,
        bookingFee: parseFloat(doc.bookingFee) || 0,
        profileImage: doc.profileImage || "",
        description: doc.description || "",
        email: doc.email || "",
        phone: doc.phone || "",
        isActive: doc.isActive ?? true,
        schedules: parsed
      });
    } else {
      setEditMode(false);
      setSelectedItem(null);
      setDoctorForm({
        name: "",
        specializationId: specializations[0]?.id || "",
        experienceYears: 0,
        bookingFee: 0,
        profileImage: "",
        description: "",
        email: "",
        phone: "",
        isActive: true,
        schedules: []
      });
    }
    setShowModal("doctor");
  };

  const openRescheduleModal = (booking: any) => {
    setSelectedItem(booking);
    // Format to yyyy-MM-ddThh:mm for datetime-local
    const dt = new Date(booking.appointmentDate);
    const dateStr = dt.toISOString().slice(0, 16);
    setRescheduleForm({
      appointmentDate: dateStr,
      notes: booking.notes || ""
    });
    setShowModal("reschedule");
  };

  const openLeadStatusModal = (lead: any) => {
    setSelectedItem(lead);
    setLeadForm({
      status: lead.status,
      notes: lead.notes || ""
    });
    setShowModal("lead_status");
  };

  const openBlogModal = (blog?: any) => {
    if (blog) {
      setEditMode(true);
      setSelectedItem(blog);
      setBlogForm({
        title: blog.title,
        slug: blog.slug,
        content: blog.content,
        featuredImage: blog.featuredImage || "",
        isPublished: blog.status === "PUBLISHED"
      });
    } else {
      setEditMode(false);
      setSelectedItem(null);
      setBlogForm({ title: "", slug: "", content: "", featuredImage: "", isPublished: false });
    }
    setShowModal("blog");
  };

  // Render view
  const renderTabContent = () => {
    if (loading) {
      return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "300px", gap: "12px", color: "var(--text-muted)" }}>
          <RefreshCw size={24} className="spin" />
          <span>Synchronizing clinic records...</span>
        </div>
      );
    }

    if (error) {
      return (
        <div className="card" style={{ borderLeft: "4px solid var(--danger)", padding: "16px" }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <AlertCircle size={20} style={{ color: "var(--danger)" }} />
            <div>
              <h3 style={{ margin: "0 0 4px 0", fontSize: "15px", color: "var(--danger)" }}>Sync Error</h3>
              <p style={{ margin: 0, fontSize: "13px", color: "var(--text-muted)" }}>{error}</p>
              <button className="btn btn-secondary btn-sm" style={{ marginTop: "12px" }} onClick={() => token && loadDashboardData(token)}>
                Retry Connection
              </button>
            </div>
          </div>
        </div>
      );
    }

    switch (activeTab) {
      case "overview":
        return (
          <OverviewTab
            bookings={bookings}
            leads={leads}
            doctors={doctors}
            specializations={specializations}
            setActiveTab={setActiveTab}
          />
        );
      case "bookings":
        return (
          <BookingsTab
            bookings={bookings}
            onConfirm={handleConfirmBooking}
            onCancel={handleCancelBooking}
            onDelete={handleDeleteBooking}
            openRescheduleModal={openRescheduleModal}
          />
        );
      case "leads":
        return (
          <LeadsTab
            leads={leads}
            onDelete={handleDeleteLead}
            openLeadStatusModal={openLeadStatusModal}
          />
        );
      case "doctors":
        return (
          <DoctorsTab
            doctors={doctors}
            specializations={specializations}
            openDoctorModal={openDoctorModal}
            onDelete={handleDeleteDoctor}
            toggleStatus={handleToggleDoctorStatus}
          />
        );
      case "specializations":
        return (
          <SpecializationsTab
            specializations={specializations}
            openSpecModal={openSpecModal}
            onDelete={handleDeleteSpec}
          />
        );
      case "blogs":
        return (
          <BlogsTab
            blogs={blogs}
            openBlogModal={openBlogModal}
            onDelete={handleDeleteBlog}
          />
        );
      default:
        return null;
    }
  };

  // If no token, show login screen
  if (!token) {
    return (
      <div className="login-wrapper">
        <div className="login-card">
          <div className="login-brand">
            <div className="brand-icon">+</div>
            <h1 className="brand-title" style={{ fontSize: "22px", margin: "8px 0 0 0" }}>Swaraj Hospital</h1>
            <p className="brand-subtitle">Clinical Operations Terminal</p>
          </div>

          <form onSubmit={handleLogin}>
            {loginError && (
              <div className="alert alert-danger" style={{ display: "flex", gap: "8px", fontSize: "12px", padding: "10px", marginBottom: "16px" }}>
                <AlertCircle size={14} style={{ flexShrink: 0 }} />
                <span>{loginError}</span>
              </div>
            )}

            <div className="form-group">
              <label className="form-label">Terminal ID (Username)</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. admin"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="form-group" style={{ marginBottom: "20px" }}>
              <label className="form-label">Access Passcode</label>
              <input
                type="password"
                className="form-control"
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" disabled={loginLoading} className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              {loginLoading ? "Authenticating..." : "Authorize Session"}
            </button>
          </form>

          <div style={{ marginTop: "24px", borderTop: "1px solid var(--border-color)", paddingTop: "12px", fontSize: "11px", color: "var(--text-muted)", textAlign: "center" }}>
            Secured Link. Staff Authorization Required.
          </div>
        </div>
      </div>
    );
  }

  // Dashboard interface
  return (
    <div className="app-container">
      {/* Sidebar navigation */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={handleLogout} />

      {/* Main console content */}
      <main className="main-content">
        <TopHeader activeTab={activeTab} />
        <div className="workspace">{renderTabContent()}</div>
      </main>

      {/* -------------------------------------------------------------
          MODAL: SPECIALIZATION FORM
          ------------------------------------------------------------- */}
      {showModal === "specialization" && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-header">
              <h3 className="modal-title">
                <Heart size={16} className="text-primary" />
                {editMode ? "Edit Specialization" : "Add Specialization"}
              </h3>
              <button className="btn btn-ghost btn-sm" onClick={() => setShowModal(null)}>&times;</button>
            </div>
            <form onSubmit={handleCreateOrUpdateSpec}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="form-label">Specialization Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Pediatrics"
                    value={specForm.name}
                    onChange={e => setSpecForm({ ...specForm, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Description</label>
                  <textarea
                    rows={3}
                    className="form-control"
                    placeholder="Optional description..."
                    value={specForm.description}
                    onChange={e => setSpecForm({ ...specForm, description: e.target.value })}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(null)}>Cancel</button>
                <button type="submit" className="btn btn-primary">{editMode ? "Save Changes" : "Create Specialization"}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          MODAL: DOCTOR FORM
          ------------------------------------------------------------- */}
      {showModal === "doctor" && (
        <div className="modal-overlay">
          <div className="modal-container" style={{ maxWidth: "600px" }}>
            <div className="modal-header">
              <h3 className="modal-title">
                <UserCheck size={16} className="text-primary" />
                {editMode ? "Edit Doctor Profile" : "Add Doctor Profile"}
              </h3>
              <button className="btn btn-ghost btn-sm" onClick={() => setShowModal(null)}>&times;</button>
            </div>
            <form onSubmit={handleCreateOrUpdateDoctor}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="form-label">Doctor Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Dr. Jane Smith"
                    value={doctorForm.name}
                    onChange={e => setDoctorForm({ ...doctorForm, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Specialization</label>
                    <select
                      className="form-control"
                      value={doctorForm.specializationId}
                      onChange={e => setDoctorForm({ ...doctorForm, specializationId: e.target.value })}
                      required
                    >
                      <option value="">Select Specialization</option>
                      {specializations.map(s => (
                        <option key={s.id} value={s.id}>{s.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Experience (Years)</label>
                    <input
                      type="number"
                      className="form-control"
                      min="0"
                      value={doctorForm.experienceYears}
                      onChange={e => setDoctorForm({ ...doctorForm, experienceYears: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Booking Fee (INR)</label>
                    <input
                      type="number"
                      className="form-control"
                      min="0"
                      value={doctorForm.bookingFee}
                      onChange={e => setDoctorForm({ ...doctorForm, bookingFee: parseFloat(e.target.value) || 0 })}
                      required
                    />
                  </div>
                  <div className="form-group" style={{ justifyContent: "center" }}>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={doctorForm.isActive}
                        onChange={e => setDoctorForm({ ...doctorForm, isActive: e.target.checked })}
                      />
                      <span>Active for Bookings</span>
                    </label>
                  </div>
                </div>

                {/* Doctor Profile Image Upload */}
                <div className="form-group">
                  <label className="form-label">Doctor Profile Image</label>
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <div
                      style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "8px",
                        overflow: "hidden",
                        backgroundColor: "#f1f2f1",
                        flexShrink: 0,
                        border: "1px solid var(--border-color)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <img
                        src={doctorForm.profileImage || "/Container5@2x.png"}
                        alt="Preview"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: "6px" }}>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageFileUpload}
                        className="form-control"
                        style={{ fontSize: "12px", padding: "4px 8px" }}
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Or enter image URL (e.g. /Container5@2x.png)"
                        value={doctorForm.profileImage}
                        onChange={e => setDoctorForm({ ...doctorForm, profileImage: e.target.value })}
                        style={{ fontSize: "12px" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Doctor Description / Bio */}
                <div className="form-group">
                  <label className="form-label">Doctor Description / Bio</label>
                  <textarea
                    rows={4}
                    className="form-control"
                    placeholder="Enter doctor clinical background, expertise, education, and patient care philosophy..."
                    value={doctorForm.description}
                    onChange={e => setDoctorForm({ ...doctorForm, description: e.target.value })}
                  />
                </div>

                {/* Contact Info */}
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Contact Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="e.g. info@swarajhospital.in"
                      value={doctorForm.email}
                      onChange={e => setDoctorForm({ ...doctorForm, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Contact Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. +91 63708 22507"
                      value={doctorForm.phone}
                      onChange={e => setDoctorForm({ ...doctorForm, phone: e.target.value })}
                    />
                  </div>
                </div>

                {/* Schedules Builder */}
                <div className="form-group" style={{ marginTop: "8px" }}>
                  <div className="flex-between">
                    <label className="form-label">Doctor Schedule Days & Slots</label>
                    <button type="button" className="btn btn-secondary btn-sm" onClick={addScheduleRow}>
                      <Plus size={10} /> Add Day
                    </button>
                  </div>
                  <div className="schedules-list" style={{ marginTop: "8px" }}>
                    {doctorForm.schedules.map((s, index) => (
                      <div key={index} className="schedule-item">
                        <select
                          className="form-control"
                          style={{ width: "120px", padding: "4px" }}
                          value={s.day}
                          onChange={e => updateScheduleDay(index, e.target.value)}
                        >
                          <option value="Monday">Monday</option>
                          <option value="Tuesday">Tuesday</option>
                          <option value="Wednesday">Wednesday</option>
                          <option value="Thursday">Thursday</option>
                          <option value="Friday">Friday</option>
                          <option value="Saturday">Saturday</option>
                          <option value="Sunday">Sunday</option>
                        </select>
                        <input
                          type="text"
                          className="form-control"
                          style={{ flexGrow: 1, margin: "0 8px", padding: "4px" }}
                          placeholder="e.g. 09:00 AM, 10:00 AM"
                          value={s.slots.join(", ")}
                          onChange={e => updateScheduleSlots(index, e.target.value)}
                        />
                        <button type="button" className="btn btn-ghost btn-sm" onClick={() => removeScheduleRow(index)}>
                          &times;
                        </button>
                      </div>
                    ))}
                    {doctorForm.schedules.length === 0 && (
                      <div style={{ color: "var(--text-muted)", fontSize: "12px", textAlign: "center", padding: "10px", border: "1px dashed var(--border-color)", borderRadius: "4px" }}>
                        No schedule days added.
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(null)}>Cancel</button>
                <button type="submit" className="btn btn-primary">{editMode ? "Save Changes" : "Register Doctor"}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          MODAL: RESCHEDULE BOOKING
          ------------------------------------------------------------- */}
      {showModal === "reschedule" && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-header">
              <h3 className="modal-title">
                <Clock size={16} className="text-primary" />
                Reschedule OPD Slot
              </h3>
              <button className="btn btn-ghost btn-sm" onClick={() => setShowModal(null)}>&times;</button>
            </div>
            <form onSubmit={handleRescheduleBooking}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="form-label">New Appointment Date & Time</label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    value={rescheduleForm.appointmentDate}
                    onChange={e => setRescheduleForm({ ...rescheduleForm, appointmentDate: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Rescheduling Notes</label>
                  <textarea
                    rows={3}
                    className="form-control"
                    placeholder="Reason for reschedule..."
                    value={rescheduleForm.notes}
                    onChange={e => setRescheduleForm({ ...rescheduleForm, notes: e.target.value })}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(null)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Reschedule & Notify</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          MODAL: LEAD STATUS UPDATE
          ------------------------------------------------------------- */}
      {showModal === "lead_status" && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-header">
              <h3 className="modal-title">
                <ClipboardList size={16} className="text-primary" />
                Update Callback Lead Status
              </h3>
              <button className="btn btn-ghost btn-sm" onClick={() => setShowModal(null)}>&times;</button>
            </div>
            <form onSubmit={handleUpdateLeadStatus}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="form-label">Lead Status</label>
                  <select
                    className="form-control"
                    value={leadForm.status}
                    onChange={e => setLeadForm({ ...leadForm, status: e.target.value as any })}
                    required
                  >
                    <option value="NEW">New callback requested</option>
                    <option value="CONTACTED">Staff contacted patient</option>
                    <option value="QUALIFIED">Patient booking completed</option>
                    <option value="LOST">No response / Lost</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(null)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Update Callback</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          MODAL: BLOG CMS FORM
          ------------------------------------------------------------- */}
      {showModal === "blog" && (
        <div className="modal-overlay">
          <div className="modal-container" style={{ maxWidth: "650px" }}>
            <div className="modal-header">
              <h3 className="modal-title">
                <BookOpen size={16} className="text-primary" />
                {editMode ? "Edit Blog Article" : "Create Blog Article"}
              </h3>
              <button className="btn btn-ghost btn-sm" onClick={() => setShowModal(null)}>&times;</button>
            </div>
            <form onSubmit={handleCreateOrUpdateBlog}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="form-label">Article Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. 5 Symptoms of Heart Disease You Shouldn't Ignore"
                    value={blogForm.title}
                    onChange={e => setBlogForm({ ...blogForm, title: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Slug (Optional)</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. heart-symptoms-warning"
                    value={blogForm.slug}
                    onChange={e => setBlogForm({ ...blogForm, slug: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Featured Image URL (Optional)</label>
                  <input
                    type="url"
                    className="form-control"
                    placeholder="e.g. https://images.unsplash.com/photo-..."
                    value={blogForm.featuredImage}
                    onChange={e => setBlogForm({ ...blogForm, featuredImage: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Article Content</label>
                  <textarea
                    rows={8}
                    className="form-control"
                    placeholder="Write article details here..."
                    value={blogForm.content}
                    onChange={e => setBlogForm({ ...blogForm, content: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={blogForm.isPublished}
                      onChange={e => setBlogForm({ ...blogForm, isPublished: e.target.checked })}
                    />
                    <span>Publish Immediately</span>
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(null)}>Cancel</button>
                <button type="submit" className="btn btn-primary">{editMode ? "Save Post" : "Create Post"}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
