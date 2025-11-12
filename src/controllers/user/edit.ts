import type { Request, Response } from "express";
import { userService } from "../../services/user/index.js";
import status from "http-status";
import { isValidObjectId } from "mongoose";

export const edit = async (req: Request<{ id: string }>, res: Response) => {
  const id = req.params.id;

  if (!id) {
    return res
      .status(status.INTERNAL_SERVER_ERROR)
      .json({ message: "Id é obrigatório" });
  }

  if (!isValidObjectId(id)) {
    return res.status(status.BAD_REQUEST).json({ message: "Id inválido" });
  }

  try {
    const user = await userService.edit(id, req.body);

    res.status(status.OK).json({ user });
  } catch (error) {
    return res
      .status(status.INTERNAL_SERVER_ERROR)
      .json({ message: (error as Error).message });
  }
};
