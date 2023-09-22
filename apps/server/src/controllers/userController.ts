import { Request, Response, NextFunction } from 'express';
import User from '../models/user';
// import { requiresAuth } from '../middleware/auth'; 

export const getAuthenticatedUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        // Assuming req.user is properly attached by requiresAuth middleware
        const user = await User.findById(req.user?.userId).select('name email image').exec();

        if (!user) {
            throw new Error('User not found');
        }

        res.json({ user });
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};
