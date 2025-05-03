import bcrypt from "bcrypt";
import httpStatus from "http-status";
import ApiError from "../../utils/ApiError";
import { User } from "../user/user.model";
import { IAuth } from "./auth.interface";
import { createToken } from "./auth.utils";

const loginUser = async (payload: IAuth) => {
  const user = await User.findOne({ email: payload.email });

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
    userId: user._id,
    role: user.role,
  };

  const accessToken = createToken(jwtPayload);
};

export const AuthServices = {
  loginUser,
};
