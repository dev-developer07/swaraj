export interface User {
  id: number;
  name?: string;
  phone: string;
  email?: string;
  address?: string;
  careof?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OtpLog {
  id: string;
  userId: number;
  phone: string;
  otp: string;
  isUsed: boolean;
  expiresAt: Date;
  createdAt: Date;
}

export interface AuthToken {
  userId: number;
  phone: string;
  iat: number;
  exp?: number;
}

export interface LoginRequest {
  phone: string;
  otp?: string;
}

export interface OtpRequest {
  phone: string;
}

export interface OtpVerifyRequest {
  phone: string;
  otp: string;
}

export interface UserProfile {
  id: number;
  name?: string;
  phone: string;
  email?: string;
  address?: string;
  careof?: string;
}