import { Request, Response } from "express";
import { createContact } from "../services/contact.service";
import { apiResponse } from "../../../utils/apiResponse";
import { createContactValidator } from "../validators/contact.validator";
import { ApiError } from "../../../middlewares/error.middleware";

export const create = async (req: Request, res: Response) => {
    const { error } = createContactValidator.validate(req.body);

    if (error) {
        throw new ApiError(400, error.details[0].message);
    }


    const contact = await createContact(req.body);
    res.status(201)
        .json(apiResponse(true, 'Success', contact));
}
