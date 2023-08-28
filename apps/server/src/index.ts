// import { express } from 'express';
// import express from 'express'

// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })



// const { MongoClient } = require("mongodb");

// const uri = "mongodb+srv://rakibkhan:gD6C8WAD97F6TCzf@cluster0.fk3rrzy.mongodb.net/sample-data?retryWrites=true&w=majority";

// const client = new MongoClient(uri);

// async function run() {
//   try {
//     await client.connect();
//     const database = client.db('sample-data');
//     const collection = database.collection('properties');

//     // Use `await` to get the result of `findOne()`
//     const properties = await collection.findOne({});
//     console.log(properties);

//   } catch (error) {
//     console.error("Error occurred:", error);
//   } finally {
//     await client.close();
//   }
// }

// run();



// const { MongoClient } = require('mongodb');

// const uri = "mongodb+srv://rakibkhan:gD6C8WAD97F6TCzf@cluster0.fk3rrzy.mongodb.net/sample-data?retryWrites=true&w=majority";

// // Create a new MongoClient
// const client = new MongoClient(uri);

// async function run() {
//   try {
//     // Connect the client to the server
//     await client.connect();

//     // Send a ping to confirm a successful connection
//     await client.db("sample-data").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

// run().catch(console.dir);


// app.js

// import express from 'express';
// import { MongoClient } from 'mongodb';

// const app = express();
// const port = 3000;

// // MongoDB Atlas connection string
// const uri = "mongodb+srv://rakibkhan:gD6C8WAD97F6TCzf@cluster0.fk3rrzy.mongodb.net/sample-data?retryWrites=true&w=majority";

// // Create a new MongoClient
// const client = new MongoClient(uri);

// // Connect to MongoDB Atlas
// async function connectToDB() {
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB Atlas');
//   } catch (err) {
//     console.error('Error connecting to MongoDB Atlas:', err);
//   }
// }

// // Middleware to set the client instance on the request object
// app.use((req, res, next) => {
//   req.db = client.db('sample-data');
//   next();
// });

// // Define a route to fetch data from MongoDB
// app.get('/data', async (req, res) => {
//   try {
//     const collection = req.db.collection('properties');
//     const data = await collection.find({}).toArray();
//     res.json(data);
//   } catch (err) {
//     console.error('Error fetching data:', err);
//     res.status(500).json({ error: 'Something went wrong' });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
//   connectToDB();
// });


// import app from "./app";
// import env from "./util/validateEnv";
// import mongoose from "mongoose";
// import express from 'express';

// const port = 3000;
// const app = express();

// mongoose.connect("mongodb+srv://badcoder:DFHp6Zfz4BbQt1hr@badcodercluster.acw7rry.mongodb.net/?retryWrites=true&w=majority")
//     .then(() => {
//         console.log("Mongoose connected");
//         app.listen(port, () => {
//             console.log("Server running on port: " + port);
//         });
//     })
//     .catch(console.error);

import app from "./app";
import env from "./util/validateEnv";
import mongoose from "mongoose";

const port = env.PORT;

mongoose.connect(env.MONGO_CONNECTION_STRING)
    .then(() => {
        console.log("Mongoose connected");
        app.listen(port, () => {
            console.log("Server running on port: " + port);
        });
    })
    .catch(console.error);