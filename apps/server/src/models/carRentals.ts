// import mongoose, { Schema, Document } from 'mongoose';

// // Define the interface for CarRental document
// interface ICarRental extends Document {
//   userId: string;
//   carModel: string;
//   startDate: Date;
//   endDate: Date;
// }

// // Define the schema for CarRental
// const carRentalSchema = new Schema({
//   userId: { type: String, required: true },
//   carModel: { type: String, required: true },
//   startDate: { type: Date, required: true },
//   endDate: { type: Date, required: true }
// });

// // Create the CarRental model
// const CarRentalModel = mongoose.model<ICarRental>('CarRental', carRentalSchema);

// export default CarRentalModel;


import mongoose from "mongoose";

const carRentalSchema = new mongoose.Schema({
  userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User' // This is a reference to the User model
  },
  carModel: String,
  startDate: Date,
  endDate: Date
});

const CarRentalModel = mongoose.model('CarRental', carRentalSchema);

export default CarRentalModel;

