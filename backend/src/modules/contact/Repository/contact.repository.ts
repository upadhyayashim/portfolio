import { ContactDTO } from "../interfaces/contact.types";
import { ContactModel } from "../models/contact.model";

export const ContactRepository = {
    create: async (data: ContactDTO) => {
        return ContactModel.create(data);
    },
};
