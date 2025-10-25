import { postModel } from "../schema/post.schema.js";

export const EditPost = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const caption = body.caption;

  await postModel.findByIdAndUpdate(id, {
    caption: caption,
  });

  res.status(200).json("Successfully updated post");
};
