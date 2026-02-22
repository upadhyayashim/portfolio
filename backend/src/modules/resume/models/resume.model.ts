import mongoose from "mongoose";
import { IResume } from "../interfaces/resume.types";

const resumeSchema = new mongoose.Schema<IResume>(
    {
        url: {
            type: String,
            required: true,
        },
        publicId: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

export const ResumeModel = mongoose.model<IResume>("Resume", resumeSchema);