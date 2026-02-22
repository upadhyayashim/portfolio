import { NextFunction, Request, Response } from "express";
import { JwtPayloadDTO } from "../modules/auth/interfaces/auth.types";
import { ApiError } from "./error.middleware";
import jwt from "jsonwebtoken";
import { config } from "../config";

export interface AuthRequest extends Request {
    user?: JwtPayloadDTO
}

export const authenticate = (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new ApiError(401, 'Unauthorized');
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, config.JWT_SECRET) as JwtPayloadDTO;

        req.user = decoded;
        next();
    } catch (error) {
        throw new ApiError(401, "Invalid or expired token");
    }
}