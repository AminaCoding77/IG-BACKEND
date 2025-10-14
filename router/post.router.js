import express from "express";
import { createPost } from "../controller/create-post.js";
import { findPost } from "../controller/find-post.js";
import { BringPost } from "../controller/bring-post.js";
import { toggleLikePost } from "../controller/toggle-like.js";
import { authMiddleware } from "../middleware/auth-middleware.js";
import { toggleFollow } from "../controller/toggle-follow.js";
import { StaBringPost } from "../controller/sta-bring-post.js";
const postRouter = express.Router();

postRouter.post("/post", authMiddleware, createPost);
postRouter.get("/posts", authMiddleware, findPost);
postRouter.post("/toggleLike/:postId", authMiddleware, toggleLikePost);
postRouter.get("/allPosts", authMiddleware, BringPost);
postRouter.post("/toggleFollow/:staId", authMiddleware, toggleFollow);
postRouter.get("/StaPosts/:staId", StaBringPost);

export default postRouter;
