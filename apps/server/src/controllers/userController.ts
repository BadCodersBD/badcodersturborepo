// controllers/userController.ts

import { Request, Response, NextFunction } from 'express';
import User from '../models/user';

export const getAuthenticatedUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const user = await User.findById(req.user.userId).select('name email image').exec();
  
      if (!user) {
        throw new Error('User not found');
      }
  
      res.json({ user });
    } catch (error) {
      next(error); // Pass the error to the error handling middleware
    }
  };
  
