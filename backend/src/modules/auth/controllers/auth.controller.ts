/**
 * @description Controller
 * HTTP Layer
 */

import { Request, Response } from "express";
import * as authService from '../services/auth.service';
import { apiResponse } from "../../../utils/apiResponse";
import { AuthRequest } from "../../../middlewares/auth.middleware";
import { loginValidator, registerValidator } from "../validators/auth.validator";
import { ApiError } from "../../../middlewares/error.middleware";

export const register = async (req: Request, res: Response) => {
    const { error } = registerValidator.validate(req.body);

    if (error) {
        throw new ApiError(400, error.details[0].message);
        return;
    }

    const user = await authService.registerUser(req.body);
    const userResponse = apiResponse(true, 'User Registered', user);

    return res.status(201).json(userResponse);
};

export const login = async (req: Request, res: Response) => {
    const { error } = loginValidator.validate(req.body);

    if (error) {
        throw new ApiError(400, error.details[0].message);
        return;
    }

    const token = await authService.loginUser(req.body);
    const loginResponse = apiResponse(true, 'Login Successful', token);

    return res.status(200).json(loginResponse);
};

export const getProfile = async (req: AuthRequest, res: Response) => {
    const profileResponse = apiResponse(true, 'Profile fetched successfully.', { user: req.user });
    res.status(200).json(profileResponse);
}