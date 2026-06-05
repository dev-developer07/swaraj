import express from "express";
import AuthRouter from "./routes/auth.routes.js";

export const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
	res.json({ status: "ok" });
});

app.use("/api/auth", AuthRouter);

app.listen(3000, () => {
	console.log("Server running on http://localhost:3000");
});
