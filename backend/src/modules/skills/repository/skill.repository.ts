import { ISkill, SkillDTO } from "../interfaces/skill.types";
import { SkillModel } from "../models/skill.model";


export const SkillRepository = {
    create: async (data: SkillDTO) => {
        return SkillModel.create(data);
    },

    findAll: async () => {
        return SkillModel.find().sort({ category: 1 });
    },

    findByCategory: async (category: ISkill["category"]) => {
        console.log('category =========>', category);
        return SkillModel.find({ category: category }).sort({ level: -1 });
    },
};
