import { Request, Response } from "express";
import { createExperience, getAllExperiences, getExperienceById } from "../services/experience.service";
import { apiResponse } from "../../../utils/apiResponse";
import { createExperienceValidator } from "../validators/experience.validator";
import { ApiError } from "../../../middlewares/error.middleware";

// POST
export const create = async (req: Request, res: Response) => {
    const { error } = createExperienceValidator.validate(req.body);

    if (error) {
        throw new ApiError(400, error.details[0].message);
    }

    const exp = await createExperience(req.body);
    res.status(201).json(apiResponse(true, 'Success', exp));
};

export const getAll = async (req: Request, res: Response) => {
    const experiences = await getAllExperiences();
    return res.status(200).json(apiResponse(true, 'Success', experiences));
};

export const getOne = async (req: Request, res: Response) => {
    const id = String(req.params.id);
    const expDetails = await getExperienceById(id);

    return res.status(200).json(apiResponse(true, 'Success', expDetails));
};
