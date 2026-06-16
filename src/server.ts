import express from "express";
import AuthRouter from "./routes/auth.routes.js";
import BookingRouter from "./routes/booking.routes.js";

export const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
	res.json({ status: "ok" });
});

app.use("/api/auth", AuthRouter);
app.use("/api/booking", BookingRouter);

app.listen(3000, () => {
	console.log("Server running on http://localhost:3000");
});
