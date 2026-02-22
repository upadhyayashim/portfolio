import multer from "multer";
import path from "path";
import { ApiError } from "./error.middleware";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + "-" + file.originalname?.replace(/\s+/g, "");
        cb(null, uniqueName);
    }
});

const fileFilter: multer.Options["fileFilter"] = (req, file, cb) => {
    if (file.mimetype !== "application/pdf") {
      return cb(new ApiError(400, "Only PDF files are allowed"));
    }
  
    cb(null, true);
};

export const uploadResume = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 2 * 1024 * 1024, // 2MB max
    }
});