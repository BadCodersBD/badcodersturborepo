import dotenv from "dotenv";
import app from "./src/app";
import mongoose from "mongoose";
import { ConnectionOptions } from "tls";

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
const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectionOptions)
    .then(() => {
      console.log("Mongoose connected");

      const port = process.env.PORT || 5000;

      app.listen(port, () => {
        console.log("Server running on port: " + port);
      });
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
      process.exit(1); // Terminate the process on MongoDB connection failure
    });
};

// Call the connectDB function to initiate the connection
connectDB();

export default connectDB;

