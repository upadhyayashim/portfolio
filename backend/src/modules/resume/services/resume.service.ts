import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";
import { ResumeRepository } from "../repository/resume.repository";

export const saveResume = async (file: Express.Multer.File) => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream({
            folder: 'portfolio-resume',
            resource_type: 'raw'
        }, async (error, result) => {
            if (error || !result) {
                return reject(error);
            }

            const resume = await ResumeRepository.upsert({
                url: result?.url,
                publicId: result?.public_id
            });

            resolve(resume);
        });

        streamifier.createReadStream(file.buffer).pipe(uploadStream);
    });
}

export const getResume = async () => {
    return await ResumeRepository.getResume();
}
