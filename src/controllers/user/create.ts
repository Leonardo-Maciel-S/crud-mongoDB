import type { Request, Response } from "express";
import { userService } from "../../services/user/index.js";
import status from "http-status";

export const create = async (req: Request, res: Response) => {
  try {
    const user = await userService.create(req.body);

    res.status(status.CREATED).json({ user });
  } catch (error) {
    return res
      .status(status.INTERNAL_SERVER_ERROR)
      .json({ message: (error as Error).message });
  }
};
