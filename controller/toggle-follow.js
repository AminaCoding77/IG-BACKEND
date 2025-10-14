import { userModel } from "../schema/users.schema.js";

export const toggleFollow = async (req, res) => {
  const params = req.params;
  const staId = params.staId;
  const userId = req.user._id;

  const user = await userModel.findById(userId);
  const sta = await userModel.findById(staId);

  const staFollowers = sta.followers;

  const isFollowed = staFollowers.includes(userId);

  if (userId === staId) {
    res.status(400).json({ message: "Uurigu dagahgui t1 ee!" });
  } else {
    if (isFollowed) {
      await userModel.findByIdAndUpdate(
        { _id: userId },
        {
          following: user.following.filter((person) => {
            person.toString() !== staId;
          }),
        }
      );

      await userModel.findByIdAndUpdate(
        { _id: staId },
        {
          followers: sta.followers.filter((person) => {
            person.toString() !== userId;
          }),
        }
      );
      res.status(200).json({ message: "successfully unfollowed" });
    } else {
      await userModel.findByIdAndUpdate(
        { _id: userId },
        {
          following: [...user.following, staId],
        }
      );

      await userModel.findByIdAndUpdate(
        { _id: staId },
        {
          followers: [...sta.followers, userId],
        }
      );

      res.status(200).json({ message: "successfully followed" });
    }
  }
};
