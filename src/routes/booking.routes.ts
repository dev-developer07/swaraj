import express from "express";
import bookingController from "../controllers/booking.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/doctors-list", bookingController.getDoctors.bind(bookingController));
router.post("/request-booking", authMiddleware, bookingController.requestBooking.bind(bookingController));
router.post("/verify-payment", authMiddleware, bookingController.verifyPayment.bind(bookingController));
router.post("/lead", bookingController.requestLead.bind(bookingController));

export default router;