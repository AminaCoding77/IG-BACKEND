import mongoose from "mongoose";
import { Schema } from "mongoose";

const commentSchema = new mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, required: true, ref: "usersIG" },
  post: { type: Schema.Types.ObjectId, required: true, ref: "posts" },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

export const commentModel = mongoose.model("comments", commentSchema);
