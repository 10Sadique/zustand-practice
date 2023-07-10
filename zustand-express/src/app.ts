import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDb from "./utils/connectDB";
import { logger } from "./utils/logger";
import authRouter from "./modules/auth.router";

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));

app.use("/auth", authRouter);

app.listen(5000, () => {
  logger.info(`App started at http://localhost:5000`);
  connectToDb();
});
