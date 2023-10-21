import mongoose, { Document, Model, Schema } from "mongoose";

export interface CarRentalDocument extends Document {
  userId: mongoose.Types.ObjectId;
  carModel: string;
  startDate: Date;
  endDate: Date;
  mobilenumber: number;
  pickuplocation: unknown;
  pickuptime: unknown;
  dropofflocation: unknown;
  rentalprice: number;

}

const carRentalSchema = new Schema<CarRentalDocument>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  carModel: String,
  startDate: Date,
  endDate: Date,
  mobilenumber: Number,
  pickuplocation: String,
  pickuptime: String,
  dropofflocation: String,
  rentalprice: String
});

const CarRentalModel: Model<CarRentalDocument> = mongoose.model('CarRental', carRentalSchema);

export default CarRentalModel;
