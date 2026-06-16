import twilio from "twilio";

interface TwilioConfig {
  accountSid: string;
  authToken: string;
  phoneNumber: string;
}

class TwilioService {
  private client: ReturnType<typeof twilio>;
  private config: TwilioConfig;

  constructor() {
    this.config = {
      accountSid: process.env.TWILIO_ACCOUNT_SID || "",
      authToken: process.env.TWILIO_AUTH_TOKEN || "",
      phoneNumber: process.env.TWILIO_PHONE_NUMBER || "",
    };

    if (!this.config.accountSid || !this.config.authToken) {
      console.warn(
        "Twilio credentials not configured. SMS functionality will be disabled."
      );
    }

    this.client = twilio(this.config.accountSid, this.config.authToken);
  }

  async sendOTP(phoneNumber: string, otp: string): Promise<boolean> {
    try {
      if (!this.config.accountSid || !this.config.authToken) {
        console.log(
          `[DEV MODE] OTP for ${phoneNumber}: ${otp} (expires in 10 minutes)`
        );
        return true;
      }

      const message = await this.client.messages.create({
        body: `Your OPD Booking OTP is: ${otp}. Valid for 10 minutes. Do not share this code.`,
        from: this.config.phoneNumber,
        to: phoneNumber,
      });

      console.log(`SMS sent successfully: ${message.sid}`);
      return true;
    } catch (error) {
      console.error("Error sending OTP via Twilio:", error);
      throw error;
    }
  }

  async verifySMS(
    phoneNumber: string,
    verificationCode: string
  ): Promise<boolean> {
    try {
      if (!this.config.accountSid || !this.config.authToken) {
        console.log(`[DEV MODE] Verification code verified for ${phoneNumber}`);
        return true;
      }

      const verification = await this.client.verify.v2
        .services(process.env.TWILIO_VERIFY_SERVICE_SID || "")
        .verificationChecks.create({
          to: phoneNumber,
          code: verificationCode,
        });

      return verification.status === "approved";
    } catch (error) {
      console.error("Error verifying OTP with Twilio:", error);
      return false;
    }
  }
}

export default new TwilioService();
