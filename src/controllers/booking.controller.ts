import type { Request, Response } from "express";
import type { AuthRequest } from "../middleware/auth.middleware.js";
import { prisma } from "../lib/db.js";
import Razorpay from "razorpay";
import crypto from "crypto";

let razorpayInstance: Razorpay | null = null;
function getRazorpayInstance(): Razorpay | null {
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
        return null;
    }

    if (!razorpayInstance) {
        razorpayInstance = new Razorpay({
            key_id: keyId,
            key_secret: keySecret,
        });
    }
    return razorpayInstance;
}

export class bookingController {
    async getDoctors(req: AuthRequest, res: Response): Promise<void> {
        try {
            const doctors = await prisma.doctor.findMany({
                include: {
                    specialization: true
                }
            });

            if (!doctors || doctors.length === 0) {
                res.status(404).json({
                    success: false,
                    message: "No doctors found"
                });
                return;
            }

            res.status(200).json({
                success: true,
                message: "Doctors list",
                data: doctors
            });
        } catch (error) {
            console.error("Error in getDoctors:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    }

    async requestBooking(req: AuthRequest, res: Response): Promise<void> {
        try {
            const { doctorId, appointmentDate, notes } = req.body;
            const userId = req.userId;

            if (!userId) {
                res.status(401).json({
                    success: false,
                    message: "Unauthorized"
                });
                return;
            }

            if (!doctorId || !appointmentDate) {
                res.status(400).json({
                    success: false,
                    message: "Doctor ID and appointment date are required"
                });
                return;
            }

            const dateObj = new Date(appointmentDate);
            if (isNaN(dateObj.getTime())) {
                res.status(400).json({
                    success: false,
                    message: "Invalid appointment date format"
                });
                return;
            }

            if (dateObj.getTime() < Date.now()) {
                res.status(400).json({
                    success: false,
                    message: "Appointment date must be in the future"
                });
                return;
            }

            const doctor = await prisma.doctor.findUnique({
                where: { id: doctorId }
            });

            if (!doctor) {
                res.status(404).json({
                    success: false,
                    message: "Doctor not found"
                });
                return;
            }

            if (!doctor.isActive) {
                res.status(400).json({
                    success: false,
                    message: "Doctor is currently not accepting bookings"
                });
                return;
            }

            // Verify if appointment date matches doctor's scheduled days
            let doctorSchedules: any[] = [];
            if (doctor.schedules) {
                try {
                    let current = doctor.schedules;
                    while (typeof current === "string") {
                        const temp = JSON.parse(current);
                        if (temp === current) break;
                        current = temp;
                    }
                    doctorSchedules = Array.isArray(current) ? current : [];
                } catch (e) {
                    doctorSchedules = [];
                }
            }

            if (doctorSchedules.length > 0) {
                const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                const appointmentWeekday = weekdays[dateObj.getDay()] || "Monday";
                const isAvailable = doctorSchedules.some(
                    (s) => s.day.toLowerCase() === appointmentWeekday.toLowerCase()
                );
                if (!isAvailable) {
                    res.status(400).json({
                        success: false,
                        message: `Doctor ${doctor.name} is not scheduled to work on ${appointmentWeekday}s. Available days: ${doctorSchedules.map(s => s.day).join(", ")}`
                    });
                    return;
                }
            }

            const bookingReference = `OPD-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;

            let razorpayOrderId = "";
            let razorpayOrderPayload: any = null;

            const rp = getRazorpayInstance();
            if (rp) {
                try {
                    const amountInPaise = Math.round(Number(doctor.bookingFee) * 100);
                    const order = await rp.orders.create({
                        amount: amountInPaise,
                        currency: "INR",
                        receipt: bookingReference,
                    });
                    razorpayOrderId = order.id;
                    razorpayOrderPayload = order;
                } catch (razorpayError: any) {
                    console.warn("[Razorpay] Order creation failed, falling back to MOCK mode:", razorpayError?.error?.description || razorpayError?.message || razorpayError);
                    razorpayOrderId = `order_mock_${Date.now()}`;
                    razorpayOrderPayload = {
                        id: razorpayOrderId,
                        entity: "order",
                        amount: Math.round(Number(doctor.bookingFee) * 100),
                        currency: "INR",
                        receipt: bookingReference,
                        status: "created",
                        created_at: Math.floor(Date.now() / 1000),
                    };
                }
            } else {
                console.warn("Razorpay credentials missing. Running in MOCK payment mode.");
                razorpayOrderId = `order_mock_${Date.now()}`;
                razorpayOrderPayload = {
                    id: razorpayOrderId,
                    entity: "order",
                    amount: Math.round(Number(doctor.bookingFee) * 100),
                    currency: "INR",
                    receipt: bookingReference,
                    status: "created",
                    created_at: Math.floor(Date.now() / 1000),
                };
            }

            const result = await prisma.$transaction(async (tx) => {
                const booking = await tx.booking.create({
                    data: {
                        bookingReference,
                        userId: userId,
                        doctorId: doctor.id,
                        appointmentDate: dateObj,
                        status: "PENDING",
                        notes: notes || null,
                    },
                });

                const payment = await tx.payment.create({
                    data: {
                        bookingId: booking.id,
                        amount: doctor.bookingFee,
                        paymentStatus: "PENDING",
                        transactionId: razorpayOrderId,
                    },
                });

                return { booking, payment };
            });

            res.status(201).json({
                success: true,
                message: rp 
                    ? "Booking request created successfully. Please complete the payment."
                    : "Booking request created in MOCK mode. You can verify this mock order without real credentials.",
                data: {
                    booking: result.booking,
                    payment: result.payment,
                    razorpayOrder: razorpayOrderPayload,
                    razorpayKeyId: rp ? (process.env.RAZORPAY_KEY_ID || null) : null
                }
            });

        } catch (error) {
            console.error("Error in requestBooking:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }

    async verifyPayment(req: AuthRequest, res: Response): Promise<void> {
        try {
            const { razorpay_order_id, razorpay_payment_id, razorpay_signature, status } = req.body;
            const userId = req.userId;

            if (!userId) {
                res.status(401).json({
                    success: false,
                    message: "Unauthorized"
                });
                return;
            }

            if (!razorpay_order_id) {
                res.status(400).json({
                    success: false,
                    message: "Razorpay Order ID is required"
                });
                return;
            }

            // Find the pending payment by the Razorpay Order ID stored in transactionId
            const pendingPayment = await prisma.payment.findUnique({
                where: { transactionId: razorpay_order_id },
                include: {
                    booking: true
                }
            });

            if (!pendingPayment) {
                res.status(404).json({
                    success: false,
                    message: "Payment record not found for the provided Order ID"
                });
                return;
            }

            if (pendingPayment.booking.userId !== userId) {
                res.status(403).json({
                    success: false,
                    message: "Forbidden: You do not own this booking"
                });
                return;
            }

            if (pendingPayment.paymentStatus !== "PENDING") {
                res.status(400).json({
                    success: false,
                    message: `Payment is already processed. Current status: ${pendingPayment.paymentStatus}`
                });
                return;
            }

            // Check if payment was reported as failed
            if (status === "FAILED") {
                const result = await prisma.$transaction(async (tx) => {
                    const updatedPayment = await tx.payment.update({
                        where: { id: pendingPayment.id },
                        data: {
                            paymentStatus: "FAILED",
                            paidAt: null,
                        }
                    });

                    const updatedBooking = await tx.booking.update({
                        where: { id: pendingPayment.bookingId },
                        data: {
                            status: "REJECTED"
                        }
                    });

                    return { booking: updatedBooking, payment: updatedPayment };
                });

                res.status(200).json({
                    success: true,
                    message: "Payment failed and booking rejected",
                    data: result
                });
                return;
            }

            // Otherwise, we perform cryptographic signature verification
            const isMockOrder = razorpay_order_id.startsWith("order_mock_");
            const rp = getRazorpayInstance();

            if (!isMockOrder && rp) {
                if (!razorpay_payment_id || !razorpay_signature) {
                    res.status(400).json({
                        success: false,
                        message: "Payment ID and signature are required for verification"
                    });
                    return;
                }

                const keySecret = process.env.RAZORPAY_KEY_SECRET || "";
                const hmac = crypto.createHmac("sha256", keySecret);
                hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
                const generatedSignature = hmac.digest("hex");

                if (generatedSignature !== razorpay_signature) {
                    res.status(400).json({
                        success: false,
                        message: "Payment verification failed: invalid signature"
                    });
                    return;
                }
            } else {
                console.warn("Bypassing signature verification (Mock Mode active for order:", razorpay_order_id, ")");
            }

            const verifiedPaymentId = razorpay_payment_id || `pay_mock_${Date.now()}`;

            const result = await prisma.$transaction(async (tx) => {
                const updatedPayment = await tx.payment.update({
                    where: { id: pendingPayment.id },
                    data: {
                        paymentStatus: "COMPLETED",
                        transactionId: verifiedPaymentId, // Overwrite Razorpay order_id with payment_id
                        paidAt: new Date(),
                    }
                });

                const updatedBooking = await tx.booking.update({
                    where: { id: pendingPayment.bookingId },
                    data: {
                        status: "CONFIRMED"
                    }
                });

                return { booking: updatedBooking, payment: updatedPayment };
            });

            res.status(200).json({
                success: true,
                message: "Payment verified successfully and booking confirmed",
                data: result
            });

        } catch (error) {
            console.error("Error in verifyPayment:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }

    async requestLead(req: Request, res: Response): Promise<void> {
        try {
            const { name, phone, preferredDate, doctorId, notes } = req.body;

            if (!name || !phone || !preferredDate || !doctorId) {
                res.status(400).json({
                    success: false,
                    message: "Name, phone, preferred date, and doctor ID are required"
                });
                return;
            }

            const dateObj = new Date(preferredDate);
            if (isNaN(dateObj.getTime())) {
                res.status(400).json({
                    success: false,
                    message: "Invalid preferred date format"
                });
                return;
            }

            const doctor = await prisma.doctor.findUnique({
                where: { id: doctorId }
            });

            if (!doctor) {
                res.status(404).json({
                    success: false,
                    message: "Doctor not found"
                });
                return;
            }

            if (!doctor.isActive) {
                res.status(400).json({
                    success: false,
                    message: "Doctor is currently not accepting bookings"
                });
                return;
            }

            // Verify if preferred date matches doctor's scheduled days
            let doctorSchedules: any[] = [];
            if (doctor.schedules) {
                try {
                    let current = doctor.schedules;
                    while (typeof current === "string") {
                        const temp = JSON.parse(current);
                        if (temp === current) break;
                        current = temp;
                    }
                    doctorSchedules = Array.isArray(current) ? current : [];
                } catch (e) {
                    doctorSchedules = [];
                }
            }

            if (doctorSchedules.length > 0) {
                const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                const appointmentWeekday = weekdays[dateObj.getDay()] || "Monday";
                const isAvailable = doctorSchedules.some(
                    (s) => s.day.toLowerCase() === appointmentWeekday.toLowerCase()
                );
                if (!isAvailable) {
                    res.status(400).json({
                        success: false,
                        message: `Doctor ${doctor.name} is not scheduled to work on ${appointmentWeekday}s. Available days: ${doctorSchedules.map(s => s.day).join(", ")}`
                    });
                    return;
                }
            }

            const lead = await prisma.lead.create({
                data: {
                    name,
                    phone,
                    preferredDate: dateObj,
                    doctorId: doctor.id,
                    notes: notes || null,
                    status: "NEW"
                }
            });

            res.status(201).json({
                success: true,
                message: "Appointment request submitted successfully. We will contact you soon.",
                data: lead
            });

        } catch (error) {
            console.error("Error in requestLead:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }

    async listPublishedBlogs(req: Request, res: Response): Promise<void> {
        try {
            const blogs = await prisma.blog.findMany({
                where: { isPublished: true },
                orderBy: { createdAt: "desc" }
            });

            res.status(200).json({
                success: true,
                data: blogs
            });
        } catch (error) {
            console.error("Error listing published blogs:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }

    async getBlogBySlug(req: Request, res: Response): Promise<void> {
        try {
            const { slug } = req.params;

            const blog = await prisma.blog.findUnique({
                where: { slug: slug as string }
            });

            if (!blog || !blog.isPublished) {
                res.status(404).json({
                    success: false,
                    message: "Blog post not found"
                });
                return;
            }

            res.status(200).json({
                success: true,
                data: blog
            });
        } catch (error) {
            console.error("Error fetching blog by slug:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }
}

export default new bookingController();