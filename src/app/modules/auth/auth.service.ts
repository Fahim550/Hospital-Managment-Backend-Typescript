import httpStatus from "http-status";
import ApiError from "../../utils/ApiError";
import { User } from "../user/user.model";
import { IAuth } from "./auth.interface";

const loginUser = async (payload: IAuth) => {
  const user = await User.findOne({ email: payload.email });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User Not Found");
  }
};

export const AuthServices = {
  loginUser,
};
