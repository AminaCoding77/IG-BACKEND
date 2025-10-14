import { userModel } from "../schema/users.schema.js";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const secret = process.env.JWT_SECRET;

  const body = req.body;
  const userExists = await userModel.findOne({ email: body.email });
  const password = body.password;
  if (userExists === null) {
    res.status(400).json({ message: "user doesn't exist" });
  } else {
    const comPassword = await compare(password, userExists.password);
    if (comPassword === true) {
      const accessToken = jwt.sign(
        {
          data: userExists,
        },
        secret,
        { expiresIn: "2h" }
      );
      res.json(accessToken);
    } else {
      res.status(400).json({ message: "Incorrect password" });
    }
  }
};
