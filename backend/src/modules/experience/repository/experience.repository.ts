import { ExperienceDTO } from "../interfaces/experience.types";
import { ExperienceModel } from "../models/experience.model";

export const ExperienceRepository = {
    create: async (data: ExperienceDTO) => {
        return ExperienceModel.create(data);
    },

    findAll: async () => {
        return ExperienceModel.find().sort({ createdAt: -1 });
    },

    findById: async (id: string) => {
        return ExperienceModel.findById(id);
    },
};
