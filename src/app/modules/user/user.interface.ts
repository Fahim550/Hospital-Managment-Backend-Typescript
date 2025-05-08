import { Types } from "mongoose";
import USER_ROLE from "../../constants/userRole";

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: "admin" | "doctor" | "patient";
  isDeleted?: boolean;
  status?: "in-progress" | "blocked";
  roleRef?: Types.ObjectId;
  roleModel?: "Admin" | "Doctor" | "Patient";
}

export type TUserRole = keyof typeof USER_ROLE;
