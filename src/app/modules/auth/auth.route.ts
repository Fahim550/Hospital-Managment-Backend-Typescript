import express from "express";
import { validateRequest } from "../../utils/ValidateRequest";
import { AuthController } from "./auth.controller";
import { AuthValidations } from "./auth.validation";

const router = express.Router();

router.post(
  "/login",
  validateRequest(AuthValidations.loginValidationSchema),
  AuthController.loginUser
);
