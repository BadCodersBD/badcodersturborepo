import dotenv from "dotenv";
import app from "./src/app";
import mongoose from "mongoose";

dotenv.config();

// Validate required environment variables
const requiredEnvVariables = ["MONGO_URI", "PORT"];

for (const envVar of requiredEnvVariables) {
    if (!process.env[envVar]) {
        console.error(`Error: Environment variable ${envVar} is not defined.`);
        process.exit(1);
    }
}

// Connect to MongoDB and start the server
async function startServer() {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("Mongoose connected");
        app.listen(process.env.PORT || 5000, () => {
            console.log("Server running on port: " + (process.env.PORT || 5000));
        });
    } catch (error) {
        console.error("Mongoose connection error:", error);
    }
}

startServer();
