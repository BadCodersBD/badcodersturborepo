import mongoose, { Document, Model, Schema } from "mongoose";

export interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
  isAdmin: boolean; // Add this line
}

const userSchema = new Schema<UserDocument>({
  username: String,
  email: String,
  password: String,
  isAdmin: Boolean,
});

const UserModel: Model<UserDocument> = mongoose.model('User', userSchema);

export default UserModel;
