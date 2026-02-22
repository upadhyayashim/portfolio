import { NextFunction, Request, Response } from "express";

export class ApiError extends Error {
    statusCode: number;

    constructor (statusCode: number, message: string) {
        super(message);
        this.statusCode = statusCode;

        Error.captureStackTrace(this, this.constructor);
    }
}

export const errorHandler = (err: ApiError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;

    res.status(statusCode)
        .json({
            success: false,
            message: err.message || "Internal Server Error",
            stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
        });
};
