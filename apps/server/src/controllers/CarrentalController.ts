import { RequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import CarRentalModel from "../models/carRentals"; // Import the CarRentalModel
import { assertIsDefined } from "../util/assertIsDefined";

export const getRentals: RequestHandler = async (req, res, next) => {
    const authenticatedUserId = req.session.id;

    try {
        assertIsDefined(authenticatedUserId);

        const rentals = await CarRentalModel.find({ userId: authenticatedUserId }).exec();
        res.status(200).json(rentals);
    } catch (error) {
        next(error);
    }
};

export const getRental: RequestHandler = async (req, res, next) => {
    const rentalId = req.params.rentalId;
    const authenticatedUserId = req.session.id;

    try {
        assertIsDefined(authenticatedUserId);

        if (!mongoose.isValidObjectId(rentalId)) {
            throw createHttpError(400, "Invalid rental id");
        }

        const rental = await CarRentalModel.findById(rentalId).exec();

        if (!rental) {
            throw createHttpError(404, "Rental not found");
        }

        if (!rental.userId.equals(authenticatedUserId)) {
            throw createHttpError(401, "You cannot access this rental");
        }

        res.status(200).json(rental);
    } catch (error) {
        next(error);
    }
};

interface CreateRentalBody {
    carModel?: string,
    startDate?: Date,
    endDate?: Date,
}

export const createRental: RequestHandler<unknown, unknown, CreateRentalBody, unknown> = async (req, res, next) => {
    const carModel = req.body.carModel;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const authenticatedUserId = req.session.id;

    try {
        assertIsDefined(authenticatedUserId);

        if (!carModel || !startDate || !endDate) {
            throw createHttpError(400, "All fields are required");
        }

        const newRental = await CarRentalModel.create({
            userId: authenticatedUserId,
            carModel: carModel,
            startDate: startDate,
            endDate: endDate,
        });

        res.status(201).json(newRental);
    } catch (error) {
        next(error);
    }
};

interface UpdateRentalParams {
    rentalId: string,
}

interface UpdateRentalBody {
    carModel?: string,
    startDate?: Date,
    endDate?: Date,
}

export const updateRental: RequestHandler<UpdateRentalParams, unknown, UpdateRentalBody, unknown> = async (req, res, next) => {
    const rentalId = req.params.rentalId;
    const newCarModel = req.body.carModel;
    const newStartDate = req.body.startDate;
    const newEndDate = req.body.endDate;
    const authenticatedUserId = req.session.id;

    try {
        assertIsDefined(authenticatedUserId);

        if (!mongoose.isValidObjectId(rentalId)) {
            throw createHttpError(400, "Invalid rental id");
        }

        if (!newCarModel || !newStartDate || !newEndDate) {
            throw createHttpError(400, "All fields are required");
        }

        const rental = await CarRentalModel.findById(rentalId).exec();

        if (!rental) {
            throw createHttpError(404, "Rental not found");
        }

        if (!rental.userId.equals(authenticatedUserId)) {
            throw createHttpError(401, "You cannot access this rental");
        }

        rental.carModel = newCarModel;
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
    const authenticatedUserId = req.session.id;

    try {
        assertIsDefined(authenticatedUserId);

        if (!mongoose.isValidObjectId(rentalId)) {
            throw createHttpError(400, "Invalid rental id");
        }

        const rental = await CarRentalModel.findById(rentalId).exec();

        if (!rental) {
            throw createHttpError(404, "Rental not found");
        }

        if (!rental.userId.equals(authenticatedUserId)) {
            throw createHttpError(401, "You cannot access this rental");
        }

        await rental.replaceOne();

        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
};
