import { IContact } from "../types/contact";
import { api } from "./api";

export const saveContact = async (data: IContact) => {
    const res = await api.post("/contact/save", data);

    return res.data;
};