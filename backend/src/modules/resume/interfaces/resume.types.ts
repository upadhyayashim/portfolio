import { Document } from "mongoose";

export interface IResume extends Document {
    url: string;
    publicId: string;
    createdAt: Date;
    updatedAt: Date;
}