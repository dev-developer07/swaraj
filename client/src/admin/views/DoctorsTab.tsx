import { useState } from "react";
import { Plus, Edit2, Trash2, Shield, ShieldOff, Search } from "lucide-react";

import { parseDoctorSchedules } from "../../utils/scheduleUtils";

interface DoctorsTabProps {
  doctors: any[];
  specializations: any[];
  openDoctorModal: (doctor?: any) => void;
  onDelete: (id: string) => void;
  toggleStatus: (doctor: any) => void;
}

export default function DoctorsTab({
  doctors,
  openDoctorModal,
  onDelete,
  toggleStatus
}: DoctorsTabProps) {
  const [search, setSearch] = useState("");

  const filtered = doctors.filter(d => {
    const term = search.toLowerCase();
    return (d.name || "").toLowerCase().includes(term) ||
           (d.specialization?.name || "").toLowerCase().includes(term);
  });

  return (
    <div className="card">
      <div className="card-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
        <h2 className="card-title">Doctor Directory</h2>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <Search size={14} style={{ position: "absolute", left: "10px", top: "10px", color: "var(--text-muted)" }} />
            <input
              type="text"
              placeholder="Search doctors..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-control"
              style={{ paddingLeft: "30px", width: "200px", height: "34px", fontSize: "13px" }}
            />
          </div>
          <button
            onClick={() => openDoctorModal()}
            className="btn btn-primary"
            style={{ padding: "0 12px", height: "34px", display: "flex", alignItems: "center", gap: "6px", fontSize: "13px" }}
          >
            <Plus size={14} /> Add Doctor
          </button>
        </div>
      </div>
      <div className="card-body" style={{ padding: "0" }}>
        <div className="table-responsive">
          <table className="clinical-table">
            <thead>
              <tr>
                <th>Doctor Name</th>
                <th>Specialization</th>
                <th>Experience</th>
                <th>OPD Fee</th>
                <th>Schedules</th>
                <th>Status</th>
                <th style={{ textAlign: "right" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(d => {
                const schedules = parseDoctorSchedules(d.schedules);
                const feeNum = parseFloat(d.bookingFee || 0);
                return (
                  <tr key={d.id}>
                    <td style={{ fontWeight: 600 }}>{d.name}</td>
                    <td>{d.specialization?.name || "None"}</td>
                    <td>{d.experienceYears || 0} Years</td>
                    <td style={{ fontWeight: 600 }}>₹{isNaN(feeNum) ? "0.00" : feeNum.toFixed(2)}</td>
                    <td>
                      {schedules && schedules.length > 0 ? (
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                          {schedules.map((s, idx) => (
                            <span key={idx} className="badge badge-outline" style={{ fontSize: "10px", padding: "2px 6px" }}>
                              <strong>{s.day}:</strong> {s.timingText}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span style={{ fontSize: "11px", color: "var(--text-muted)", fontStyle: "italic" }}>No schedule assigned</span>
                      )}
                    </td>
                    <td>
                      <span className={`badge ${d.isActive ? "badge-success" : "badge-outline"}`}>
                        {d.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td>
                      <div style={{ display: "flex", gap: "4px", justifyContent: "flex-end" }}>
                        <button
                          onClick={() => toggleStatus(d)}
                          className="btn btn-secondary btn-sm"
                          style={{ padding: "4px 8px" }}
                          title={d.isActive ? "Deactivate Doctor" : "Activate Doctor"}
                        >
                          {d.isActive ? <ShieldOff size={13} style={{ color: "var(--danger)" }} /> : <Shield size={13} style={{ color: "var(--success)" }} />}
                        </button>
                        <button
                          onClick={() => openDoctorModal(d)}
                          className="btn btn-secondary btn-sm"
                          style={{ padding: "4px 8px" }}
                          title="Edit Profile"
                        >
                          <Edit2 size={13} />
                        </button>
                        <button
                          onClick={() => onDelete(d.id)}
                          className="btn btn-danger btn-sm"
                          style={{ padding: "4px 8px", backgroundColor: "transparent", color: "var(--danger)", border: "1px solid var(--danger-light)" }}
                          title="Delete Doctor"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} style={{ textAlign: "center", color: "var(--text-muted)", padding: "32px" }}>
                    No doctors registered in directory.
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
