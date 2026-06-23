import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPortal from "./user/UserPortal";
import AdminDashboard from "./admin/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Dashboard */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Public Patient User Portal */}
        <Route path="/*" element={<UserPortal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
