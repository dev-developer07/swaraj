import crypto from "crypto";
import { prisma } from "../lib/db.js";
import twilioService from "./twilio.service.js";

interface OtpResult {
  success: boolean;
  message: string;
  userId?: number;
  token?: string;
  isRegistered?: boolean;
}

class OtpService {
  private otpLength: number = parseInt(process.env.OTP_LENGTH || "6");
  private otpExpiryMinutes: number = parseInt(
    process.env.OTP_EXPIRY_MINUTES || "10"
  );

  generateOTP(): string {
    return crypto
      .randomInt(Math.pow(10, this.otpLength - 1), Math.pow(10, this.otpLength))
      .toString();
  }

  async requestOTP(phoneNumber: string): Promise<OtpResult> {
    try {
      const normalizedPhone = this.normalizePhoneNumber(phoneNumber);

      let user = await prisma.user.findUnique({
        where: { phone: normalizedPhone },
      });

      if (!user) {
        user = await prisma.user.create({
          data: {
            phone: normalizedPhone,
          },
        });
      }

      const otp = this.generateOTP();
      const expiresAt = new Date(Date.now() + this.otpExpiryMinutes * 60 * 1000);

      await prisma.otpLog.create({
        data: {
          userId: user.id,
          phone: normalizedPhone,
          otp,
          expiresAt,
        },
      });

      await twilioService.sendOTP(normalizedPhone, otp);

      return {
        success: true,
        message: "OTP sent successfully",
        userId: user.id,
      };
    } catch (error) {
      console.error("Error requesting OTP:", error);
      return {
        success: false,
        message: "Failed to send OTP. Please try again.",
      };
    }
  }

  async verifyOTP(
    phoneNumber: string,
    otp: string
  ): Promise<OtpResult> {
    try {
      const normalizedPhone = this.normalizePhoneNumber(phoneNumber);

      const user = await prisma.user.findUnique({
        where: { phone: normalizedPhone },
      });

      if (!user) {
        return {
          success: false,
          message: "User not found",
        };
      }

      const otpLog = await prisma.otpLog.findFirst({
        where: {
          userId: user.id,
          phone: normalizedPhone,
          otp,
          isUsed: false,
          expiresAt: {
            gt: new Date(),
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      if (!otpLog) {
        return {
          success: false,
          message: "Invalid or expired OTP",
        };
      }

      await prisma.otpLog.update({
        where: { id: otpLog.id },
        data: { isUsed: true },
      });

      const token = this.generateToken(user.id, user.phone);

      return {
        success: true,
        message: "OTP verified successfully",
        userId: user.id,
        token,
        isRegistered: !!user.name,
      };
    } catch (error) {
      console.error("Error verifying OTP:", error);
      return {
        success: false,
        message: "Failed to verify OTP. Please try again.",
      };
    }
  }

  private generateToken(userId: number, phone: string): string {
    const jwt = require("jsonwebtoken");
    return jwt.sign(
      {
        userId,
        phone,
        iat: Date.now(),
      },
      process.env.JWT_SECRET || "default_secret",
      { expiresIn: "24h" }
    );
  }

  private normalizePhoneNumber(phone: string): string {
    let normalized = phone.replace(/\D/g, "");

    if (!normalized.startsWith("+")) {
      if (normalized.length === 10) {
        normalized = "+91" + normalized;
      } else if (!normalized.startsWith("91")) {
        normalized = "+91" + normalized.slice(-10);
      } else if (normalized.length === 12) {
        normalized = "+" + normalized;
      }
    }

    return normalized;
  }

  async cleanupExpiredOTPs(): Promise<void> {
    try {
      await prisma.otpLog.deleteMany({
        where: {
          expiresAt: {
            lt: new Date(),
          },
        },
      });
      console.log("Expired OTPs cleaned up");
    } catch (error) {
      console.error("Error cleaning up expired OTPs:", error);
    }
  }
}

export default new OtpService();
