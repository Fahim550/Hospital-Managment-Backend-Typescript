import jwt from "jsonwebtoken";

export const createToken = (
  jwtPayload: { userId: string; role: string },
  secret: string,
  expiresIn: string
) => {
  return jwt.sign(jwtPayload, secret, { expiresIn });
};
//  return jwt.sign(payload, process.env.JWT_SECRET as string,
export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret);
};
