import { postModel } from "../schema/post.schema.js";

export const createPost = async (req, res) => {
  const body = req.body;
  const user = req.user;
  const post = await postModel.create({
    userId: user._id,
    caption: body.caption,
    images: body.images,
  });

  res.json(post);
};
