import { useState } from "react";
import { Plus, Edit2, Trash2, Search } from "lucide-react";

interface SpecializationsTabProps {
  specializations: any[];
  openSpecModal: (spec?: any) => void;
  onDelete: (id: string) => void;
}

export default function SpecializationsTab({
  specializations,
  openSpecModal,
  onDelete
}: SpecializationsTabProps) {
  const [search, setSearch] = useState("");

  const filtered = specializations.filter(s => {
    const term = search.toLowerCase();
    return (s.name || "").toLowerCase().includes(term) ||
           (s.description || "").toLowerCase().includes(term);
  });

  return (
    <div className="card">
      <div className="card-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
        <h2 className="card-title">Clinical Specialties</h2>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <Search size={14} style={{ position: "absolute", left: "10px", top: "10px", color: "var(--text-muted)" }} />
            <input
              type="text"
              placeholder="Search specialties..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-control"
              style={{ paddingLeft: "30px", width: "200px", height: "34px", fontSize: "13px" }}
            />
          </div>
          <button
            onClick={() => openSpecModal()}
            className="btn btn-primary"
            style={{ padding: "0 12px", height: "34px", display: "flex", alignItems: "center", gap: "6px", fontSize: "13px" }}
          >
            <Plus size={14} /> Add Specialty
          </button>
        </div>
      </div>
      <div className="card-body" style={{ padding: "0" }}>
        <div className="table-responsive">
          <table className="clinical-table">
            <thead>
              <tr>
                <th>Specialty Name</th>
                <th>Description</th>
                <th style={{ textAlign: "right" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(s => (
                <tr key={s.id}>
                  <td style={{ fontWeight: 600 }}>{s.name}</td>
                  <td style={{ color: "var(--text-muted)", fontSize: "13px" }}>{s.description || "—"}</td>
                  <td>
                    <div style={{ display: "flex", gap: "4px", justifyContent: "flex-end" }}>
                      <button
                        onClick={() => openSpecModal(s)}
                        className="btn btn-secondary btn-sm"
                        style={{ padding: "4px 8px" }}
                        title="Edit Specialty"
                      >
                        <Edit2 size={13} />
                      </button>
                      <button
                        onClick={() => onDelete(s.id)}
                        className="btn btn-danger btn-sm"
                        style={{ padding: "4px 8px", backgroundColor: "transparent", color: "var(--danger)", border: "1px solid var(--danger-light)" }}
                        title="Delete Specialty"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={3} style={{ textAlign: "center", color: "var(--text-muted)", padding: "32px" }}>
                    No specialties registered.
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
