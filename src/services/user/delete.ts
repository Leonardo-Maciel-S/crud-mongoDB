import type { User } from "../../interfaces/user.js";
import user from "../../model/user.js";

export const exclude = async (id: string, body: User) => {
  try {
    const userDeleted = await user.findByIdAndDelete(id, { new: true });

    if (!userDeleted) {
      throw new Error("Usuário não encontrado");
    }

    return userDeleted;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
