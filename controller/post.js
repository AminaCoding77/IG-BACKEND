import { postModel } from "../schema/post.schema.js";

export const BringPostSingle = async (req, res) => {
  const postId = req.params.postId;
  const Comments = await postModel.findById({ _id: postId }).populate("userId");

  res.status(200).json(Comments);
};
