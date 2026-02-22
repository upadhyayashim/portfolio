import mongoose from "mongoose";
import { IProject } from "../interfaces/project.types";
import { required } from "joi";

const projectSchema = new mongoose.Schema<IProject>(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
        },
        techStack: [
            {
                type: String,
                required: true,
            },
        ],
        githubUrl:{
            type: String,
        },
        liveUrl: {
            type: String
        },
        image: {
            type: String,
        },
        featured: {
            type: Boolean,
        }
    },
    { timestamps: true }
);

export const ProjectModel = mongoose.model<IProject>("Project", projectSchema);
