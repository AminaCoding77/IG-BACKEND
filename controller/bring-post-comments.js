import { commentModel } from "../schema/comment.schema.js";

export const BringComments = async (req, res) => {
  const postId = req.params.postId;
  const Comments = await commentModel
    .find({ post: postId })
    .populate({
      path: "post",
      populate: { path: "userId", select: "username profilePicture" },
    })
    .populate("userId", "username profilePicture");

  res.status(200).json(Comments);
};
