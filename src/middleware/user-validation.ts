import type { NextFunction, Request, Response } from "express";

import * as y from "yup";

const userYupSchema = y.object({
  name: y.string().required("Nome é obrigatório"),
  email: y.string().email("Email Inválido").required("Email é obrigatório"),
  phone: y.string().required("Numero é obrigatório"),
  birthday: y.date().required("Data de nascimento é obrigatório"),
});

const userOptionalYupSchema = y.object({
  name: y.string(),
  email: y.string().email("Email Inválido"),
  phone: y.string(),
  birthday: y.date(),
});

export const userValidation = {
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await userYupSchema.validate(req.body);

      next();
    } catch (error) {
      res.status(400).json({ message: (error as y.ValidationError).errors[0] });
    }
  },

  edit: async (req: Request, res: Response, next: NextFunction) => {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "Envie pelo menos um campo." });
    }

    try {
      await userOptionalYupSchema.validate(req.body);

      next();
    } catch (error) {
      res.status(400).json({ message: (error as y.ValidationError).errors[0] });
    }
  },
};
