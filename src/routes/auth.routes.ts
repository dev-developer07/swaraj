import express from "express";
import authController from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/request-otp", authController.requestOTP.bind(authController));
router.post("/verify-otp", authController.verifyOTP.bind(authController));
router.get("/user", authController.Userexist.bind(authController));

router.get("/profile", authMiddleware, authController.getProfile.bind(authController));
router.patch("/profile", authMiddleware, authController.updateProfile.bind(authController));

router.post("/logout", authMiddleware, authController.logout.bind(authController));

export default router;
