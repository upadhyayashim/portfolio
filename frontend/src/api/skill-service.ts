import { api } from "./api";

export const getSkills = async () => {
    const skillResponse = await api.get('/skills');
    return skillResponse;
}