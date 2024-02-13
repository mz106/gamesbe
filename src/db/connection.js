const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize(process.env.MY_POSTGRES_URI);

const sequelize = new Sequelize(process.env.MYSQL_URI);

sequelize.authenticate();

console.log("DB is working");

module.exports = sequelize;
