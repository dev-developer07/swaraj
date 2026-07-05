import { Routes, Route } from "react-router-dom";
import Container from "./views/Container"
import MeetTheTeam from "./views/MeetTheTeam";
import DoctorDetail from "./views/DoctorDetail";
import Specialities from "./views/Specialities";
import Cardiology from "./views/Cardiology";
import Carrer from "./views/Carrer";
import CarrerRole from "./views/CarrerRole";
import BookAppointment from "./views/BookAppointment";
import AppointmentInquiry from "./views/AppointmentInquiry";
import BlogsPage from "./components/BlogsPage";
import ArticleDetail from "./views/ArticleDetail";

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
          <Route path="/carrer/:roleId" element={<CarrerRole />} />
          <Route path="/career/:roleId" element={<CarrerRole />} />
          <Route path="/carrer/role" element={<CarrerRole />} />
          <Route path="/career/role" element={<CarrerRole />} />
          <Route path="/book" element={<BookAppointment />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/appointment" element={<BookAppointment />} />
          <Route path="/enquire" element={<AppointmentInquiry />} />
          <Route path="/enquiry" element={<AppointmentInquiry />} />
          <Route path="/schedule-call" element={<AppointmentInquiry />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/articles" element={<BlogsPage />} />
          <Route path="/blog/:slug" element={<ArticleDetail />} />
        </Routes>
      </main>

      {/* Premium Figma Footer */}

    </div>
  );
}
