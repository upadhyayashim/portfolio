import { ApiResponse } from "../types/apiResponse";
import { Experience } from "../types/experience";
import { api } from "./api";

export const fetchExperiences = async (): Promise<ApiResponse<Experience[]>> => {
    const res = await api.get('/experience');

    return res.data;
};