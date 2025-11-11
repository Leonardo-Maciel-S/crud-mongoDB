import express, { json, type Request, type Response } from "express";
import { connect } from "./db/index.js";

const app = express();

const port = process.env.PORT || 3002;

connect();

app.use(json());

app.get("/", (_: Request, res: Response) => {
  return res.send("Hello World");
});

app.listen(port, () => {
  console.log("Disponível em: http://localhost:" + port);
});
