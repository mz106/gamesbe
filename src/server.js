require("dotenv").config();
const express = require("express");
const cors = require("cors");

const User = require("./user/model");
const Order = require("./orders/model");
const OrderedGame = require("./orderedGames/model");

const userRouter = require("./user/routes");
const orderRouter = require("./orders/routes");

const app = express();

const port = process.env.PORT || 5001;

app.use(cors());

app.use(express.json());

app.use(userRouter);
app.use(orderRouter);

const syncTables = () => {
  User.sync({ alter: true });
  Order.sync({ alter: true });
  OrderedGame.sync();

  User.hasMany(Order);
  Order.belongsTo(User);

  Order.hasMany(OrderedGame);
  OrderedGame.belongsTo(Order);
};

app.listen(port, () => {
  syncTables();
  console.log("server is listening");
});
