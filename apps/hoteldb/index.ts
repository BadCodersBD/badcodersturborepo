import express from "express";
import { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { errorHandler, notFound } from "./src/middlewares/errorMiddleware";
import mongoose from "mongoose";
import { ConnectionOptions } from "tls";

// Routes
import roomRoutes from "./src/routes/roomRoutes";
import userRoutes from "./src/routes/userRoutes";
import bookingRoutes from "./src/routes/bookingRoutes";
import uploadRoutes from "./src/routes/uploadRoutes";

const app: Application = express();

dotenv.config();

const port = process.env.PORT || 5000;

mongoose
  .connect(
    process.env.MONGO_URI as string,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectionOptions
  )
  .then(() => {
    console.log("Mongoose connected");
    app.listen(port, () => {
      console.log("Server running on port: " + port);
    });
  })
  .catch(console.error);

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Default
app.get("/api", (req: Request, res: Response) => {
  res.status(201).json({ message: "Welcome to Hotel Booking App" });
});

// Room Route
app.use("/api/rooms", roomRoutes);

// User Route
app.use("/api/users", userRoutes);

// Booking Route
app.use("/api/bookings", bookingRoutes);

// Upload Route
app.use("/api/uploads", uploadRoutes);

app.get("/api/config/paypal", (req, res) => {
  res.status(201).send(process.env.PAYPAL_CLIENT_ID);
});

app.use(errorHandler);
app.use(notFound);
