import httpStatus from "http-status";
import config from "../../config";
import { catchAsync } from "../../utils/CatchAsync";
import sendResponse from "../../utils/SendResponse";
import { AuthServices } from "./auth.service";

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);
  const { accessToken, refreshToken } = result;
  res.cookie("refreshToken", refreshToken, {
    secure: config.node_env == "production",
    httpOnly: true,
    sameSite: "none",
    maxAge: 1000 * 60 * 60 * 24 * 365,
  });

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Login successfully",
    data: { accessToken },
  });
});

const changePassword = catchAsync(async (req, res) => {
  const result = await AuthServices.changePassword(req.user, req.body);
  console.log(req.user);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Login successfully",
    data: result,
  });
});

export const AuthController = {
  loginUser,
  changePassword,
};
