import { Router } from "express";
import { authenticate } from "../../../middlewares/auth.middleware";
import { uploadResume } from "../../../middlewares/upload.middleware";
import { getResumeController, upload } from "../controllers/resume.controller";
import { memoryUploadResume } from "../../../middlewares/cloudniary-upload.middleware";

const router = Router()


router.post('/upload', memoryUploadResume.single('resume'), upload);
router.get('/download', getResumeController);

export default router;