import { Router } from "express";
import authRoutes from "../modules/auth/routes/auth.route";
import projectRoutes from "../modules/projects/routes/project.route";
import experienceRoutes from "../modules/experience/routes/experience.route";
import skillRoutes from "../modules/skills/routes/skill.route";
import resumeRoutes from "../modules/resume/routes/resume.route";
import contactRoutes from "../modules/contact/routes/contact.route";

const router = Router();

router.use('/auth', authRoutes);
router.use('/projects', projectRoutes);
router.use('/experience', experienceRoutes);
router.use("/skills", skillRoutes);
router.use('/resume', resumeRoutes);
router.use('/contact', contactRoutes);

export default router;
