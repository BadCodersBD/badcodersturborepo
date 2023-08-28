 import app from "./app";
// import env from "./util/validateEnv";
import mongoose from "mongoose";
// import express from 'express';

const port = 3000;
// const app = express();

mongoose.connect("mongodb+srv://badcoder:DFHp6Zfz4BbQt1hr@badcodercluster.acw7rry.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("Mongoose connected");
        app.listen(port, () => {
            console.log("Server running on port: " + port);
        });
    })
    .catch(console.error);
