import { postModel } from "../schema/post.schema.js";

export const StaBringPost = async (req, res) => {
  const params = req.params;
  const staId = params.staId;

  const Posts = await postModel.find({ userId: staId });

  res.json(Posts);
};
