import { Document } from "mongoose";

export interface ExperienceDTO {
    company: string;
    role: string;
    startDate: string;
    endDate?: string;
    isCurrent?: boolean;
    description: string;
    techStack: string[];
};

export interface Experience extends ExperienceDTO {
    id: string;
    createdAt: Date;
};

export interface IExperience extends Document {
    company: string;
    role: string;
    startDate: string;
    endDate?: string;
    isCurrent?: boolean;
    description: string;
    techStack: string[];
    createdAt: Date;
    updatedAt: Date;
};
