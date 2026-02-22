import mongoose from "mongoose";
import { IContact } from "../interfaces/contact.types";

const contactSchema = new mongoose.Schema<IContact>(
    {
        name: {
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        mobile: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
);

export const ContactModel = mongoose.model<IContact>("Contact", contactSchema);
