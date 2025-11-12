import type { NextFunction, Request, Response } from "express";

import * as y from "yup";

export const userValidation = {
  create: async (req: Request, res: Response, next: NextFunction) => {
    const userYupSchema = y.object({
      name: y.string().required("Nome é obrigatório"),
      email: y.string().email("Email Inválido").required("Email é obrigatório"),
      phone: y.string().required("Numero é obrigatório"),
      birthday: y.date().required("Data de nascimento é obrigatório"),
    });

    try {
      await userYupSchema.validate(req.body);

      next();
    } catch (error) {
      res.status(400).json({ message: (error as y.ValidationError).errors[0] });
    }
  },
};
