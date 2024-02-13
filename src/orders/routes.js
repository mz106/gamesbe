const { Router } = require("express");
const orderRouter = Router();

const { addOrder, getAllOrders } = require("./controllers");

orderRouter.post("/orders", addOrder);

orderRouter.get("/orders", getAllOrders);

module.exports = orderRouter;
