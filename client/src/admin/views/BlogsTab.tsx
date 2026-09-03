import { useState } from "react";
import { Plus, Edit2, Trash2, Search, FileText, Globe } from "lucide-react";
import { formatImageUrl } from "../../utils/imageUtils";

interface BlogsTabProps {
  blogs: any[];
  openBlogModal: (blog?: any) => void;
  onDelete: (id: string) => void;
}

export default function BlogsTab({
  blogs,
  openBlogModal,
  onDelete
}: BlogsTabProps) {
  const [search, setSearch] = useState("");

  const filtered = blogs.filter(b => {
    const term = search.toLowerCase();
    return (b.title || "").toLowerCase().includes(term) ||
           (b.content || "").toLowerCase().includes(term);
  });

  return (
    <div className="card">
      <div className="card-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
        <h2 className="card-title">Blog CMS Settings</h2>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <Search size={14} style={{ position: "absolute", left: "10px", top: "10px", color: "var(--text-muted)" }} />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-control"
              style={{ paddingLeft: "30px", width: "200px", height: "34px", fontSize: "13px" }}
            />
          </div>
          <button
            onClick={() => openBlogModal()}
            className="btn btn-primary"
            style={{ padding: "0 12px", height: "34px", display: "flex", alignItems: "center", gap: "6px", fontSize: "13px" }}
          >
            <Plus size={14} /> Add Article
          </button>
        </div>
      </div>
      <div className="card-body" style={{ padding: "0" }}>
        <div className="table-responsive">
          <table className="clinical-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Slug Path</th>
                <th>Author</th>
                <th>Status</th>
                <th>Created At</th>
                <th style={{ textAlign: "right" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(b => (
                <tr key={b.id}>
                  <td style={{ fontWeight: 600 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      {b.featuredImage ? (
                        <img
                          src={formatImageUrl(b.featuredImage)}
                          alt=""
                          style={{ width: "32px", height: "32px", borderRadius: "4px", objectFit: "cover", flexShrink: 0 }}
                          onError={(e) => { (e.target as HTMLImageElement).src = "/Container@2x.png"; }}
                        />
                      ) : (
                        b.status === "PUBLISHED" ? <Globe size={14} className="text-success" /> : <FileText size={14} className="text-muted" />
                      )}
                      <span>{b.title}</span>
                    </div>
                  </td>
                  <td style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--text-muted)" }}>/{b.slug}</td>
                  <td>{(b.author && !b.author.toLowerCase().includes("admin") && !b.author.toLowerCase().includes("ankit")) ? b.author : "Swaraj Hospital"}</td>
                  <td>
                    <span className={`badge ${b.status === "PUBLISHED" ? "badge-success" : "badge-outline"}`}>
                      {b.status}
                    </span>
                  </td>
                  <td style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                    {new Date(b.createdAt).toLocaleDateString()}
                  </td>
                  <td>
                    <div style={{ display: "flex", gap: "4px", justifyContent: "flex-end" }}>
                      <button
                        onClick={() => openBlogModal(b)}
                        className="btn btn-secondary btn-sm"
                        style={{ padding: "4px 8px" }}
                        title="Edit Article"
                      >
                        <Edit2 size={13} />
                      </button>
                      <button
                        onClick={() => onDelete(b.id)}
                        className="btn btn-danger btn-sm"
                        style={{ padding: "4px 8px", backgroundColor: "transparent", color: "var(--danger)", border: "1px solid var(--danger-light)" }}
                        title="Delete Article"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} style={{ textAlign: "center", color: "var(--text-muted)", padding: "32px" }}>
                    No blog articles added yet.
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
