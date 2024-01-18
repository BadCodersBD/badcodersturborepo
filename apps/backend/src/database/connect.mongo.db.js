/**
 * @name Hotel Room Booking System
 * @author Rakib (Khan)
 * @description Hotel Room Booking and Management System Software ~ Developed By Rakib (Khan)
 * @copyright ©2024 ― Rakib (Khan). All rights reserved.
 * @version v0.0.1
 *
 */

const mongoose = require('mongoose');
const logger = require('../middleware/winston.logger');

const connectionString = process.env.MONGO_URI;
mongoose.set('strictQuery', false);

const connectDatabase = async () => {
  try {
    await mongoose
      .connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        // useCreateIndex: true, // for mongoose 6.x
        // useFindAndModify: false, // for mongoose 6.x
      })
      .then(() => {
        logger.info('Connection establish to MongoDB database successful!');
      })
      .catch((error) => {
        logger.error('Error connecting to MongoDB: ', error);
      });
  } catch (error) {
    logger.error('Database connection error: ', error);
  }
};

module.exports = connectDatabase;
