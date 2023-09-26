import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import carrents from "./routes/carrentals";
import userRoutes from "./routes/users";
import morgan from "morgan";
import createHttpError, { isHttpError } from "http-errors";
import session from "express-session";
import MongoStore from "connect-mongo";
// import { requiresAuth } from "./middleware/auth";

const app = express();

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

app.use("/api/users", userRoutes);
app.use("/api/carrents", carrents);


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