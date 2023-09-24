// User.ts

import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  // image: string; // Assuming 'image' is a URL to the user's image
}

const UserSchema: Schema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // image: { type: String }, // Assuming 'image' is a URL to the user's image
});

export default mongoose.model<IUser>('User', UserSchema);
