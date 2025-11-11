import mongoose from "mongoose";

export const connect = async () => {
  const url = process.env.DB_URL;

  if (!url) {
    throw new Error("Sem url de conexão");
  }

  try {
    await mongoose.connect(url);
    console.log("Conectado ao banco");
  } catch (error) {
    console.log("Erro ao conectar ao banco", error);
  }
};
