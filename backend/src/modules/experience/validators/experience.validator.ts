import Joi from "joi";

export const createExperienceValidator = Joi.object({
    company: Joi.string().required(),
    role: Joi.string().required(),
    startDate: Joi.string().required(),
    endDate: Joi.string().optional(),
    isCurrent: Joi.boolean().optional(),
    description: Joi.string().required(),
    techStack: Joi.array(),
});