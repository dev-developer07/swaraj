import { Routes, Route } from "react-router-dom";
import Container from "./views/Container"
// import HomeView from "./views/HomeView";
// import BookAppointmentView from "./views/BookAppointmentView";
// import CallbackRequestView from "./views/CallbackRequestView";
// import BlogsFeedView from "./views/BlogsFeedView";

export default function UserPortal() {
  return (
    <div style={{ minHeight: "100vh", width: "100%", backgroundColor: "#ffffff", display: "flex", flexDirection: "column" }}>
      {/* Patient views router */}
      <main style={{ flexGrow: 1, position: "relative" }}>
        <Routes>
          <Route path="/" element={<Container />} />
          {/* <Route path="/book" element={<BookAppointmentView />} />
          <Route path="/callback" element={<CallbackRequestView />} />
          <Route path="/blogs" element={<BlogsFeedView />} /> */}
        </Routes>
      </main>

      {/* Premium Figma Footer */}

    </div>
  );
}
