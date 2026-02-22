import { ApiError } from "../../../middlewares/error.middleware";
import { Experience, ExperienceDTO } from "../interfaces/experience.types";
import { ExperienceRepository } from "../repository/experience.repository";

export const createExperience = async (data: ExperienceDTO) => {
    try {
        const newExperience: ExperienceDTO = {
            company: data.company,
            role: data.role,
            startDate: data.startDate,
            endDate: data.endDate,
            isCurrent: data.isCurrent ?? false,
            description: data.description,
            techStack: data.techStack,
        };

        return await ExperienceRepository.create(newExperience);
    } catch (error) {
        throw error;
    }
};

// Get all
export const getAllExperiences = async () => {
    return await ExperienceRepository.findAll();
};

// Get one
export const getExperienceById = async (id: string) => {
    const exp = await ExperienceRepository.findById(id);

    if (!exp) throw new ApiError(404, "Experience not found");

    return exp;
};
