import { Router } from "express";
import { create, getAll, getByCategory } from "../controllers/skill.controller";
import { authenticate } from "../../../middlewares/auth.middleware";


const router = Router();

// Public
router.get("/", getAll);
router.get("/:category", getByCategory);

// Protected
router.post("/", authenticate, create);

export default router;
