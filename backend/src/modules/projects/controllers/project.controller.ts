import { Request, Response } from "express";
import {
    createProject,
    getAllProjects,
    getProjectById,
} from "../services/project.service";
import { apiResponse } from "../../../utils/apiResponse";
import { createProjectValidator } from "../validators/project.validator";
import { ApiError } from "../../../middlewares/error.middleware";

export const create = async (req: Request, res: Response) => {
    const { error } = createProjectValidator.validate(req.body);

    if (error) {
        throw new ApiError(400, error.details[0].message);
    }

    const project = await createProject(req.body);

    return res.status(201).json(apiResponse(true, "Success", project));
};

export const getProjects = async (req: Request, res: Response) => {
    const projects = await getAllProjects();

    return res.status(200).json(apiResponse(true, "Success", projects));
};

export const getOne = async (req: Request, res: Response) => {
    const id = String(req.params.id);
    if (!id) {
        throw new ApiError(400, "Invalid request");
    }
    
    const projectDetails = await getProjectById(id);

    return res.status(200).json(apiResponse(true, "Success", projectDetails));
};
