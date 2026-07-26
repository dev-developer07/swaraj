import { prisma } from "../lib/db.js";
import twilioService from "./twilio.service.js";
import crypto from "crypto";

interface OtpResult {
  success: boolean;
  message: string;
  exists?: boolean;
  userId?: number;
  token?: string;
  isRegistered?: boolean;
  user?: {
    id: number;
    name: string | null;
    careof: string | null;
    phone: string;
    email: string | null;
    address: string | null;
  };
}

interface OtpEntry {
  otp: string;
  expiresAt: number;
  attempts: number;
}

const otpStore = new Map<string, OtpEntry>();

const OTP_LENGTH = 6;
const OTP_EXPIRY_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 5;

class OtpService {

  async requestOTP(phoneNumber: string): Promise<OtpResult> {
    try {
      const normalizedPhone = this.normalizePhoneNumber(phoneNumber);

      const existingUser = await prisma.user.findUnique({
        where: { phone: normalizedPhone },
      });

      const otp = this.generateOTP();

      otpStore.set(normalizedPhone, {
        otp,
        expiresAt: Date.now() + OTP_EXPIRY_MS,
        attempts: 0,
      });

      await twilioService.sendOTP(normalizedPhone, otp);

      return {
        success: true,
        message: "OTP sent successfully",
        exists: !!existingUser?.name,
      };
    } catch (error) {
      console.error("[OTP] request error:", error);
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

      // 1. Try Twilio Verify API (returns false if invalid, null if not using Verify)
      const twilioResult = await twilioService.checkVerification(normalizedPhone, otp);

      if (twilioResult === false) {
        return { success: false, message: "Invalid or expired OTP" };
      }

      // 2. If Verify API didn't handle it (null), check local store
      if (twilioResult === null) {
        const entry = otpStore.get(normalizedPhone);

        if (!entry) {
          return { success: false, message: "No OTP requested for this number" };
        }

        if (Date.now() > entry.expiresAt) {
          otpStore.delete(normalizedPhone);
          return { success: false, message: "OTP has expired. Please request a new one." };
        }

        if (entry.attempts >= MAX_ATTEMPTS) {
          otpStore.delete(normalizedPhone);
          return { success: false, message: "Too many failed attempts. Please request a new OTP." };
        }

        if (entry.otp !== otp) {
          entry.attempts += 1;
          return { success: false, message: "Invalid OTP" };
        }
      }

      otpStore.delete(normalizedPhone);

      let user = await prisma.user.findUnique({
        where: { phone: normalizedPhone },
      });

      if (!user) {
        user = await prisma.user.create({
          data: { phone: normalizedPhone },
        });
      }

      const token = await this.generateToken(user.id, user.phone);

      return {
        success: true,
        message: "OTP verified successfully",
        userId: user.id,
        token,
        isRegistered: !!user.name,
        user: {
          id: user.id,
          name: user.name,
          careof: user.careof,
          phone: user.phone,
          email: user.email,
          address: user.address,
        },
      };
    } catch (error) {
      console.error("[OTP] verify error:", error);
      return {
        success: false,
        message: "Failed to verify OTP. Please try again.",
      };
    }
  }

  private generateOTP(): string {
    return crypto
      .randomInt(Math.pow(10, OTP_LENGTH - 1), Math.pow(10, OTP_LENGTH))
      .toString();
  }

  private async generateToken(userId: number, phone: string): Promise<string> {
    const { createRequire } = await import("node:module");
    const jwt = createRequire(import.meta.url)("jsonwebtoken");
    return jwt.sign(
      { userId, phone, iat: Date.now() },
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
}

export default new OtpService();
