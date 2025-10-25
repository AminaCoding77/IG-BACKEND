import { userModel } from "../schema/users.schema.js";

export const getUsers = async (req, res) => {
  const searchParams = req.params.searchParams;

  const users = await userModel.find({
    username: new RegExp(searchParams, "i"),
  });

  res.json(users);
};
