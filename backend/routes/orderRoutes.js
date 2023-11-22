import { Router } from "express";
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = Router();

router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);
router.get("/mine", protect, getMyOrders);
router.put("/:id/deliver", protect, admin, updateOrderToDelivered);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.get("/:id", protect, getOrderById);

export default router;
