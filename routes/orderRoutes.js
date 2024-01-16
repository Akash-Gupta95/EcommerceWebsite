import express from "express";
const router = express.Router();
import {
  DeleteSingleOrder,
  createOrderController,
  getOrderDetailsController,
} from "../controllers/OrderControllers.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

// Create Order by User
router.post(
  "/create-order",
  requireSignIn,

  createOrderController
);

//get Order for Admin Dashboard

router.get("/get-orderDetails", getOrderDetailsController);

// //delete Single Order
router.delete("/delete-product/:id", DeleteSingleOrder);

export default router;
