import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import createHttpError from 'http-errors';

const secretKey = "Badcoder@%repo";

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
    req.user = decoded;

    next();
  });
};

// Define a custom type for the request object with 'user' property
interface RequestWithUser extends Request {
  user?: unknown; // Adjust the type based on your token structure
}
