import { RequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import CarRentalModel from "../models/carRentals"; // Import the CarRentalModel
import UserModel from "../models/user";

export const getRental: RequestHandler = async (req, res, next) => {
  const rentalId = req.params.rentalId;

  try {
    if (!mongoose.isValidObjectId(rentalId)) {
      throw createHttpError(400, "Invalid rental id");
    }

    const rental = await CarRentalModel.findById(rentalId).exec();

    if (!rental) {
      throw createHttpError(404, "Rental not found");
    }

    if (!rental.userId) {
      throw createHttpError(401, "You cannot access this rental");
    }

    res.status(200).json(rental);
  } catch (error) {
    next(error);
  }
};

interface CreateRentalBody {
  userId: string;
  triptype?: string;
  airportname?: string;
  childseat?: number;
  flightno?: number;
  luggage?: number;
  passenger?: number;
  carModel?: string;
  pickuplocation?: string;
  pickuptime?: string;
  dropofflocation?: string;
  mobilenumber?: number;
  startDate?: Date;
  endDate?: Date;
  rentalprice?: number;
}

export const createRental: RequestHandler<
  unknown,
  unknown,
  CreateRentalBody,
  unknown
> = async (req, res) => {
  try {
    const {
      userId,
      airportname,
      childseat,
      flightno,
      luggage,
      passenger,
      carModel,
      pickuplocation,
      pickuptime,
      dropofflocation,
      mobilenumber,
      startDate,
      endDate,
      rentalprice,
    } = req.body;

    // Check if the user with the provided userId exists
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create a new car rental record
    const newCarRental = await CarRentalModel.create({
      userId,
      airportname,
      childseat,
      flightno,
      luggage,
      passenger,
      carModel,
      pickuplocation,
      pickuptime,
      dropofflocation,
      mobilenumber,
      startDate,
      endDate,
      rentalprice,
    });

    res
      .status(201)
      .json({ message: "Car rental record created", carRental: newCarRental });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateRental: RequestHandler = async (req, res, next) => {
  const rentalId = req.params.rentalId;
  const newpickuplocation = req.body.pickuplocation;
  const newpickuptime = req.body.pickuptime;
  const newdropofflocation = req.body.dropofflocation;
  const newmobilenumber = req.body.mobilenumber;
  const newCarModel = req.body.carModel;
  const newStartDate = req.body.startDate;
  const newEndDate = req.body.endDate;
  const newairportname = req.body.airportname;
  const newchildseat = req.body.childseat;
  const newflightno = req.body.flightno;
  const newluggage = req.body.luggage;
  const newpassenger = req.body.passenger;


  try {
    if (!newCarModel || !newStartDate || !newEndDate) {
      throw createHttpError(400, "All fields are required");
    }

    const rental = await CarRentalModel.findById(rentalId);

    if (!rental) {
      throw createHttpError(404, "Rental not found");
    }

    rental.carModel = newCarModel;
    rental.pickuptime = newpickuptime;
    rental.pickuplocation = newpickuplocation;
    rental.dropofflocation = newdropofflocation;
    rental.mobilenumber = newmobilenumber;
    rental.startDate = newStartDate;
    rental.endDate = newEndDate;
    rental.airportname = newairportname;
    rental.childseat = newchildseat;
    rental.flightno = newflightno;
    rental.luggage = newluggage;
    rental.passenger = newpassenger;

    const updatedRental = await rental.save();

    res.status(200).json(updatedRental);
  } catch (error) {
    next(error);
  }
};

export const deleteRental: RequestHandler = async (req, res, next) => {
  const rentalId = req.params.rentalId;

  try {
    if (!mongoose.isValidObjectId(rentalId)) {
      throw createHttpError(400, "Invalid rental id");
    }

    const rental = await CarRentalModel.findById(rentalId).exec();

    if (!rental) {
      throw createHttpError(404, "Rental not found");
    }

    if (!rental.userId) {
      throw createHttpError(401, "You cannot access this rental");
    }

    await CarRentalModel.deleteOne({ _id: rentalId });

    res.status(204).send({ message: "Rental deleted successfully" });
  } catch (error) {
    next(error);
  }
};
