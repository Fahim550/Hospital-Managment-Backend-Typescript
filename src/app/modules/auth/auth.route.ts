import express from "express";
import USER_ROLE from "../../constants/userRole";
import auth from "../../middleware/auth";
import { validateRequest } from "../../utils/ValidateRequest";
import { AuthController } from "./auth.controller";
import { AuthValidations } from "./auth.validation";

const router = express.Router();

router.post(
  "/login",
  validateRequest(AuthValidations.loginValidationSchema),
  AuthController.loginUser
);
router.post(
  "/change-password",
  auth(USER_ROLE.admin, USER_ROLE.patient, USER_ROLE.doctor),
  validateRequest(AuthValidations.changePasswordValidationSchema),
  AuthController.changePassword
);
router.post(
  "/refresh-token",
  validateRequest(AuthValidations.refreshTokenValidationSchema),
  AuthController.refreshToken
);
router.post(
  "/forget-password",
  validateRequest(AuthValidations.forgetPasswordValidationSchema),
  AuthController.forgetPassword
);
router.post(
  "/reset-password",
  validateRequest(AuthValidations.resetPasswordValidationSchema),
  AuthController.resetPassword
);

export const AuthRouter = router;
