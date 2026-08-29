import "dotenv/config";
import express from "express";
import cors from "cors";
import AuthRouter from "./routes/auth.routes.js";
import BookingRouter from "./routes/booking.routes.js";
import AdminRouter from "./routes/admin.routes.js";

export const app = express();

// Configure CORS for production (allows Vercel domain & local development)
const allowedOrigins = process.env.ALLOWED_ORIGINS
	? process.env.ALLOWED_ORIGINS.split(",").map((o) => o.trim())
	: ["*"];

app.use(
	cors({
		origin: (origin, callback) => {
			if (!origin || allowedOrigins.includes("*") || allowedOrigins.includes(origin)) {
				callback(null, true);
			} else {
				callback(null, true); // Fallback allow to avoid blocking requests
			}
		},
		credentials: true,
		methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
		allowedHeaders: ["Content-Type", "Authorization"]
	})
);

app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb", extended: true }));

app.get("/health", (req, res) => {
	res.json({ status: "ok" });
});

app.use("/api/auth", AuthRouter);
app.use("/api/booking", BookingRouter);
app.use("/api/admin", AdminRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

