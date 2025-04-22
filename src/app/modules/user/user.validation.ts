import { z } from "zod";

const createUserValidationSchema = z.object({
  body: z.object({
    name: z
      .string({ message: "Name is required" })
      .max(20, { message: "Name should be maximum 15 character long" }),
    email: z
      .string({ message: "Email is required" })
      .email({ message: "Invalid email address" }),
    password: z
      .string({ message: "Password is required" })
      .max(15, { message: "Password should not be greated than 15 character" }),
    // image: z.string(),
    role: z.enum(["admin", "doctor", "patient"]),
    // status: z.enum(["in-progress", "blocked"]),
    isDeleted: z.boolean().default(false),
    roleModel: z.enum(["Admin", "Doctor", "Patient", "Staff"]),
  }),
});

export const UserValidations = {
  createUserValidationSchema,
};
