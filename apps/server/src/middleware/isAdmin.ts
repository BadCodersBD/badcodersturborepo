import { Request as ExpressRequest, Response, NextFunction } from 'express';
import createHttpError from "http-errors";
import UserModel, { UserDocument } from "../models/user";

// Define a custom type for the decoded user object
interface DecodedUser {
  userId: string; // Adjust based on your actual user object structure
}

// Define a custom type for the request object with 'user' property
interface RequestWithUser extends ExpressRequest {
  user?: DecodedUser;
}


export const isAdmin = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  try {
    // Assuming you have a middleware to decode and verify the JWT token
    const decodedToken = req.user as { userId: string }; // Adjust the type accordingly

    // Check if the user is an admin
    const user: UserDocument | null = await UserModel.findById(decodedToken.userId);

    if (!user) {
      throw createHttpError(404, "User not found");
    }

    if (!user.isAdmin) {
      throw createHttpError(403, "Only admin users can access this resource");
    }

    // If the user is an admin, proceed to the next middleware
    next();
  } catch (error) {
    next(error);
  }
};
