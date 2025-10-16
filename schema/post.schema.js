import mongoose from "mongoose";
import { Schema } from "mongoose";

const PostSchema = new mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, required: true, ref: "usersIG" },
  caption: { type: String, required: true },
  like: [{ type: Schema.Types.ObjectId, required: true }],
  images: {
    type: [{ type: Schema.Types.String, required: true }],
    required: true,
  },
  commentIds: [{ type: Schema.Types.ObjectId, ref: "comments" }],
  updatedAt: { type: Date, default: Date.now() },
  createdAt: { type: Date, default: Date.now() },
});

export const postModel = mongoose.model("posts", PostSchema);
