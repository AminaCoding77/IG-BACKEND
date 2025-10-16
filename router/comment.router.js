import express from "express";
import { CreateComment } from "../controller/create-comment.js";
import { authMiddleware } from "../middleware/auth-middleware.js";
import { BringComments } from "../controller/bring-post-comments.js";

const commentRouter = express.Router();

commentRouter.post("/createComment", authMiddleware, CreateComment);
commentRouter.get("/bringComments/:postId", authMiddleware, BringComments);

export default commentRouter;
