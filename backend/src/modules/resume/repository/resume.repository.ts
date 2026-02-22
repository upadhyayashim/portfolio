import { IResume } from "../interfaces/resume.types";
import { ResumeModel } from "../models/resume.model";

export const ResumeRepository = {
    upsert: async (data: Partial<IResume>) => {
        return ResumeModel.findOneAndUpdate({}, data, {
            upsert: true,
            new: true,
        });
    },

    getResume: async () => {
        return ResumeModel.findOne();
    },
};
