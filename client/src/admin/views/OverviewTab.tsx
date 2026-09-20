import { Calendar, ClipboardList, UserCheck, Clock } from "lucide-react";

interface OverviewTabProps {
  bookings: any[];
  leads: any[];
  doctors: any[];
  specializations: any[];
  setActiveTab: (tab: any) => void;
}

export default function OverviewTab({
  bookings,
  leads,
  doctors,
  specializations,
  setActiveTab
}: OverviewTabProps) {
  const pendingCount = bookings.filter(b => b.status === "PENDING").length;

  return (
    <>
      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card" onClick={() => setActiveTab("bookings")} style={{ cursor: "pointer" }}>
          <div className="stat-info">
            <span className="stat-label">Confirmed Bookings</span>
            <span className="stat-value">{bookings.filter(b => b.status === "CONFIRMED").length}</span>
          </div>
          <div className="stat-icon-wrapper">
            <Calendar size={20} />
          </div>
        </div>
        <div className="stat-card" onClick={() => setActiveTab("leads")} style={{ cursor: "pointer" }}>
          <div className="stat-info">
            <span className="stat-label">New Leads</span>
            <span className="stat-value">{leads.filter(l => l.status === "NEW").length}</span>
          </div>
          <div className="stat-icon-wrapper" style={{ backgroundColor: "var(--warning-light)", color: "var(--warning)" }}>
            <ClipboardList size={20} />
          </div>
        </div>
        <div className="stat-card" onClick={() => setActiveTab("doctors")} style={{ cursor: "pointer" }}>
          <div className="stat-info">
            <span className="stat-label">Doctors Active</span>
            <span className="stat-value">{doctors.filter(d => d.isActive).length}</span>
          </div>
          <div className="stat-icon-wrapper" style={{ backgroundColor: "var(--success-light)", color: "var(--success)" }}>
            <UserCheck size={20} />
          </div>
        </div>
        <div className="stat-card" onClick={() => setActiveTab("bookings")} style={{ cursor: "pointer" }}>
          <div className="stat-info">
            <span className="stat-label">Pending Approvals</span>
            <span className="stat-value">{pendingCount}</span>
          </div>
          <div className="stat-icon-wrapper" style={{ backgroundColor: pendingCount > 0 ? "rgba(239, 68, 68, 0.1)" : "rgba(2, 132, 199, 0.1)", color: pendingCount > 0 ? "#ef4444" : "#0284c7" }}>
            <Clock size={20} />
          </div>
        </div>
      </div>

      {/* Overview Details */}
      <div className="grid-2">
        {/* Recent Bookings */}
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Recent OPD Bookings</h2>
            <button className="btn btn-secondary btn-sm" onClick={() => setActiveTab("bookings")}>View All</button>
          </div>
          <div className="card-body" style={{ padding: "0" }}>
            <div className="table-responsive">
              <table className="clinical-table">
                <thead>
                  <tr>
                    <th>Ref</th>
                    <th>Patient</th>
                    <th>Doctor</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.slice(0, 5).map(b => (
                    <tr key={b.id}>
                      <td style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}>{b.bookingReference}</td>
                      <td>
                        <div>{b.user?.name || "Unnamed"}</div>
                        <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>{b.user?.phone}</div>
                      </td>
                      <td>{b.doctor?.name}</td>
                      <td>
                        <span className={`badge ${
                          b.status === "CONFIRMED" ? "badge-success" :
                          b.status === "PENDING" ? "badge-warning" :
                          b.status === "RESCHEDULED" ? "badge-info" : "badge-danger"
                        }`}>
                          {b.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                  {bookings.length === 0 && (
                    <tr>
                      <td colSpan={4} style={{ textAlign: "center", color: "var(--text-muted)", padding: "24px" }}>
                        No recent booking records found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Callbacks Callback */}
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Recent Callback Leads</h2>
            <button className="btn btn-secondary btn-sm" onClick={() => setActiveTab("leads")}>View All</button>
          </div>
          <div className="card-body" style={{ padding: "0" }}>
            <div className="table-responsive">
              <table className="clinical-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Preferred Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.slice(0, 5).map(l => (
                    <tr key={l.id}>
                      <td>
                        <div style={{ fontWeight: 600 }}>{l.name}</div>
                        <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>{l.phone}</div>
                      </td>
                      <td>{new Date(l.preferredDate).toLocaleDateString()}</td>
                      <td>
                        <span className={`badge ${
                          l.status === "NEW" ? "badge-danger" :
                          l.status === "CONTACTED" ? "badge-warning" :
                          l.status === "QUALIFIED" ? "badge-success" : "badge-outline"
                        }`}>
                          {l.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                  {leads.length === 0 && (
                    <tr>
                      <td colSpan={3} style={{ textAlign: "center", color: "var(--text-muted)", padding: "24px" }}>
                        No recent callback requests found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
