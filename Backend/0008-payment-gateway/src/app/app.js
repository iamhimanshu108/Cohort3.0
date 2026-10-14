import express from "express";
import morgan from "morgan";
import connectDB from "../config/db.js";
import paymentRoutes from "../routes/payment.routes.js";

await connectDB();

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use("payments", paymentRoutes)

export default app;