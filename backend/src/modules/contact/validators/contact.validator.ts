import Joi from "joi";

export const createContactValidator = Joi.object({
    name: Joi.string().required(),
    mobile: Joi.string().required(),
    email: Joi.string().email().required(),
    message: Joi.string().required(),
});
