import Joi from "joi";

export const createProjectValidator = Joi.object({
    title: Joi.string().min(3).required(),
    description: Joi.string().required(),
    techStack: Joi.array().items(Joi.string()).min(1).required(),
    githubUrl: Joi.string().uri().optional(),
    liveUrl: Joi.string().uri().optional(),
    image: Joi.string().optional(),
    featured: Joi.boolean().optional(),
});
