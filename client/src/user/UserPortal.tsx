import { Routes, Route } from "react-router-dom";
import Container from "./views/Container"
import MeetTheTeam from "./views/MeetTheTeam";
import DoctorDetail from "./views/DoctorDetail";
import Specialities from "./views/Specialities";
import Cardiology from "./views/Cardiology";
import Carrer from "./views/Carrer";
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
          <Route path="/meet-the-team" element={<MeetTheTeam />} />
          <Route path="/team" element={<MeetTheTeam />} />
          <Route path="/doctor/:id" element={<DoctorDetail />} />
          <Route path="/specialities" element={<Specialities />} />
          <Route path="/specialties" element={<Specialities />} />
          <Route path="/speciality/:specialtyId" element={<Cardiology />} />
          <Route path="/specialty/:specialtyId" element={<Cardiology />} />
          <Route path="/carrer" element={<Carrer />} />
          <Route path="/career" element={<Carrer />} />
          {/* <Route path="/book" element={<BookAppointmentView />} />
          <Route path="/callback" element={<CallbackRequestView />} />
          <Route path="/blogs" element={<BlogsFeedView />} /> */}
        </Routes>
      </main>

      {/* Premium Figma Footer */}

    </div>
  );
}
