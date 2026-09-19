import React from "react";
import { Plus, Briefcase, Trash2, Edit, CheckCircle, XCircle, MapPin, Calendar, Clock } from "lucide-react";

interface JobRolesTabProps {
  jobRoles: any[];
  openJobRoleModal: (role?: any) => void;
  onDelete: (id: string) => void;
}

export default function JobRolesTab({
  jobRoles,
  openJobRoleModal,
  onDelete
}: JobRolesTabProps) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <div>
          <h2 style={{ fontSize: "18px", margin: 0, fontWeight: 600 }}>Careers & Job Openings</h2>
          <p style={{ fontSize: "12px", color: "var(--text-muted)", margin: "4px 0 0 0" }}>
            Manage clinical & administrative job roles displayed on the public Careers portal.
          </p>
        </div>
        <button className="btn btn-primary btn-sm" onClick={() => openJobRoleModal()}>
          <Plus size={14} />
          <span>Post New Job Role</span>
        </button>
      </div>

      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        <table className="table">
          <thead>
            <tr>
              <th>Job Title & Department</th>
              <th>Commitment</th>
              <th>Location</th>
              <th>Posted Date</th>
              <th>Status</th>
              <th style={{ textAlign: "right" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobRoles.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: "center", padding: "32px", color: "var(--text-muted)" }}>
                  No job openings created yet. Click "Post New Job Role" to publish one.
                </td>
              </tr>
            ) : (
              jobRoles.map(role => (
                <tr key={role.id}>
                  <td>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "8px",
                          backgroundColor: "#f1f2f1",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#1f2a44",
                          flexShrink: 0
                        }}
                      >
                        <Briefcase size={18} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: "14px", color: "var(--text-main)" }}>{role.title}</div>
                        <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>{role.department}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-neutral" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                      <Clock size={12} />
                      {role.commitment || "Full-time"}
                    </span>
                  </td>
                  <td>
                    <span style={{ fontSize: "13px", color: "var(--text-muted)", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                      <MapPin size={12} />
                      {role.location || "On-site"}
                    </span>
                  </td>
                  <td>
                    <span style={{ fontSize: "12px", color: "var(--text-muted)", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                      <Calendar size={12} />
                      {new Date(role.createdAt || Date.now()).toLocaleDateString()}
                    </span>
                  </td>
                  <td>
                    {role.isActive ? (
                      <span className="badge badge-success" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                        <CheckCircle size={12} /> Active
                      </span>
                    ) : (
                      <span className="badge badge-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                        <XCircle size={12} /> Closed
                      </span>
                    )}
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <div style={{ display: "flex", gap: "6px", justifyContent: "flex-end" }}>
                      <button className="btn btn-ghost btn-sm" title="Edit Job Role" onClick={() => openJobRoleModal(role)}>
                        <Edit size={14} />
                      </button>
                      <button className="btn btn-ghost btn-sm" style={{ color: "var(--danger)" }} title="Delete Job Role" onClick={() => onDelete(role.id)}>
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
