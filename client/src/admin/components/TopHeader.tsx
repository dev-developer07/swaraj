
interface TopHeaderProps {
  activeTab: string;
}

export default function TopHeader({ activeTab }: TopHeaderProps) {
  const getHeaderTitle = () => {
    switch (activeTab) {
      case "overview": return "Operations Terminal";
      case "bookings": return "OPD Appointments Desk";
      case "leads": return "Callback Leads Desk";
      case "doctors": return "Clinical Registry";
      case "specializations": return "Clinical Specialty Map";
      case "blogs": return "Patient Information CMS";
      default: return "Dashboard";
    }
  };

  return (
    <header className="top-header">
      <div className="header-left">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ display: "inline-block", width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--success)" }}></span>
            <span style={{ fontSize: "10px", fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.5px" }}>CLINICAL WORKSTATION #01</span>
          </div>
          <h2 className="header-title" style={{ margin: "2px 0 0 0", fontSize: "16px", fontWeight: 700 }}>
            {getHeaderTitle()}
          </h2>
        </div>
      </div>
      <div className="header-right">
        <span className="status-badge">ONLINE</span>
        <div className="user-profile">
          <div className="user-avatar">SA</div>
          <div className="user-info">
            <span className="user-name">System Administrator</span>
            <span className="user-role">ID: staff_root_01</span>
          </div>
        </div>
      </div>
    </header>
  );
}
