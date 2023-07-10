import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const requireAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(403).send("Header does not exist.");
  }

  const token = authHeader.split(" ")[1];
  console.log(token);

  if (!token) {
    return res.status(403).send("Token does not exists.");
  }

  jwt.verify(token, "secretKey", function (err, decoded) {
    if (err?.name === "TokenExpiredError") {
      return res.status(401).send("JWT Expired");
    }

    res.locals.payload = decoded;
    console.log(`JWT AUTH PASSED`);
    return next();
  });
};
