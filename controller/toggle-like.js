import { postModel } from "../schema/post.schema.js";

export const toggleLikePost = async (req, res) => {
  const user = req.user;
  const params = req.params;
  const postId = params.postId;

  const post = await postModel.findById({ _id: postId });
  const postLikes = post.like;
  const isLiked = postLikes.includes(user._id);

  if (isLiked) {
    await postModel.findOneAndUpdate(
      { _id: postId },
      {
        like: postLikes.filter((id) => id.toString() !== user._id),
      }
    );
  } else {
    await postModel.findOneAndUpdate(
      { _id: postId },
      {
        like: [...postLikes, user._id],
      }
    );
  }

  res.status(200).json({ message: "successfully liked" });
};
