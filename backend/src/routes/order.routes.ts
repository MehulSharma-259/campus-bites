import express from "express"
import { authMiddleware, AuthRequest } from "../middleware/auth.js";
import prisma from "../lib/prisma.js";

const router = express.Router();

router.use(authMiddleware);

router.post('/place-order', async (req: AuthRequest, res) => {
  try {
    const userId = req.user!.id;

    const cart = await prisma.cart.findUnique({
      where: {userId},
      include: {
        items: {
          include: {menuItem: true}
        }
      } 
    })

    if(!cart || cart.items.length === 0) {
      return res.status(400).json({message: "cart is empty"})
    }

    const totalPrice = cart.items.reduce((accumulator, items) => {
      return accumulator + (items.menuItem.price * items.quantity)
    }, 0)


    const order = await prisma.$transaction(async (tx) => {

      const newOrder = await tx.order.create({
        data: {
          userId,
          totalPrice, 
          status: 'COMPLETED',
          items: {
            create: cart.items.map((items) => ({
              title: items.menuItem.title,
              price: items.menuItem.price,
              quantity: items.quantity
            }))
          }
        }
      })

      await tx.cartItem.deleteMany({
        where: {cartId: cart.id}
      })

      return newOrder

    })

    return res.status(201).json({
      message: "order placed successfully",
      orderId: order.id
    })
  } catch(err: any) {
    console.error("order err", err)
    res.status(500).json({
      message: "failed to place order"
    })
  }

})

export default router;