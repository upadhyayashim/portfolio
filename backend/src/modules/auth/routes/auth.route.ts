import { Router } from "express";
import { getProfile, login, register } from "../controllers/auth.controller";
import { authenticate } from "../../../middlewares/auth.middleware";

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', authenticate, getProfile);

export default router;