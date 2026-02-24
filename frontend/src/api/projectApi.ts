import { ApiResponse } from "../types/apiResponse";
import { Project } from "../types/project";
import { api } from "./api";

export const fetchProjects = async (): Promise<ApiResponse<Project[]>> => {
    const res = await api.get("/projects");
    console.log('response check ',  res.data);
    return res.data;
};