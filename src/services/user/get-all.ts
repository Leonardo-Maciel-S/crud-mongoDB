import user from "../../model/user.js";

export const getAll = async () => {
  try {
    const users = await user.find();

    if (users.length === 0) {
      throw new Error("Nenhum usuário cadastrado.");
    }

    return users;
  } catch (error) {
    throw new Error("Error inesperado");
  }
};
