import { postModel } from "../schema/post.schema.js";

export const DeletePost = async (req, res) => {
  const id = req.params.id;

  await postModel.findByIdAndDelete(id);

  res.status(200).json("successfully deleted");
};
