import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import carrents from "./routes/carrentals";
import adminroutes from "./routes/adminroutes";
import userRoutes from "./routes/users";
import morgan from "morgan";
import createHttpError, { isHttpError } from "http-errors";
import session from "express-session";
import MongoStore from "connect-mongo";
import cors from "cors";
import { rateLimit } from "express-rate-limit";
import path from "path";
import favicon from "serve-favicon";

const app = express();

// Set up rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

app.use(limiter);

app.use(cors());

app.use(morgan("dev"));

app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.use(express.json());

app.set("trust proxy", "loopback"); // Replace 'loopback' with the actual IP address

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

app.use("/api/users", userRoutes);
app.use("/api/carrents", carrents);
app.use("/api/admin", adminroutes);

// // Default
app.get("/", (req: Request, res: Response) => {
  res.status(201).json({ message: "Welcome to beachLimo Rental App" });
});

// // Api
app.get("/api", (req: Request, res: Response) => {
  res.status(201).json({ message: "beachLimo Rental Api start From here" });
});

// Handle 404 errors
app.use((req, res, next) => {
  res.send("Hello Mongo!");
  console.log("404 handler reached");
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
