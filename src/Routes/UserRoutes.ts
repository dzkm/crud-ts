import { Router, Request, Response } from "express";
import { userController } from "../Controllers";

const router = Router();

router.get("/users", (request: Request, response: Response) => {
  return userController.getAll(request, response);
});