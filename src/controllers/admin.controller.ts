import type { Request, Response } from "express";
import type { AdminRequest } from "../middleware/admin.middleware.js";
import { prisma } from "../lib/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import twilioService from "../services/twilio.service.js";

class AdminController {

    async login(req: Request, res: Response): Promise<void> {
        try {
            const { username, password } = req.body;

            if (!username || !password) {
                res.status(400).json({
                    success: false,
                    message: "Username and password are required"
                });
                return;
            }

            // Seed default admin if no admins exist in DB
            const adminCount = await prisma.admin.count();
            if (adminCount === 0) {
                const defaultPasswordHash = await bcrypt.hash("admin123", 10);
                await prisma.admin.create({
                    data: {
                        Username: "admin",
                        password: defaultPasswordHash,
                        role: "ADMIN"
                    }
                });
                console.log("Seeded default admin account (username: admin, password: admin123)");
            }

            const admin = await prisma.admin.findUnique({
                where: { Username: username }
            });

            if (!admin) {
                res.status(401).json({
                    success: false,
                    message: "Invalid username or password"
                });
                return;
            }

            const isMatch = await bcrypt.compare(password, admin.password);
            if (!isMatch) {
                res.status(401).json({
                    success: false,
                    message: "Invalid username or password"
                });
                return;
            }

            const token = jwt.sign(
                {
                    adminId: admin.id,
                    role: admin.role,
                    username: admin.Username
                },
                process.env.JWT_SECRET || "default_secret",
                { expiresIn: "24h" }
            );

            res.status(200).json({
                success: true,
                message: "Login successful",
                data: {
                    token,
                    admin: {
                        id: admin.id,
                        username: admin.Username,
                        role: admin.role
                    }
                }
            });

        } catch (error) {
            console.error("Error in admin login:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }


    // Doctor management start
    async listDoctors(req: AdminRequest, res: Response): Promise<void> {
        try {
            const doctors = await prisma.doctor.findMany({
                include: {
                    specialization: true
                },
                orderBy: { name: "asc" }
            });

            res.status(200).json({
                success: true,
                data: doctors
            });
        } catch (error) {
            console.error("Error listing doctors:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }

    async createDoctor(req: AdminRequest, res: Response): Promise<void> {
        try {
            const { name, specializationId, experienceYears, bookingFee, profileImage, description, email, phone, isActive, schedules } = req.body;

            if (!name || !specializationId || bookingFee === undefined) {
                res.status(400).json({
                    success: false,
                    message: "Name, specialization ID, and booking fee are required"
                });
                return;
            }

            // Verify specialization exists
            const spec = await prisma.specialization.findUnique({
                where: { id: specializationId as string }
            });
            if (!spec) {
                res.status(404).json({
                    success: false,
                    message: "Specialization not found"
                });
                return;
            }

            let schedulesData: any = [];
            if (schedules) {
                try {
                    schedulesData = typeof schedules === "string" ? JSON.parse(schedules) : schedules;
                    if (!Array.isArray(schedulesData)) {
                        schedulesData = [];
                    }
                } catch (e) {
                    schedulesData = [];
                }
            }

            const doctor = await prisma.doctor.create({
                data: {
                    name,
                    specializationId,
                    experienceYears: experienceYears ? parseInt(experienceYears) : null,
                    bookingFee: String(bookingFee),
                    profileImage: profileImage || null,
                    description: description || null,
                    email: email || null,
                    phone: phone || null,
                    isActive: isActive !== undefined ? Boolean(isActive) : true,
                    schedules: schedulesData
                },
                include: {
                    specialization: true
                }
            });

            res.status(201).json({
                success: true,
                message: "Doctor profile created successfully",
                data: doctor
            });

        } catch (error) {
            console.error("Error creating doctor:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }

    async updateDoctor(req: AdminRequest, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const { name, specializationId, experienceYears, bookingFee, profileImage, description, email, phone, isActive, schedules } = req.body;

            const existingDoctor = await prisma.doctor.findUnique({
                where: { id: id as string }
            });
            if (!existingDoctor) {
                res.status(404).json({
                    success: false,
                    message: "Doctor profile not found"
                });
                return;
            }

            if (specializationId) {
                const spec = await prisma.specialization.findUnique({
                    where: { id: specializationId as string }
                });
                if (!spec) {
                    res.status(404).json({
                        success: false,
                        message: "Specialization not found"
                    });
                    return;
                }
            }

            const updateData: any = {};
            if (name !== undefined) updateData.name = name;
            if (specializationId !== undefined) updateData.specializationId = specializationId;
            if (experienceYears !== undefined) {
                updateData.experienceYears = experienceYears ? parseInt(experienceYears) : null;
            }
            if (bookingFee !== undefined) updateData.bookingFee = String(bookingFee);
            if (profileImage !== undefined) updateData.profileImage = profileImage;
            if (description !== undefined) updateData.description = description;
            if (email !== undefined) updateData.email = email;
            if (phone !== undefined) updateData.phone = phone;
            if (isActive !== undefined) updateData.isActive = Boolean(isActive);
            if (schedules !== undefined) {
                try {
                    const parsed = typeof schedules === "string" ? JSON.parse(schedules) : schedules;
                    updateData.schedules = Array.isArray(parsed) ? parsed : [];
                } catch (e) {
                    updateData.schedules = [];
                }
            }

            const updatedDoctor = await prisma.doctor.update({
                where: { id: id as string },
                data: updateData,
                include: {
                    specialization: true
                }
            });

            res.status(200).json({
                success: true,
                message: "Doctor profile updated successfully",
                data: updatedDoctor
            });

        } catch (error) {
            console.error("Error updating doctor:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }

    async deleteDoctor(req: AdminRequest, res: Response): Promise<void> {
        try {
            const { id } = req.params;

            const existingDoctor = await prisma.doctor.findUnique({
                where: { id: id as string }
            });
            if (!existingDoctor) {
                res.status(404).json({
                    success: false,
                    message: "Doctor profile not found"
                });
                return;
            }

            await prisma.doctor.delete({
                where: { id: id as string }
            });

            res.status(200).json({
                success: true,
                message: "Doctor profile deleted successfully"
            });
        } catch (error) {
            console.error("Error deleting doctor:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }

    // -------------------------------------------------------------
    // Specialization Management
    // -------------------------------------------------------------
    async listSpecializations(req: AdminRequest, res: Response): Promise<void> {
        try {
            const specs = await prisma.specialization.findMany({
                orderBy: { name: "asc" }
            });

            res.status(200).json({
                success: true,
                data: specs
            });
        } catch (error) {
            console.error("Error listing specializations:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }

    async createSpecialization(req: AdminRequest, res: Response): Promise<void> {
        try {
            const { name, description } = req.body;

            if (!name) {
                res.status(400).json({
                    success: false,
                    message: "Specialization name is required"
                });
                return;
            }

            const spec = await prisma.specialization.create({
                data: {
                    name,
                    description: description || null
                }
            });

            res.status(201).json({
                success: true,
                message: "Specialization created successfully",
                data: spec
            });
        } catch (error) {
            console.error("Error creating specialization:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }

    async updateSpecialization(req: AdminRequest, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const { name, description } = req.body;

            const existingSpec = await prisma.specialization.findUnique({
                where: { id: id as string }
            });
            if (!existingSpec) {
                res.status(404).json({
                    success: false,
                    message: "Specialization not found"
                });
                return;
            }

            const updateData: any = {};
            if (name !== undefined) updateData.name = name;
            if (description !== undefined) updateData.description = description;

            const updatedSpec = await prisma.specialization.update({
                where: { id: id as string },
                data: updateData
            });

            res.status(200).json({
                success: true,
                message: "Specialization updated successfully",
                data: updatedSpec
            });
        } catch (error) {
            console.error("Error updating specialization:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }

    async deleteSpecialization(req: AdminRequest, res: Response): Promise<void> {
        try {
            const { id } = req.params;

            const existingSpec = await prisma.specialization.findUnique({
                where: { id: id as string }
            });
            if (!existingSpec) {
                res.status(404).json({
                    success: false,
                    message: "Specialization not found"
                });
                return;
            }

            await prisma.specialization.delete({
                where: { id: id as string }
            });

            res.status(200).json({
                success: true,
                message: "Specialization deleted successfully"
            });
        } catch (error) {
            console.error("Error deleting specialization:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }

    // -------------------------------------------------------------
    // Lead Management
    // -------------------------------------------------------------
    async listLeads(req: AdminRequest, res: Response): Promise<void> {
        try {
            const leads = await prisma.lead.findMany({
                include: {
                    doctor: {
                        include: {
                            specialization: true
                        }
                    }
                },
                orderBy: { createdAt: "desc" }
            });

            res.status(200).json({
                success: true,
                data: leads
            });
        } catch (error) {
            console.error("Error listing leads:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }

    async updateLead(req: AdminRequest, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const { status, notes } = req.body;

            const existingLead = await prisma.lead.findUnique({
                where: { id: id as string }
            });
            if (!existingLead) {
                res.status(404).json({
                    success: false,
                    message: "Lead not found"
                });
                return;
            }

            const updateData: any = {};
            if (status !== undefined) updateData.status = status;
            if (notes !== undefined) updateData.notes = notes;

            const updatedLead = await prisma.lead.update({
                where: { id: id as string },
                data: updateData,
                include: {
                    doctor: true
                }
            });

            res.status(200).json({
                success: true,
                message: "Lead updated successfully",
                data: updatedLead
            });
        } catch (error) {
            console.error("Error updating lead:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }

    async deleteLead(req: AdminRequest, res: Response): Promise<void> {
        try {
            const { id } = req.params;

            const existingLead = await prisma.lead.findUnique({
                where: { id: id as string }
            });
            if (!existingLead) {
                res.status(404).json({
                    success: false,
                    message: "Lead not found"
                });
                return;
            }

            await prisma.lead.delete({
                where: { id: id as string }
            });

            res.status(200).json({
                success: true,
                message: "Lead deleted successfully"
            });
        } catch (error) {
            console.error("Error deleting lead:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }

    // -------------------------------------------------------------
    // Booking Operations
    // -------------------------------------------------------------
    async listBookings(req: AdminRequest, res: Response): Promise<void> {
        try {
            const bookings = await prisma.booking.findMany({
                include: {
                    user: true,
                    doctor: {
                        include: {
                            specialization: true
                        }
                    },
                    payments: true
                },
                orderBy: { appointmentDate: "desc" }
            });

            res.status(200).json({
                success: true,
                data: bookings
            });
        } catch (error) {
            console.error("Error listing bookings:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }

    async confirmBooking(req: AdminRequest, res: Response): Promise<void> {
        try {
            const { id } = req.params;

            const booking = await prisma.booking.findUnique({
                where: { id: id as string },
                include: { user: true, doctor: true }
            }) as any;

            if (!booking) {
                res.status(404).json({
                    success: false,
                    message: "Booking not found"
                });
                return;
            }

            const updatedBooking = await prisma.booking.update({
                where: { id: id as string },
                data: { status: "CONFIRMED" },
                include: { user: true, doctor: true }
            });

            // Send notification to user
            const formattedDate = new Date(booking.appointmentDate).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            });
            const smsText = `Dear Patient, your appointment booking (Ref: ${booking.bookingReference}) with Dr. ${booking.doctor.name} on ${formattedDate} is confirmed.`;
            await twilioService.sendSMS(booking.user.phone, smsText);

            res.status(200).json({
                success: true,
                message: "Booking confirmed and notification sent",
                data: updatedBooking
            });

        } catch (error) {
            console.error("Error confirming booking:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }

    async rescheduleBooking(req: AdminRequest, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const { newDate, notes } = req.body;

            if (!newDate) {
                res.status(400).json({
                    success: false,
                    message: "New appointment date is required"
                });
                return;
            }

            const dateObj = new Date(newDate);
            if (isNaN(dateObj.getTime())) {
                res.status(400).json({
                    success: false,
                    message: "Invalid date format"
                });
                return;
            }

            const booking = await prisma.booking.findUnique({
                where: { id: id as string },
                include: { user: true, doctor: true }
            }) as any;

            if (!booking) {
                res.status(404).json({
                    success: false,
                    message: "Booking not found"
                });
                return;
            }

            const updateData: any = {
                appointmentDate: dateObj,
                status: "RESCHEDULED"
            };
            if (notes !== undefined) updateData.notes = notes;

            const updatedBooking = await prisma.booking.update({
                where: { id: id as string },
                data: updateData,
                include: { user: true, doctor: true }
            });

            // Send notification to user
            const formattedDate = dateObj.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            });
            const smsText = `Dear Patient, your appointment booking (Ref: ${booking.bookingReference}) with Dr. ${booking.doctor.name} has been rescheduled to ${formattedDate}.`;
            await twilioService.sendSMS(booking.user.phone, smsText);

            res.status(200).json({
                success: true,
                message: "Booking rescheduled and notification sent",
                data: updatedBooking
            });

        } catch (error) {
            console.error("Error rescheduling booking:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }

    async cancelBooking(req: AdminRequest, res: Response): Promise<void> {
        try {
            const { id } = req.params;

            const booking = await prisma.booking.findUnique({
                where: { id: id as string },
                include: { user: true, doctor: true }
            }) as any;

            if (!booking) {
                res.status(404).json({
                    success: false,
                    message: "Booking not found"
                });
                return;
            }

            const updatedBooking = await prisma.booking.update({
                where: { id: id as string },
                data: { status: "REJECTED" },
                include: { user: true, doctor: true }
            });

            // Send notification to user
            const smsText = `Dear Patient, we regret to inform you that your appointment booking (Ref: ${booking.bookingReference}) has been rejected/cancelled.`;
            await twilioService.sendSMS(booking.user.phone, smsText);

            res.status(200).json({
                success: true,
                message: "Booking cancelled and notification sent",
                data: updatedBooking
            });

        } catch (error) {
            console.error("Error cancelling booking:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }

    async deleteBooking(req: AdminRequest, res: Response): Promise<void> {
        try {
            const { id } = req.params;

            const existingBooking = await prisma.booking.findUnique({
                where: { id: id as string }
            });
            if (!existingBooking) {
                res.status(404).json({
                    success: false,
                    message: "Booking not found"
                });
                return;
            }

            // We must delete the associated payment first to prevent foreign key constraint violations
            await prisma.payment.deleteMany({
                where: { bookingId: id as string }
            });

            await prisma.booking.delete({
                where: { id: id as string }
            });

            res.status(200).json({
                success: true,
                message: "Booking deleted successfully"
            });
        } catch (error) {
            console.error("Error deleting booking:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }

    // -------------------------------------------------------------
    // Blog CMS Management
    // -------------------------------------------------------------
    async listBlogs(req: AdminRequest, res: Response): Promise<void> {
        try {
            const blogs = await prisma.blog.findMany({
                orderBy: { createdAt: "desc" }
            });

            const mappedBlogs = blogs.map((b: any) => ({
                ...b,
                status: b.isPublished ? "PUBLISHED" : "DRAFT"
            }));

            res.status(200).json({
                success: true,
                data: mappedBlogs
            });
        } catch (error) {
            console.error("Error listing blogs:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }

    async createBlog(req: AdminRequest, res: Response): Promise<void> {
        try {
            const { title, slug, content, featuredImage, isPublished, status } = req.body;

            if (!title || !content) {
                res.status(400).json({
                    success: false,
                    message: "Title and content are required"
                });
                return;
            }

            // Slugify helper
            const rawSlug = slug || title;
            let finalSlug = rawSlug
                .toString()
                .toLowerCase()
                .trim()
                .replace(/\s+/g, '-')
                .replace(/[^\w\-]+/g, '')
                .replace(/\-\-+/g, '-')
                .replace(/^-+/, '')
                .replace(/-+$/, '');

            if (!finalSlug) {
                finalSlug = `post-${Date.now()}`;
            }

            // Verify unique slug
            const existing = await prisma.blog.findUnique({
                where: { slug: finalSlug }
            });
            if (existing) {
                res.status(400).json({
                    success: false,
                    message: "A blog post with this slug or title already exists"
                });
                return;
            }

            const resolvedIsPublished = status !== undefined 
                ? status === "PUBLISHED" 
                : (isPublished !== undefined ? Boolean(isPublished) : false);

            const blog = await prisma.blog.create({
                data: {
                    title,
                    slug: finalSlug,
                    content,
                    featuredImage: featuredImage || null,
                    isPublished: resolvedIsPublished
                }
            });

            res.status(201).json({
                success: true,
                message: "Blog post created successfully",
                data: {
                    ...blog,
                    status: blog.isPublished ? "PUBLISHED" : "DRAFT"
                }
            });
        } catch (error) {
            console.error("Error creating blog:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }

    async updateBlog(req: AdminRequest, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const { title, slug, content, featuredImage, isPublished, status } = req.body;

            const existingBlog = await prisma.blog.findUnique({
                where: { id: id as string }
            });
            if (!existingBlog) {
                res.status(404).json({
                    success: false,
                    message: "Blog post not found"
                });
                return;
            }

            const updateData: any = {};
            if (title !== undefined) updateData.title = title;
            if (content !== undefined) updateData.content = content;
            if (featuredImage !== undefined) updateData.featuredImage = featuredImage;
            
            if (status !== undefined) {
                updateData.isPublished = status === "PUBLISHED";
            } else if (isPublished !== undefined) {
                updateData.isPublished = Boolean(isPublished);
            }

            if (slug !== undefined) {
                let finalSlug = slug
                    .toString()
                    .toLowerCase()
                    .trim()
                    .replace(/\s+/g, '-')
                    .replace(/[^\w\-]+/g, '')
                    .replace(/\-\-+/g, '-')
                    .replace(/^-+/, '')
                    .replace(/-+$/, '');
                
                if (!finalSlug) {
                    finalSlug = `post-${Date.now()}`;
                }

                // Check unique if slug is changing
                if (finalSlug !== existingBlog.slug) {
                    const duplicate = await prisma.blog.findUnique({
                        where: { slug: finalSlug }
                    });
                    if (duplicate) {
                        res.status(400).json({
                            success: false,
                            message: "A blog post with this slug already exists"
                        });
                        return;
                    }
                }
                updateData.slug = finalSlug;
            }

            const updatedBlog = await prisma.blog.update({
                where: { id: id as string },
                data: updateData
            });

            res.status(200).json({
                success: true,
                message: "Blog post updated successfully",
                data: updatedBlog
            });
        } catch (error) {
            console.error("Error updating blog:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }

    async deleteBlog(req: AdminRequest, res: Response): Promise<void> {
        try {
            const { id } = req.params;

            const existingBlog = await prisma.blog.findUnique({
                where: { id: id as string }
            });
            if (!existingBlog) {
                res.status(404).json({
                    success: false,
                    message: "Blog post not found"
                });
                return;
            }

            await prisma.blog.delete({
                where: { id: id as string }
            });

            res.status(200).json({
                success: true,
                message: "Blog post deleted successfully"
            });
        } catch (error) {
            console.error("Error deleting blog:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }
}

export default new AdminController();
