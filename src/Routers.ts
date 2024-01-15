
import { Router } from "express";
import UserController from "./Controllers/UserController";
const router = Router();
const userController = new UserController();
router.get('/items', userController.getUsers);

export default router; 