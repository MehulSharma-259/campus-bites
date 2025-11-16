/** @format */
import express from "express";
import prisma from "../lib/prisma.js";
const router = express.Router();
router.get("/", async (req, res) => {
    try {
        const data = await prisma.menuItem.findMany();
        res.status(200).json(data);
    }
    catch (err) {
        return res.json({
            message: "failed to fetch menu items",
        });
    }
});
router.get("/payment", (req, res) => { });
export default router;
//# sourceMappingURL=content.routes.js.map