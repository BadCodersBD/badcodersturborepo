 import app from "./src/app";
import mongoose from "mongoose";
import { ConnectionOptions } from "tls";

// Validate required environment variables
const requiredEnvVariables = ["MONGO_URI", "PORT"];

for (const envVar of requiredEnvVariables) {
  if (!process.env[envVar]) {
    console.error(`Error: Environment variable ${envVar} is not defined.`);
    process.exit(1);
  }
}


// Connect to MongoDB and start the server
mongoose
  .connect(process.env.MONGO_URI as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectionOptions)
  .then(() => {
    console.log("Mongoose connected");
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server running on port: " + (process.env.PORT || 5000));
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Terminate the process on MongoDB connection failure
  });

module.exports = app;

//deploy
