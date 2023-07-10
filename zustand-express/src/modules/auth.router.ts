import { Request, Response, Router } from "express";
import { loginController } from "./auth.controller";
import { requireAuth } from "../middlewares/requireAuth";

const router = Router();

router.post("/login", loginController);
router.post("/test", requireAuth, (req: Request, res: Response) => {
  return res.send("End Reached");
});

export default router;
