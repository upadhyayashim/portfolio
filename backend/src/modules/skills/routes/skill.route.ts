import { Router } from "express";
import { create, getAll, getByCategory, updateSkillById } from "../controllers/skill.controller";
import { authenticate } from "../../../middlewares/auth.middleware";


const router = Router();

// Public
router.get("/", getAll);
router.get("/:category", getByCategory);

// Protected
router.post("/", authenticate, create);
router.post("/:id", authenticate, updateSkillById);

export default router;
