import { Request, Response, NextFunction } from "express";

const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({ success: false, message: err.message });
  next(); // Call next to pass the error to the next error handler (if any)
};

export { notFound, errorHandler };
