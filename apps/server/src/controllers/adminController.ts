import { RequestHandler } from "express";
// import createHttpError from "http-errors";
// import mongoose from "mongoose";
import CarRentalModel from "../models/carRentals"; // Import the CarRentalModel
import UserModel from "../models/user";


// API endpoint to get all information about car rentals and users (only accessible by admin)
export const getAllData: RequestHandler = async (req, res, next) => {
    try {
      // Fetch car rentals
      const carRentals = await CarRentalModel.find().exec(); // Assuming you have a CarRentalModel
  
      // Fetch user information
      const users = await UserModel.find().exec(); // Assuming you have a UserModel
  
      const allData = {
        carRentals,
        users,
      };
  
      res.status(200).json(allData);
    } catch (error) {
      next(error);
    }
  };
  