import httpStatus from "http-status";
import { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { verifyToken } from "../modules/auth/auth.utils";
import { TUserRole } from "../modules/user/user.interface";
import { User } from "../modules/user/user.model";
import ApiError from "../utils/ApiError";
import { catchAsync } from "../utils/CatchAsync";

const auth = (...requireRoles: TUserRole[]) => {
  return catchAsync(async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "Token not found, UNAUTHORIZED User"
      );
    }
    let decoded: JwtPayload;

    try {
      decoded = verifyToken(token, config.jwt_access as string);
    } catch (error) {
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "Could not verify token. UNAUTHORIZED User"
      );
    }
    const { userId, role } = decoded;

    const user = await User.findById(userId);

    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }
    if (user.isDeleted) {
      throw new ApiError(httpStatus.NOT_FOUND, "User is Deleted");
    }
    if (user.status == "blocked") {
      throw new ApiError(httpStatus.NOT_FOUND, "User is Blocked");
    }
    if (requireRoles && !requireRoles.includes(role)) {
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "Role mismatched. UNAUTHORIZED User"
      );
    }

    req.user = decoded as JwtPayload;
    next();
  });
};

export default auth;
