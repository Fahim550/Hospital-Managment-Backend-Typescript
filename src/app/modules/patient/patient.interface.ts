// patient.interface.ts
import { Types } from "mongoose";

export interface IPatient {
  name: string;
  email: string;
  user: Types.ObjectId;
  age: number;
  gender: "male" | "female";
  phone: string;
  address?: string;
  isDeleted?: boolean;
  status?: "approved" | "rejected";
}
