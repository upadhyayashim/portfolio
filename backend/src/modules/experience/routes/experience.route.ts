import { Router } from "express";
import { create, getAll, getOne, remove, update } from "../controllers/experience.controller";

const router = Router();

// Public
router.get('/', getAll);
router.get('/:id', getOne);

// Private
router.post('/', create);
router.put("/:id", update);     // UPDATE
router.delete("/:id", remove);  // DELETE

export default router;
