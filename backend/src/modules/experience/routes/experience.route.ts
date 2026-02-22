import { Router } from "express";
import { create, getAll, getOne } from "../controllers/experience.controller";

const router = Router();

// Public
router.get('/', getAll);
router.get('/:id', getOne);

// Private
router.post('/', create);

export default router;
