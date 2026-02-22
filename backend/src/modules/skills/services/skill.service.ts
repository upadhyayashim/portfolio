import { ApiError } from "../../../middlewares/error.middleware";
import { ISkill, Skill, SkillDTO } from "../interfaces/skill.types";
import { SkillRepository } from "../repository/skill.repository";

const skills: Skill[] = [];

export const createSkill = async (data: SkillDTO) => {
    try {
        if (data.level < 1 || data.level > 10) {
            throw new ApiError(400, "Skill level must be between 1 and 10");
        }

        const newSkill: SkillDTO  = {
            name: data.name,
            category: data.category,
            level: data.level,
        };

        return await SkillRepository.create(newSkill);
    } catch (error) {
        throw error;
    }
};

// Get all skills
export const getAllSkills = async () => {
    return await SkillRepository.findAll();
};

// Filter by category
export const getSkillsByCategory = async (category: ISkill["category"]) => {
    return await SkillRepository.findByCategory(category);
};
