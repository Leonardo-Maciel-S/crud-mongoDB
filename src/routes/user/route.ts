import express from "express";
import { userController } from "../../controllers/user/index.js";
import { userValidation } from "../../middleware/user-validation.js";

const userRouter = express.Router();

userRouter.get("/", userController.getAll);
userRouter.post("/", userValidation.create, userController.create);

export { userRouter };
