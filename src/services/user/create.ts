import type { User } from "../../interfaces/user.js";
import user from "../../model/user.js";

export const create = async (body: User) => {
  const userExist = await user.findOne({ email: body.email });

  if (userExist) {
    throw new Error("Usuário com esse email já existe");
  }

  try {
    const userCreated = await user.create(body);

    if (!userCreated) {
      throw new Error("Erro ao criar usuário");
    }

    return userCreated;
  } catch (error) {
    throw new Error("Erro inesperado");
  }
};
