import express from "express";
import cors from "cors";
import AuthRouter from "./routes/auth.routes.js";
import BookingRouter from "./routes/booking.routes.js";
import AdminRouter from "./routes/admin.routes.js";

export const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
	res.json({ status: "ok" });
});

app.use("/api/auth", AuthRouter);
app.use("/api/booking", BookingRouter);
app.use("/api/admin", AdminRouter);

app.listen(3000, () => {
	console.log("Server running on http://localhost:3000");
});
