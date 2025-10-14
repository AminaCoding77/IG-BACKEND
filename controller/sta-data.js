import { userModel } from "../schema/users.schema.js";

export const StaData = async (req, res) => {
  const params = req.params;
  const staId = params.staId;

  const staData = await userModel.findById({ _id: staId });

  res.json(staData);
};
