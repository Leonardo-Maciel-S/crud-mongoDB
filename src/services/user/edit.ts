import type { User } from "../../interfaces/user.js";
import user from "../../model/user.js";

export const edit = async (id: string, body: User) => {
  try {
    const userUpdated = await user.findByIdAndUpdate(id, body, { new: true });

    if (!userUpdated) {
      throw new Error("Usuário não encontrado");
    }

    return userUpdated;
  } catch (error) {
    throw new Error("Erro inesperado");
  }
};
