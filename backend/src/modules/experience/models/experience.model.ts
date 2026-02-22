import mongoose from "mongoose";
import { IExperience } from "../interfaces/experience.types";

const experienceSchema = new mongoose.Schema<IExperience>(
    {
        company: {
            type: String,
            required: true,
            trim: true
        },
        role: {
            type: String,
            required: true,
            trim: true,
        },
        startDate: {
            type: String,
            required: true,
        },
        endDate: {
            type: String,
        },
        isCurrent: {
            type: Boolean,
        },
        description: {
            type: String,
        },
        techStack: [
            {
                type: String, 
            }
        ],
    },
    { timestamps: true }
);

export const ExperienceModel = mongoose.model<IExperience>("Experience", experienceSchema);