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
    userId: string,
    carModel?: string,
    pickuplocation?: string,
    dropofflocation?: string,
    mobilenumber?: string,
    startDate?: Date,
    endDate?: Date,
}

export const createRental: RequestHandler<unknown, unknown, CreateRentalBody, unknown> = async (req, res) => {
    try {
        const { userId, carModel, pickuplocation, dropofflocation, mobilenumber, startDate, endDate } = req.body;
    
        // Check if the user with the provided userId exists
        const user = await UserModel.findById(userId);
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
    
        // Create a new car rental record
        const newCarRental = await CarRentalModel.create({
          userId,
          carModel,
          pickuplocation,
          dropofflocation,
          mobilenumber,
          startDate,
          endDate,
        });
    
        res.status(201).json({ message: "Car rental record created", carRental: newCarRental });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      }
    };

    
export const updateRental: RequestHandler = async (req, res, next) => {
    const rentalId = req.params.rentalId;
    const newpickuplocation = req.body.pickuplocation;
    const newdropofflocation = req.body.dropofflocation;
    const newmobilenumber = req.body.mobilenumber;
    const newCarModel = req.body.carModel;
    const newStartDate = req.body.startDate;
    const newEndDate = req.body.endDate;

    try {
        if (!newCarModel || !newStartDate || !newEndDate) {
            throw createHttpError(400, "All fields are required");
        }

        const rental = await CarRentalModel.findById(rentalId);

        if (!rental) {
            throw createHttpError(404, "Rental not found");
        }

        rental.carModel = newCarModel;
        rental.pickuplocation = newpickuplocation;
        rental.dropofflocation = newdropofflocation;
        rental.mobilenumber = newmobilenumber;
        rental.startDate = newStartDate;
        rental.endDate = newEndDate;

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
