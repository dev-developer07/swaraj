import type { Response } from "express";
import type { AuthRequest } from "../middleware/auth.middleware.js";
import otpService from "../services/otp.service.js";
import { validateRequestOTP, validateVerifyOTP, validatePhone } from "../validators/auth.validator.js";
import { prisma } from "../lib/db.js";

export class AuthController {
  async requestOTP(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { phone } = req.body;

      if (!validateRequestOTP(req.body)) {
        res.status(400).json({
          success: false,
          message: "Invalid phone number format",
        });
        return;
      }

      const result = await otpService.requestOTP(phone);

      if (!result.success) {
        res.status(500).json({
          success: false,
          message: result.message,
        });
        return;
      }

      res.status(200).json({
        success: true,
        message: result.message,
        data: {
          exists: result.exists,
        },
      });
    } catch (error) {
      console.error("Error in requestOTP:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  async verifyOTP(req: AuthRequest, res: Response): Promise<void> {
    try {
      const { phone, otp } = req.body;

      if (!validateVerifyOTP(req.body)) {
        res.status(400).json({
          success: false,
          message: "Invalid phone number or OTP format",
        });
        return;
      }

      const result = await otpService.verifyOTP(phone, otp);

      if (!result.success) {
        res.status(401).json({
          success: false,
          message: result.message,
        });
        return;
      }

      res.status(200).json({
        success: true,
        message: result.message,
        data: {
          userId: result.userId,
          token: result.token,
          isRegistered: result.isRegistered,
          user: result.user,
        },
      });
    } catch (error) {
      console.error("Error in verifyOTP:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  async Userexist(req: AuthRequest, res: Response): Promise<void> {
    try {
      const phoneInput = (req.query.phone as string) || req.body.phone;

      if (!phoneInput || !validatePhone(phoneInput)) {
        res.status(400).json({
          success: false,
          message: "Invalid phone number format",
        });
        return;
      }

      const user = await prisma.user.findUnique({
        where: { phone: phoneInput },
      });

      if (!user || !user.name) {
        res.status(200).json({
          success: true,
          message: "User not registered",
          data: {
            exists: !!user,
            isRegistered: false,
          },
        });
      } else {
        res.status(200).json({
          success: true,
          message: "User exists",
          data: {
            exists: true,
            isRegistered: true,
            userId: user.id,
          },
        });
      }
    } catch (error) {
      console.error("Error in Userexist:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }


  async getProfile(req: AuthRequest, res: Response): Promise<void> {
    try {
      if (!req.userId) {
        res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
        return;
      }

      const user = await prisma.user.findUnique({
        where: { id: req.userId },
        select: {
          id: true,
          name: true,
          phone: true,
          email: true,
          address: true,
          careof: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      if (!user) {
        res.status(404).json({
          success: false,
          message: "User not found",
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error) {
      console.error("Error in getProfile:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  async updateProfile(req: AuthRequest, res: Response): Promise<void> {
    try {
      if (!req.userId) {
        res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
        return;
      }

      const { name, email, address, careof } = req.body;

      const updatedUser = await prisma.user.update({
        where: { id: req.userId },
        data: {
          ...(name && { name }),
          ...(email && { email }),
          ...(address && { address }),
          ...(careof && { careof }),
        },
        select: {
          id: true,
          name: true,
          phone: true,
          email: true,
          address: true,
          careof: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      res.status(200).json({
        success: true,
        message: "Profile updated successfully",
        data: updatedUser,
      });
    } catch (error) {
      console.error("Error in updateProfile:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  async logout(req: AuthRequest, res: Response): Promise<void> {
    try {
      res.status(200).json({
        success: true,
        message: "Logged out successfully",
      });
    } catch (error) {
      console.error("Error in logout:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
}

export default new AuthController();
