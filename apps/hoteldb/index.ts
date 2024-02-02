import dotenv from "dotenv";
import app from "./src/app";
// import env from "./util/validateEnv";
import mongoose from "mongoose";
// import express from 'express';
const port = process.env.PORT || 5000;
// const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_URI as string,)
    .then(() => {
        console.log("Mongoose connected");
        app.listen(port, () => {
            console.log("Server running on port: " + port);
        });
    })
    .catch(console.error);

