import bcrypt from "bcrypt";
import httpStatus from "http-status";
import { JwtPayload } from "jsonwebtoken";
import config from "../../config";
import ApiError from "../../utils/ApiError";
import SendEmail from "../../utils/SendMail";
import { User } from "../user/user.model";
import { IAuth } from "./auth.interface";
import { createToken, verifyToken } from "./auth.utils";

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
  const user = await User.findById(userData.userId).select("+password");
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

const refreshToken = async (token: string) => {
  if (!token || typeof token !== "string") {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      "Token not found, UNAUTHORIZED User"
    );
  }
  const decoded = verifyToken(token, config.jwt_refresh as string);

  if (!decoded) {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      "Could not verify token. UNAUTHORIZED User"
    );
  }

  const { userId } = decoded as JwtPayload;

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

  const jwtPayload = {
    userId: user._id.toString(),
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access as string,
    config.jwt_access_in as string
  );
  return { accessToken };
};

const forgetPassword = async (email: string) => {
  const user = await User.findOne({ email: email });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User Not Found");
  }
  if (user?.isDeleted) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "User is Deleted");
  }
  if (user?.status == "blocked") {
    throw new ApiError(httpStatus.FORBIDDEN, "User is Deleted");
  }

  const jwtPayload = {
    userId: user._id.toString(),
    role: user.role,
  };

  const resetPassToken = createToken(
    jwtPayload,
    config.jwt_access as string,
    "10m"
  );

  const resetUILink = `${config.reset_pass_ui_link}?id=${user?._id}&token=${resetPassToken}`;

  SendEmail(user?.email, resetUILink);
};

const resetPassword = async (
  payload: { id: string; newPassword: string },
  token: string
) => {
  const user = await User.findById(payload.id);

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User Not Found");
  }
  if (user?.isDeleted) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "User is Deleted");
  }
  if (user?.status == "blocked") {
    throw new ApiError(httpStatus.FORBIDDEN, "User is Deleted");
  }

  const decoded = verifyToken(token, config.jwt_access as string) as JwtPayload;

  if (payload.id !== decoded.userId) {
    throw new ApiError(httpStatus.FORBIDDEN, "Forbidden Access!");
  }

  const newHashedPassword = await bcrypt.hash(payload?.newPassword, 10);
  await User.findOneAndUpdate(
    { id: decoded.userId, role: decoded.role },
    { password: newHashedPassword }
  );

  // const jwtPayload = {
  //   userId: user._id.toString(),
  //   role: user.role,
  // };

  // const resetPassToken = createToken(
  //   jwtPayload,
  //   config.jwt_access as string,
  //   config.jwt_access_in as string
  // );
};
export const AuthServices = {
  loginUser,
  changePassword,
  refreshToken,
  forgetPassword,
  resetPassword,
};
