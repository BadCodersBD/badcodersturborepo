import "dotenv/config";
import express, { Application, NextFunction, Request, Response } from "express";
import roomRoutes from "./routes/roomRoutes";
import userRoutes from "./routes/userRoutes";
import bookingRoutes from "./routes/bookingRoutes";
import uploadRoutes from "./routes/uploadRoutes";
import path from "path";
import morgan from "morgan";
import createHttpError, { isHttpError } from "http-errors";
import session from "express-session";
import MongoStore from "connect-mongo";
import cors from 'cors';
// import { requiresAuth } from "./middleware/auth";
import { rateLimit } from 'express-rate-limit';

const app: Application = express();

// Set up rate limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  });
  
  app.use(limiter);

app.use(cors());

app.use(morgan("dev"));

app.use(express.json());

app.use(session({
    secret: "Shh, its a secret!",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 60 * 1000,
    },
    rolling: true,
    store: MongoStore.create({
        mongoUrl: "mongodb+srv://badcoder:DFHp6Zfz4BbQt1hr@badcodercluster.acw7rry.mongodb.net/?retryWrites=true&w=majority"
    }),
}));

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


app.use((req, res, next) => {
    res.send('Hello Mongo!');
    next(createHttpError(404, "Endpoint not found"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(error);
    let errorMessage = "An unknown error occurred";
    let statusCode = 500;
    if (isHttpError(error)) {
        statusCode = error.status;
        errorMessage = error.message;
    }
    res.status(statusCode).json({ error: errorMessage });
});

export default app;