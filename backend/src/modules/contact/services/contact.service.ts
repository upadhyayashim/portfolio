import { Contact, ContactDTO } from "../interfaces/contact.types";
import { ContactRepository } from "../Repository/contact.repository";

export const createContact = async (data: ContactDTO) => {
    try {
        const newContact: ContactDTO = {
            name: data?.name,
            email: data?.email,
            mobile: data?.mobile,
            message: data?.message,
        };

        return await ContactRepository.create(newContact);
    } catch (error) {
        throw error;
    }
}