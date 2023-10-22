import mongoose, { Document, Model, Schema } from "mongoose";

export interface CarRentalDocument extends Document {
  triptype: string;
  airportname: string;
  childseat: unknown;
  flightno: string;
  luggage: unknown;
  passenger: unknown;
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
  triptype: String,
  airportname: String,
  childseat: Number,
  flightno: String,
  luggage: Number,
  passenger: Number,
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
