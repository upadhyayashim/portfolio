import { Document } from "mongoose";

export interface ProjectDTO {
    title: string;
    description: string;
    techStack: string[];
    githubUrl?: string;
    liveUrl?: string;
    image?: string;
    featured?: boolean;
}

export interface Project extends ProjectDTO {
    id: string;
    createdAt: Date;
}

export interface IProject extends Document {
    title: string;
    description: string;
    techStack: string[];
    githubUrl?: string;
    liveUrl?: string;
    image?: string;
    featured?: boolean;
    createdAt: Date;
    updatedAt: Date;
};
