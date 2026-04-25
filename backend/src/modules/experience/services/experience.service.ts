import { ApiError } from "../../../middlewares/error.middleware";
import { Experience, ExperienceDTO } from "../interfaces/experience.types";
import { ExperienceRepository } from "../repository/experience.repository";

export const createExperience = async (data: ExperienceDTO) => {
    try {
        const newExperience: ExperienceDTO = {
            company: data.company,
            role: data.role,
            startDate: data.startDate,
            isCurrent: data.isCurrent ?? false,
            description: data.description,
            techStack: data.techStack,
        };

        if (data.endDate && data.endDate !== '' && data.endDate !== null) {
            newExperience.endDate = data.endDate;
        }

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


export const updateExperience = async (
    id: string,
    data: Partial<ExperienceDTO>
) => {
    const updated = await ExperienceRepository.updateById(id, data);

    if (!updated) {
        throw new ApiError(404, "Experience not found");
    }

    return updated;
};

export const deleteExperience = async (id: string) => {
    const deleted = await ExperienceRepository.deleteById(id);

    if (!deleted) {
        throw new ApiError(404, "Experience not found");
    }

    return deleted;
};