import { api } from "./api";

// resumeApi.ts
export const getResume = async () => {
    const res = await api.get("/resume/download");
    return res.data;
};