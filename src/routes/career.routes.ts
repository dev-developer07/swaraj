import express from "express";
import { prisma } from "../lib/db.js";

const router = express.Router();

// Get active job roles for Career page
router.get("/job-roles", async (req, res) => {
  try {
    const roles = await prisma.jobRole.findMany({
      where: { isActive: true },
      orderBy: { createdAt: "desc" }
    });
    res.status(200).json({ success: true, data: roles });
  } catch (error) {
    console.error("Error fetching public job roles:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Get single job role by ID
router.get("/job-roles/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const role = await prisma.jobRole.findUnique({
      where: { id: id as string }
    });
    if (!role) {
      res.status(404).json({ success: false, message: "Job role not found" });
      return;
    }
    res.status(200).json({ success: true, data: role });
  } catch (error) {
    console.error("Error fetching public job role:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

export default router;
