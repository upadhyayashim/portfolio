import { Document } from "mongoose";

export interface RegisterDTO {
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'user';
}

export interface LoginDTO {
    email: string;
    password: string;
}

export interface JwtPayloadDTO {
    userId: string;
    role: 'admin' | 'user'
}

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: "admin" | "user";
}
