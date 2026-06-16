export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
  return phoneRegex.test(phone);
};

export const validateOTP = (otp: string): boolean => {
  const otpLength = parseInt(process.env.OTP_LENGTH || "6");
  const otpRegex = new RegExp(`^\\d{${otpLength}}$`);
  return otpRegex.test(otp);
};

export interface RequestOTPRequest {
  phone: string;
}

export interface VerifyOTPRequest {
  phone: string;
  otp: string;
}

export const validateRequestOTP = (data: any): data is RequestOTPRequest => {
  return (
    typeof data === "object" &&
    typeof data.phone === "string" &&
    validatePhone(data.phone)
  );
};

export const validateVerifyOTP = (data: any): data is VerifyOTPRequest => {
  return (
    typeof data === "object" &&
    typeof data.phone === "string" &&
    typeof data.otp === "string" &&
    validatePhone(data.phone) &&
    validateOTP(data.otp)
  );
};
