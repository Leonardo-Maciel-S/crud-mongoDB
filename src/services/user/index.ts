import e from "express";
import { create } from "./create.js";
import { edit } from "./edit.js";
import { getAll } from "./get-all.js";
import { exclude } from "./delete.js";

export const userService = {
  create,
  getAll,
  edit,
  exclude,
};
