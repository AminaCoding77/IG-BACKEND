import { userModel } from "../schema/users.schema.js";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const body = req.body;
  const saltRounds = 8;
  const password = await hash(body.password, saltRounds);
  const secret = process.env.JWT_SECRET;

  const existing = await userModel.findOne({ email: body.email });

  if (existing) {
    res.status(400).json({ message: "ERROR, user eamil already exists" });
  } else {
    const createdUser = await userModel.create({
      username: body.username,
      email: body.email,
      password: password,
      bio: body.bio,
      fullname: body.fullname,
    });
    const accessToken = jwt.sign(
      {
        data: createdUser,
      },
      secret,
      { expiresIn: "2h" }
    );
    res.json(accessToken);
  }
};
