import mongoose from "mongoose";
import { ISkill } from "../interfaces/skill.types";

const skillSchema = new mongoose.Schema<ISkill>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        category: {
            type: String,
            enum: ["frontend", "backend", "database", "devops", "other"],
            required: true,
        },
        level: {
            type: Number,
            min: 1,
            max: 100,
            required: true,
        },
    },
    { timestamps: true }
);

export const SkillModel = mongoose.model<ISkill>("Skill", skillSchema);
