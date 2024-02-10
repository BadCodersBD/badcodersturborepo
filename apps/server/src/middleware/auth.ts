import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import createHttpError from 'http-errors';

// Define a custom type for the decoded user object
interface DecodedUser {
  userId: string; // Adjust based on your actual user object structure
}

// Define a custom type for the request object with 'user' property
interface RequestWithUser extends Request {
  user?: DecodedUser;
}

const secretKey = process.env.JWT_SECRET as string

export const requiresAuth = (req: RequestWithUser, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return next(createHttpError(401, "User not authenticated"));
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return next(createHttpError(401, "Invalid token"));
    }

    // Attach user information to the request object
    req.user = decoded as DecodedUser; // Assume DecodedUser is your decoded user type

    next();
  });
};
