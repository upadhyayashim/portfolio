import jwt from "jsonwebtoken";
import { config } from "../config";

export const generateAccessToken = (payload: object) => {
    return jwt.sign(
        payload,
        config.JWT_SECRET,
        { 
            expiresIn: config.TOKEN_EXPIRY
        }
    );
};

export const verifyToken = <T>(token: string): T => {
    return jwt.verify(token, config.JWT_SECRET) as T;
};
