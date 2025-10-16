import { commentModel } from "../schema/comment.schema.js";
import { postModel } from "../schema/post.schema.js";

export const CreateComment = async (req, res) => {
  const userId = req.user._id;
  const { post, comment } = req.body;

  const createdComment = await commentModel.create({
    userId: userId,
    post: post,
    comment: comment,
  });

  const Post = await postModel.findById({ _id: post });
  const PostCommentIds = Post.commentIds;

  await postModel.findByIdAndUpdate(
    { _id: post },
    {
      commentIds: [...PostCommentIds, userId],
    }
  );

  res.status(200).json(createdComment);
};
