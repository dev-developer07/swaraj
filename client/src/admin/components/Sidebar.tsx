import { LayoutDashboard, Calendar, ClipboardList, UserSquare2, ShieldAlert, BookOpen, LogOut } from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
}

export default function Sidebar({
  activeTab,
  setActiveTab,
  onLogout
}: SidebarProps) {
  const menuItems = [
    { id: "overview", label: "Overview", icon: <LayoutDashboard size={16} /> },
    { id: "bookings", label: "OPD Bookings", icon: <Calendar size={16} /> },
    { id: "leads", label: "Callback Leads", icon: <ClipboardList size={16} /> },
    { id: "doctors", label: "Doctor Directory", icon: <UserSquare2 size={16} /> },
    { id: "specializations", label: "Specialties", icon: <ShieldAlert size={16} /> },
    { id: "blogs", label: "Blog CMS", icon: <BookOpen size={16} /> },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "28px", height: "28px", borderRadius: "4px", backgroundColor: "var(--primary)", color: "#ffffff", fontWeight: 800, fontSize: "16px", flexShrink: 0 }}>
          +
        </div>
        <div>
          <h1 className="sidebar-title" style={{ fontSize: "14px", margin: 0 }}>Swaraj Hospital</h1>
          <p style={{ fontSize: "10px", color: "var(--text-muted)", margin: 0 }}>Clinical Admin</p>
        </div>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`sidebar-item ${activeTab === item.id ? "active" : ""}`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      
      <div className="sidebar-footer">
        <button 
          onClick={onLogout} 
          className="sidebar-item" 
          style={{ color: "#ef4444" }}
        >
          <LogOut size={16} />
          <span>Exit Terminal</span>
        </button>
      </div>
    </div>
  );
}
