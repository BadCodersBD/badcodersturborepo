/**
 * @name Hotel Room Booking System
 * @author Rakib (Khan)
 * @description Hotel Room Booking and Management System Software ~ Developed By Rakib (Khan)
 * @copyright ©2024 ― Rakib (Khan). All rights reserved.
 * @version v0.0.1
 *
 */

/*
 * Name: Hotel Room Booking System ~ Backend
 * Description: Build an Hotel Room Booking System using node.js, express.js application from the scratch
 * Author: Rakib (khan)
 * Last Modified: 18/01/2024
 * Version: v0.0.1
 *
 */

// imports modules & dependencies
const app = require('./src/app');
const logger = require('./src/middleware/winston.logger');

// app listens to .env defined port
app.listen(process.env.APP_PORT, () => {
  logger.info(`App server running on: ${process.env.APP_BASE_URL}`);
});
