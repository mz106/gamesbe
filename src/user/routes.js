const { Router } = require("express");
const userRouter = Router();

const { addUser, login, getAllUsers } = require("./controllers");
const { hashPass, comparePass } = require("../middleware/auth");

userRouter.post("/users", hashPass, addUser);
userRouter.post("/users/login", comparePass, login);
userRouter.get("/users", getAllUsers);

module.exports = userRouter;
