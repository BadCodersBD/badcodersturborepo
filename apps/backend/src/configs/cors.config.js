/**
 * @name Hotel Room Booking System
 * @author Rakib (Khan)
 * @description Hotel Room Booking and Management System Software ~ Developed By Rakib (Khan)
 * @copyright ©2024 ― Rakib (Khan). All rights reserved.
 * @version v0.0.1
 *
 */

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001'
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS origin'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
};

module.exports = corsOptions;
