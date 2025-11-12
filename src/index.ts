import express, { json, type Request, type Response } from "express";
import { connect } from "./db/index.js";
import { userController } from "./controllers/user/index.js";
import { userValidation } from "./middleware/user-validation.js";

const app = express();

const port = process.env.PORT || 3002;

connect();

app.use(json());

app.get("/", (_: Request, res: Response) => {
  return res.send("Hello World");
});

app.post("/user", userValidation.create, userController.create);

app.listen(port, () => {
  console.log("Disponível em: http://localhost:" + port);
});
