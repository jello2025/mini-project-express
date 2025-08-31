import express from "express";
import dotenv from "dotenv";
import connectDB from "./database";
import { authorRouter } from "./api/authors/author.routes";
import { notFound } from "./middlewares/notFound";
import { errorHandler } from "./middlewares/errorHandler";
import { env } from "./config/env";
import morgan from "morgan";
import cors from "cors";
dotenv.config();
const app = express();

connectDB();

console.log(env.DB_URL);

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/authors", authorRouter);
app.use(notFound);
app.use(errorHandler);

app.listen(env.PORT, () => {
  console.log("Server is running :]");
});
