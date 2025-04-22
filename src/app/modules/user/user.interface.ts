import { Types } from "mongoose";

export interface TUser {
  name: string;
  email: string;
  password: string;
  role: "admin" | "doctor" | "patient";
  isDeleted?: boolean;

  roleRef?: Types.ObjectId;
  roleModel?: "Admin" | "Doctor" | "Patient";
}
