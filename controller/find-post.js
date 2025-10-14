import { postModel } from "../schema/post.schema.js";

export const findPost = async (req, res) => {
  const user = req.user;
  const userId = user._id;
  const posts = await postModel
    .find({
      userId: userId,
    })
    .populate("userId");

  res.json(posts);
};
