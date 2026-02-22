import { Request, Response } from "express";
import { saveResume, getResume } from "../services/resume.service";
import { apiResponse } from "../../../utils/apiResponse";


export const upload = async (req: Request, res: Response) => {
    if (!req.file) {
        return res.status(400).json({
            success: false,
            message: "Resume file is required",
        });
    }

    const resume = await saveResume(req.file);

    res.status(201)
        .json(apiResponse(true, 'Success', resume));
}

export const getResumeController = async (req: Request, res: Response) => {
    const resume = await getResume();

    res.status(200)
        .json(apiResponse(true, 'Success', resume));
}