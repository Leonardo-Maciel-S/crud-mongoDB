import type { Request, Response } from "express";
import { userService } from "../../services/user/index.js";
import status from "http-status";

export const getAll = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAll();

    res.status(status.OK).json({ users });
  } catch (error) {
    return res
      .status(status.INTERNAL_SERVER_ERROR)
      .json({ message: (error as Error).message });
  }
};
