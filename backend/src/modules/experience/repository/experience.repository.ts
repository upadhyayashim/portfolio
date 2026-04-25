import { ExperienceDTO } from "../interfaces/experience.types";
import { ExperienceModel } from "../models/experience.model";

export const ExperienceRepository = {
    create: async (data: ExperienceDTO) => {
        return ExperienceModel.create(data);
    },

    findAll: async () => {
        return ExperienceModel.find().sort({ is_current: -1, startDate: -1 });
    },

    findById: async (id: string) => {
        return ExperienceModel.findById(id);
    },

    updateById: async (id: string, data: Partial<ExperienceDTO>) => {
        return ExperienceModel.findByIdAndUpdate(
            id,
            { $set: data },
            { new: true, runValidators: true }
        );
    },

    deleteById: async (id: string) => {
        return ExperienceModel.findByIdAndDelete(id);
    },
};
