const { DataTypes } = require("sequelize");

const sequelize = require("../db/connection");

const Order = sequelize.define(
  "Order",
  {
    totalprice: {
      type: DataTypes.DECIMAL,
    },
    UserId: {
      type: DataTypes.INTEGER,
      foreginKey: true,
    },
  },
  { modelName: "Order", tableName: "Orders" }
);

module.exports = Order;
