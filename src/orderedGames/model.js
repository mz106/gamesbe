const { DataTypes } = require("sequelize");

const sequelize = require("../db/connection");

const OrderedGame = sequelize.define("OrderedGame", {
  gameId: {
    type: DataTypes.STRING,
  },
  gamename: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.DECIMAL,
  },
  OrderId: {
    type: DataTypes.INTEGER,
    foreginKey: true,
  },
});

module.exports = OrderedGame;
