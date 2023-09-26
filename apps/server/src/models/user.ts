import mongoose, { Document, Model, Schema } from "mongoose";

export interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
}

const userSchema = new Schema<UserDocument>({
  username: String,
  email: String,
  password: String,
});

const UserModel: Model<UserDocument> = mongoose.model('User', userSchema);

export default UserModel;
