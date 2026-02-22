import Joi from "joi";

export const createSkillValidator = Joi.object({
    name: Joi.string().min(2).required(),
    category: Joi.string()
        .valid("frontend", "backend", "database", "devops", "other")
        .required(),
    level: Joi.number().min(1).max(10).required(),
});
