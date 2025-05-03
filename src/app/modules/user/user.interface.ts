import { Types } from "mongoose";

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
