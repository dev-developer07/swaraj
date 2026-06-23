import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/db.js";
import type { Role } from "../generated/prisma/enums.js";

export interface AdminRequest extends Request {
  adminId?: number;
  adminRole?: Role;
  admin?: {
    id: number;
    Username: string;
    role: Role;
  };
}

export const adminMiddleware = async (
  req: AdminRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      res.status(401).json({
        success: false,
        message: "No token provided",
      });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || "default_secret") as {
      adminId: number;
      role: Role;
      username: string;
    };

    if (!decoded.adminId || !decoded.role) {
      res.status(403).json({
        success: false,
        message: "Access denied: invalid token payload",
      });
      return;
    }

    // Verify admin exists in the database
    const admin = await prisma.admin.findUnique({
      where: { id: decoded.adminId }
    });

    if (!admin) {
      res.status(401).json({
        success: false,
        message: "Admin account not found",
      });
      return;
    }

    req.adminId = admin.id;
    req.adminRole = admin.role;
    req.admin = {
      id: admin.id,
      Username: admin.Username,
      role: admin.role,
    };

    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};
