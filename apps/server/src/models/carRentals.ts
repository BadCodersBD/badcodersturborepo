import mongoose, { Document, Model, Schema } from "mongoose";

export interface CarRentalDocument extends Document {
  userId: mongoose.Types.ObjectId;
  carModel: string;
  startDate: Date;
  endDate: Date;
  location: any;
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
  location: String
});

const CarRentalModel: Model<CarRentalDocument> = mongoose.model('CarRental', carRentalSchema);

export default CarRentalModel;
