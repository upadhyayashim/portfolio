import { Request, RequestHandler, Response } from "express";
import { createExperience, deleteExperience, getAllExperiences, getExperienceById, updateExperience } from "../services/experience.service";
import { apiResponse } from "../../../utils/apiResponse";
import { createExperienceValidator } from "../validators/experience.validator";
import { ApiError } from "../../../middlewares/error.middleware";

interface Params {
    id: string;
}

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

// UPDATE
export const update: RequestHandler<Params> = async (req, res) => {
    const id = req.params.id as string;

    const updated = await updateExperience(id, req.body);

    return res.status(200).json(
        apiResponse(true, "Updated successfully", updated)
    );
};

// DELETE
export const remove: RequestHandler<Params> = async (req, res) => {
    const id = req.params.id as string;

    await deleteExperience(id);

    return res.status(200).json(
        apiResponse(true, "Deleted successfully", null)
    );
};