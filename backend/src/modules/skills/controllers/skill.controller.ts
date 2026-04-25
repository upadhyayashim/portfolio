import { Request, Response } from "express";
import { createSkill, getAllSkills, getSkillsByCategory, getSortedSkills, updateSkill } from "../services/skill.service";
import { apiResponse } from "../../../utils/apiResponse";
import { createSkillValidator } from "../validators/skill.validator";
import { ApiError } from "../../../middlewares/error.middleware";

export const create = async (req: Request, res: Response) => {
    const { error } = createSkillValidator.validate(req.body);

    if (error) {
        throw new ApiError(400, error.details[0].message);
    }

    const skill = await createSkill(req.body);
    return res.status(201).json(apiResponse(true, 'Success', skill));
};

export const getAll = async (req: Request, res: Response) => {
    // const skills = await getAllSkills();
    const skills = await getSortedSkills();
    console.log('skill called =======>', skills);
    return res.status(200).json(apiResponse(true, 'Success', skills));
};

export const getByCategory = async (req: Request, res: Response) => {
    const category = (req.params.category);

    if (!category) {
        throw new ApiError(400, "Category is required");
    }

    const skills = await getSkillsByCategory(category as any);
    return res.status(200).json(apiResponse(true, 'Success', skills));
};

export const updateSkillById = async (req: Request, res: Response) => {
    const id  = req.params.id as string;
    const payload = req.body;

    if (!id) {
        throw new ApiError(400, "id is required");
    }

    const updatedResult = await updateSkill(id, payload);
    return res.status(200).json(apiResponse(true, 'Success', updatedResult));
}
