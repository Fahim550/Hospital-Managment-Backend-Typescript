import { z } from "zod";

const loginValidationSchema = z.object({
  body: z.object({
    email: z
      .string({ message: "Email is required" })
      .email({ message: "Invalid email address" }),
    password: z.string({ message: "Password is required" }),
  }),
});

const changePasswordValidationSchema = z.object({
  body: z.object({
    oldPassword: z.string({ message: "Old Password is required" }),
    newPassword: z.string({ message: "New Password is required" }),
  }),
});
const refreshTokenValidationSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({ message: "Refresh token is required" }),
  }),
});
const forgetPasswordValidationSchema = z.object({
  body: z.object({
    email: z.string({ message: "Refresh token is required" }).email(),
  }),
});
const resetPasswordValidationSchema = z.object({
  body: z.object({
    id: z.string({ message: "Id is required" }),
    newPassword: z.string({ message: "Password is required" }),
  }),
});

export const AuthValidations = {
  loginValidationSchema,
  changePasswordValidationSchema,
  refreshTokenValidationSchema,
  forgetPasswordValidationSchema,
  resetPasswordValidationSchema,
};
