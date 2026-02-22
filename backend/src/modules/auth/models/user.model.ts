import mongoose from "mongoose";
import { IUser } from "../interfaces/auth.types";

const userSchema = new mongoose.Schema<IUser>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            minLength: 6,
            select: false
        },
        role: {
            type: String,
            enum: ["admin", "user"],
            default: "user"
        },
    },
    {
        timestamps: true
    }
);

export const UserModel = mongoose.model<IUser>("User", userSchema);
