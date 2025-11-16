/** @format */

import express, {Request, Response} from "express";
import {authMiddleware, AuthRequest} from "../middleware/auth.js";
import prisma from "../lib/prisma.js";
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const data = await prisma.menuItem.findMany();
    res.status(200).json(data);
  } catch (err: any) {
    return res.json({
      message: "failed to fetch menu items",
    });
  }
});

router.get("/payment", (req: Request, res: Response) => {});

export default router;
