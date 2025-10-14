import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) throw new Error("need auth header");

  const accesstoken = authHeader.split(" ")[1];
  if (!accesstoken) throw new Error("need auth token");

  const token = jwt.verify(accesstoken, "TestSecret");
  if (!token) throw new Error("need to register");
  req.user = token.data;

  next();
};
