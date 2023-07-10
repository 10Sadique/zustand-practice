import dayjs from "dayjs";
import dotenv from "dotenv";
import { pino } from "pino";

dotenv.config();

const level = process.env.LEVEL as string;
export const logger = pino({
  transport: {
    target: "pino-pretty",
  },
  level,
  base: {
    pid: false,
  },
  timestamp: () => `, "time":"${dayjs().format()}"`,
});
