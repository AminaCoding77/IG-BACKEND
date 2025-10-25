import express from "express";
import { signup } from "../controller/sign-up.js";
import { login } from "../controller/log-in.js";
import { StaData } from "../controller/sta-data.js";
const userRouter = express.Router();

userRouter.post("/user/create", signup);
userRouter.post("/login", login);
userRouter.get("/StaData/:staId", StaData);
export default userRouter;
