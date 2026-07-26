import twilio from "twilio";

const isVerifySid = (sid: string) => sid.startsWith("VA");

interface TwilioConfig {
  accountSid: string;
  authToken: string;
  serviceSid: string;
}

class TwilioService {
  private client: ReturnType<typeof twilio>;
  private config: TwilioConfig;

  constructor() {
    this.config = {
      accountSid: process.env.TWILIO_ACCOUNT_SID || "",
      authToken: process.env.TWILIO_AUTH_TOKEN || "",
      serviceSid: process.env.TWILIO_VERIFY_SERVICE_SID || "",
    };

    this.client = twilio(this.config.accountSid, this.config.authToken);
  }

  async sendOTP(phoneNumber: string, otp: string): Promise<boolean> {
    try {
      if (!this.config.accountSid || !this.config.authToken || !this.config.serviceSid) {
        return false;
      }

      if (isVerifySid(this.config.serviceSid)) {
        await this.client.verify.v2
          .services(this.config.serviceSid)
          .verifications.create({ to: phoneNumber, channel: "sms" });
      } else {
        await this.client.messages.create({
          body: `Your OPD Booking OTP is: ${otp}. Valid for 10 minutes.`,
          messagingServiceSid: this.config.serviceSid,
          to: phoneNumber,
        });
      }

      return true;
    } catch (error: any) {
      console.error("[OTP] send error:", error?.message || error);
      return false;
    }
  }

  async checkVerification(phoneNumber: string, code: string): Promise<boolean | null> {
    if (!this.config.accountSid || !this.config.authToken || !this.config.serviceSid) {
      return null;
    }

    if (!isVerifySid(this.config.serviceSid)) {
      return null;
    }

    try {
      const check = await this.client.verify.v2
        .services(this.config.serviceSid)
        .verificationChecks.create({ to: phoneNumber, code });
      return check.status === "approved";
    } catch (error: any) {
      console.error("[OTP] verify check error:", error?.message || error);
      return false;
    }
  }

  async sendSMS(phoneNumber: string, messageBody: string): Promise<boolean> {
    try {
      if (!this.config.accountSid || !this.config.authToken) {
        return false;
      }

      const opts: any = { body: messageBody, to: phoneNumber };

      if (isVerifySid(this.config.serviceSid)) {
        return false;
      }

      if (this.config.serviceSid) {
        opts.messagingServiceSid = this.config.serviceSid;
      }

      await this.client.messages.create(opts);
      return true;
    } catch (error) {
      console.error("[SMS] send error:", error);
      return false;
    }
  }
}

export default new TwilioService();
