import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./router/user.router.js";
import postRouter from "./router/post.router.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(cors());

const ConnectToDB = async () => {
  await mongoose.connect(process.env.MONGO_URL);
};

ConnectToDB();
console.log(process.env.MONGO_URL);

app.use("/", userRouter);
app.use("/", postRouter);

app.listen(PORT, () => {
  console.log("app chin ajiljiina");
});
