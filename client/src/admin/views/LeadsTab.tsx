import { useState } from "react";
import { Edit2, Trash2, Search } from "lucide-react";

interface LeadsTabProps {
  leads: any[];
  onDelete: (id: string) => void;
  openLeadStatusModal: (lead: any) => void;
}

export default function LeadsTab({
  leads,
  onDelete,
  openLeadStatusModal
}: LeadsTabProps) {
  const [search, setSearch] = useState("");

  const filtered = leads.filter(l => {
    const term = search.toLowerCase();
    return (l.name || "").toLowerCase().includes(term) ||
           (l.phone || "").toLowerCase().includes(term) ||
           (l.notes || "").toLowerCase().includes(term) ||
           (l.doctor?.name || "").toLowerCase().includes(term);
  });

  return (
    <div className="card">
      <div className="card-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 className="card-title">Callback Leads</h2>
        <div style={{ position: "relative" }}>
          <Search size={14} style={{ position: "absolute", left: "10px", top: "10px", color: "var(--text-muted)" }} />
          <input
            type="text"
            placeholder="Search leads..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-control"
            style={{ paddingLeft: "30px", width: "220px", height: "34px", fontSize: "13px" }}
          />
        </div>
      </div>
      <div className="card-body" style={{ padding: "0" }}>
        <div className="table-responsive">
          <table className="clinical-table">
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Phone Number</th>
                <th>Preferred Date</th>
                <th>Requested Doctor</th>
                <th>Status</th>
                <th>Staff Notes</th>
                <th style={{ textAlign: "right" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(l => (
                <tr key={l.id}>
                  <td style={{ fontWeight: 600 }}>{l.name}</td>
                  <td>{l.phone}</td>
                  <td>{new Date(l.preferredDate).toLocaleDateString()}</td>
                  <td>
                    {l.doctor ? (
                      <>
                        <div style={{ fontWeight: 500 }}>{l.doctor.name}</div>
                        <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>
                          {l.doctor.specialization?.name || "N/A"}
                        </div>
                      </>
                    ) : (
                      <span className="text-muted">N/A</span>
                    )}
                  </td>
                  <td>
                    <span className={`badge ${
                      l.status === "NEW" ? "badge-danger" :
                      l.status === "CONTACTED" ? "badge-warning" :
                      l.status === "QUALIFIED" ? "badge-success" : "badge-outline"
                    }`}>
                      {l.status}
                    </span>
                  </td>
                  <td style={{ maxWidth: "240px", fontSize: "12px", color: "var(--text-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {l.notes || "—"}
                  </td>
                  <td>
                    <div style={{ display: "flex", gap: "4px", justifyContent: "flex-end" }}>
                      <button
                        onClick={() => openLeadStatusModal(l)}
                        className="btn btn-secondary btn-sm"
                        style={{ padding: "4px 8px" }}
                        title="Update Status / Log Notes"
                      >
                        <Edit2 size={13} />
                      </button>
                      <button
                        onClick={() => onDelete(l.id)}
                        className="btn btn-danger btn-sm"
                        style={{ padding: "4px 8px", backgroundColor: "transparent", color: "var(--danger)", border: "1px solid var(--danger-light)" }}
                        title="Delete Lead"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} style={{ textAlign: "center", color: "var(--text-muted)", padding: "32px" }}>
                    No callback leads found.
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
