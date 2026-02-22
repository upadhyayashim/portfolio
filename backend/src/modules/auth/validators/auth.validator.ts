import Joi from "joi";

export const registerValidator = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string()
    .valid('admin', 'user')
    .default('user'),
});

export const loginValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});
