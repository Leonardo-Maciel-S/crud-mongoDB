import express from "express";
import { userController } from "../../controllers/user/index.js";
import { userValidation } from "../../middleware/user-validation.js";

const userRouter = express.Router();

userRouter.get("/", userController.getAll);
userRouter.post("/", userValidation.create, userController.create);
userRouter.patch("/:id", userValidation.edit, userController.edit);
userRouter.delete("/:id", userController.exclude);

export { userRouter };
