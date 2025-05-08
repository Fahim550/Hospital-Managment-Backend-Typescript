import bcrypt from "bcrypt";
import httpStatus from "http-status";
import { JwtPayload } from "jsonwebtoken";
import config from "../../config";
import ApiError from "../../utils/ApiError";
import { User } from "../user/user.model";
import { IAuth } from "./auth.interface";
import { createToken } from "./auth.utils";

const loginUser = async (payload: IAuth) => {
  const user = await User.findOne({ email: payload.email }).select("+password");

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User Not Found");
  }
  if (user?.isDeleted) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "User is Deleted");
  }
  if (user?.status == "blocked") {
    throw new ApiError(httpStatus.FORBIDDEN, "User is Deleted");
  }

  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    user.password
  );
  if (!isPasswordMatched) {
    throw new ApiError(httpStatus.NOT_FOUND, "Password did not matched");
  }

  const jwtPayload = {
    userId: user._id.toString(),
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access as string,
    config.jwt_access_in as string
  );
  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh as string,
    config.jwt_refresh_in as string
  );

  return { accessToken, refreshToken };
};

const changePassword = async (
  userData: JwtPayload,
  payload: {
    oldPassword: string;
    newPassword: string;
  }
) => {
  const user = await User.findOne(userData.userId).select("+password");
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User Not Found");
  }
  if (user?.isDeleted) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "User is Deleted");
  }
  if (user?.status == "blocked") {
    throw new ApiError(httpStatus.FORBIDDEN, "User is Deleted");
  }

  const isPasswordMatched = await bcrypt.compare(
    payload.oldPassword,
    user.password
  );
  if (!isPasswordMatched) {
    throw new ApiError(httpStatus.NOT_FOUND, "Password did not matched");
  }

  const NewHashedPassword = await bcrypt.hash(
    payload.newPassword,
    Number(config.salt_round)
  );

  const result = await User.findOneAndUpdate(
    {
      _id: userData.userId,
      role: userData.role,
    },
    { password: NewHashedPassword }
  );
  return result;
};

export const AuthServices = {
  loginUser,
  changePassword,
};
