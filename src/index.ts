import express, { json } from "express";
import { connect } from "./db/index.js";
import { userRouter } from "./routes/user/route.js";

const app = express();

const port = process.env.PORT || 3002;

connect();

app.use(json());

app.use("/user", userRouter);

app.listen(port, () => {
  console.log("Disponível em: http://localhost:" + port);
});
