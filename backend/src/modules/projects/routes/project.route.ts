import { Router } from "express";
import { create, getOne, getProjects } from "../controllers/project.controller";
import { authenticate } from "../../../middlewares/auth.middleware";

const router = Router();

// Public router
router.get('/', getProjects);
router.get('/:id', getOne);

//Private 
router.post('/', authenticate, create);

export default router