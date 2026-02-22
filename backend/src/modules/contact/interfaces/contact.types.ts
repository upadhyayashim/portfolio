import { Document } from "mongoose";

export interface ContactDTO {
    name: string,
    email: string,
    mobile: string,
    message: string,
}

export interface Contact extends ContactDTO {
    id: string;
    createdAt: Date;
}

export interface IContact extends Document {
    name: string,
    email: string,
    mobile: string,
    message: string,
    createdAt: Date;
    updatedAt: Date;
}