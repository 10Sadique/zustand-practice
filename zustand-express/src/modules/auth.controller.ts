import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const loginController = async (req: Request, res: Response) => {
  console.log(req.headers);
  return res.send(
    jwt.sign({ test: "payload" }, "secretKey", {
      expiresIn: "5s",
    })
  );
};
