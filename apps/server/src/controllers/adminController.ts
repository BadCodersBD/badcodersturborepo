import { RequestHandler } from "express";
import CarRentalModel from "../models/carRentals";
import UserModel from "../models/user";
// import createHttpError from "http-errors";

export const getAllRentData: RequestHandler = async (req, res, next) => {
  try {
    // Fetch car rentals
    const carRentals = await CarRentalModel.find().exec(); // Assuming you have a CarRentalModel

    const rentalData = {
      carRentals,
    };

    res.status(200).json(rentalData);
  } catch (error) {
    next(error);
  }
};

export const getAllUserData: RequestHandler = async (req, res, next) => {
  try {
    // Fetch user information
    const users = await UserModel.find().exec(); // Assuming you have a UserModel

    const usersData = {
      users,
    };

    res.status(200).json(usersData);
  } catch (error) {
    next(error);
  }
};



// API endpoint to get all rental data with user information, sorted by creation date
export const getAllRentDataWithUsers: RequestHandler = async (req, res, next) => {
  try {
    // Aggregate pipeline to group rentals by userId and populate user information
    const rentalDataWithUsers = await CarRentalModel.aggregate([
      {
        $sort: { createdDate: -1 }, // Sort by creation date in descending order
      },
      
    ]).exec();

    res.status(200).json(rentalDataWithUsers);
  } catch (error) {
    next(error);
  }
};



export const PendingRentalData: RequestHandler = async (req, res, next) => {
  try {
    // Aggregate pipeline to group rentals by userId and populate user information
    const rentalDataWithUsers = await CarRentalModel.aggregate([
      {
        $match: { status: "pending" }, // Filter by status "pending"
      },
    ]).exec();

    res.status(200).json(rentalDataWithUsers);
  } catch (error) {
    next(error);
  }
};
