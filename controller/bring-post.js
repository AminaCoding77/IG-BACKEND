import { postModel } from "../schema/post.schema.js";

export const BringPost = async (_req, res) => {
  const allPosts = await postModel.find({}).populate("userId");
  res.json(allPosts);
};
