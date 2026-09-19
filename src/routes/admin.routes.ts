import express from "express";
import adminController from "../controllers/admin.controller.js";
import { adminMiddleware } from "../middleware/admin.middleware.js";

const router = express.Router();

// Public auth routes
router.post("/login", adminController.login.bind(adminController));

// Protected admin routes
router.use(adminMiddleware);

// Doctor management
router.get("/doctors", adminController.listDoctors.bind(adminController));
router.post("/doctors", adminController.createDoctor.bind(adminController));
router.put("/doctors/:id", adminController.updateDoctor.bind(adminController));
router.delete("/doctors/:id", adminController.deleteDoctor.bind(adminController));

// Specialization management
router.get("/specializations", adminController.listSpecializations.bind(adminController));
router.post("/specializations", adminController.createSpecialization.bind(adminController));
router.put("/specializations/:id", adminController.updateSpecialization.bind(adminController));
router.delete("/specializations/:id", adminController.deleteSpecialization.bind(adminController));

// Lead management
router.get("/leads", adminController.listLeads.bind(adminController));
router.put("/leads/:id", adminController.updateLead.bind(adminController));
router.delete("/leads/:id", adminController.deleteLead.bind(adminController));

// Booking management
router.get("/bookings", adminController.listBookings.bind(adminController));
router.post("/bookings/:id/confirm", adminController.confirmBooking.bind(adminController));
router.post("/bookings/:id/reschedule", adminController.rescheduleBooking.bind(adminController));
router.post("/bookings/:id/cancel", adminController.cancelBooking.bind(adminController));
router.delete("/bookings/:id", adminController.deleteBooking.bind(adminController));

// Blog CMS management
router.get("/blogs", adminController.listBlogs.bind(adminController));
router.post("/blogs", adminController.createBlog.bind(adminController));
router.put("/blogs/:id", adminController.updateBlog.bind(adminController));
router.delete("/blogs/:id", adminController.deleteBlog.bind(adminController));

// Job Role / Career management
router.get("/job-roles", adminController.listJobRoles.bind(adminController));
router.post("/job-roles", adminController.createJobRole.bind(adminController));
router.put("/job-roles/:id", adminController.updateJobRole.bind(adminController));
router.delete("/job-roles/:id", adminController.deleteJobRole.bind(adminController));

export default router;
