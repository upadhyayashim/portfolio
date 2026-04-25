import { Document } from "mongoose";

export type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "tools";

export interface SkillDTO {
  name: string;
  category: SkillCategory;
  level: number; // 1-10
}

export interface Skill extends SkillDTO {
  id: string;
  createdAt: Date;
}

export interface ISkill extends Document {
  name: string;
  category: SkillCategory;
  level: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface skillUpdateParams {
  id: string;
}