import { useState } from "react";
import { Check, X, CalendarClock, Trash2, Search, Filter } from "lucide-react";

interface BookingsTabProps {
  bookings: any[];
  onConfirm: (id: string) => void;
  onCancel: (id: string) => void;
  onDelete: (id: string) => void;
  openRescheduleModal: (booking: any) => void;
}

export default function BookingsTab({
  bookings,
  onConfirm,
  onCancel,
  onDelete,
  openRescheduleModal
}: BookingsTabProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("ALL");
  
  const filtered = bookings.filter(b => {
    const term = searchQuery.toLowerCase();
    const nameMatch = (b.user?.name || "").toLowerCase().includes(term) ||
                      (b.user?.phone || "").toLowerCase().includes(term) ||
                      (b.bookingReference || "").toLowerCase().includes(term) ||
                      (b.doctor?.name || "").toLowerCase().includes(term);
    const statusMatch = filterStatus === "ALL" || b.status === filterStatus;
    return nameMatch && statusMatch;
  });

  return (
    <div className="card">
      <div className="card-header" style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "space-between", alignItems: "center" }}>
        <h2 className="card-title">OPD Appointments</h2>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {/* Search bar */}
          <div style={{ position: "relative" }}>
            <Search size={14} style={{ position: "absolute", left: "10px", top: "10px", color: "var(--text-muted)" }} />
            <input
              type="text"
              placeholder="Search reference, patient, doctor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-control"
              style={{ paddingLeft: "30px", width: "240px", height: "34px", fontSize: "13px" }}
            />
          </div>
          {/* Status filter */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Filter size={14} style={{ color: "var(--text-muted)" }} />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="form-control"
              style={{ width: "140px", height: "34px", fontSize: "13px", padding: "0 8px" }}
            >
              <option value="ALL">All Statuses</option>
              <option value="PENDING">PENDING</option>
              <option value="CONFIRMED">CONFIRMED</option>
              <option value="RESCHEDULED">RESCHEDULED</option>
              <option value="REJECTED">REJECTED</option>
            </select>
          </div>
        </div>
      </div>
      <div className="card-body" style={{ padding: "0" }}>
        <div className="table-responsive">
          <table className="clinical-table">
            <thead>
              <tr>
                <th>Reference</th>
                <th>Patient Details</th>
                <th>Doctor</th>
                <th>Appointment Date</th>
                <th>OPD Slot</th>
                <th>Payments</th>
                <th>Status</th>
                <th style={{ textAlign: "right" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(b => (
                <tr key={b.id}>
                  <td style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}>{b.bookingReference}</td>
                  <td>
                    <div style={{ fontWeight: 600 }}>{b.user?.name || "Unnamed"}</div>
                    <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>{b.user?.phone}</div>
                    {b.user?.email && <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>{b.user.email}</div>}
                  </td>
                  <td>
                    <div style={{ fontWeight: 500 }}>{b.doctor?.name}</div>
                    <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>{b.doctor?.specialization?.name || "N/A"}</div>
                  </td>
                  <td>{new Date(b.appointmentDate).toLocaleDateString()}</td>
                  <td style={{ fontWeight: 500 }}>{b.appointmentSlot}</td>
                  <td>
                    {b.payments && b.payments.length > 0 ? (
                      b.payments.map((p: any) => (
                        <div key={p.id} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <span style={{ fontSize: "11px", fontWeight: 600 }}>₹{parseFloat(p.amount).toFixed(2)}</span>
                          <span className={`badge ${p.paymentStatus === "SUCCESS" ? "badge-success" : "badge-warning"}`} style={{ fontSize: "9px", padding: "1px 4px", alignSelf: "flex-start" }}>
                            {p.paymentStatus}
                          </span>
                        </div>
                      ))
                    ) : (
                      <span className="badge badge-danger">Unpaid</span>
                    )}
                  </td>
                  <td>
                    <span className={`badge ${
                      b.status === "CONFIRMED" ? "badge-success" :
                      b.status === "PENDING" ? "badge-warning" :
                      b.status === "RESCHEDULED" ? "badge-info" : "badge-danger"
                    }`}>
                      {b.status}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: "flex", gap: "4px", justifyContent: "flex-end" }}>
                      {b.status !== "CONFIRMED" && (
                        <button
                          onClick={() => onConfirm(b.id)}
                          className="btn btn-success btn-sm"
                          style={{ padding: "4px 8px" }}
                          title="Confirm Appointment"
                        >
                          <Check size={13} />
                        </button>
                      )}
                      <button
                        onClick={() => openRescheduleModal(b)}
                        className="btn btn-secondary btn-sm"
                        style={{ padding: "4px 8px" }}
                        title="Reschedule Slot"
                      >
                        <CalendarClock size={13} />
                      </button>
                      {b.status !== "REJECTED" && (
                        <button
                          onClick={() => onCancel(b.id)}
                          className="btn btn-danger btn-sm"
                          style={{ padding: "4px 8px" }}
                          title="Cancel/Reject"
                        >
                          <X size={13} />
                        </button>
                      )}
                      <button
                        onClick={() => onDelete(b.id)}
                        className="btn btn-danger btn-sm"
                        style={{ padding: "4px 8px", backgroundColor: "transparent", color: "var(--danger)", border: "1px solid var(--danger-light)" }}
                        title="Delete Record"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8} style={{ textAlign: "center", color: "var(--text-muted)", padding: "32px" }}>
                    No matching booking records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
