import "dotenv/config";
import express, { Request, Response } from "express";
import roomRoutes from "./routes/roomRoutes";
import userRoutes from "./routes/userRoutes";
import bookingRoutes from "./routes/bookingRoutes";
import uploadRoutes from "./routes/uploadRoutes";
import path from "path";
import morgan from "morgan";
import createHttpError, { isHttpError } from "http-errors";
import session from "express-session";
import MongoStore from "connect-mongo";
import cors from "cors";
import { rateLimit } from "express-rate-limit";
import favicon from "serve-favicon";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();

// Serve favicon.ico
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// Set up rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

app.use(limiter);

app.use(cors());

app.use(morgan("dev"));

app.use(express.json());

app.use(
  session({
    secret: "Shh, its a secret!",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 1000,
    },
    rolling: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI as string,
    }),
  })
);

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// // Default
app.get("/api", (req: Request, res: Response) => {
  res.status(201).json({ message: "Welcome to Hotel Booking App Api" });
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

// // Default
app.get("/", (req: Request, res: Response) => {
  res.status(201).json({ message: "Welcome to Hotel Booking App" });
});

// Serve Swagger UI
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Hotel Booking API",
      version: "1.0.0",
      description: "API documentation for Hotel Booking App",
    },
    basePath: "/api",
  },
  apis: ["./routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Handle 404 errors
app.use((req, res, next) => {
  console.log("404 handler reached");
  next(createHttpError(404, "Endpoint not found"));
});

// Error handler
app.use((error: unknown, req: Request, res: Response) => {
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
