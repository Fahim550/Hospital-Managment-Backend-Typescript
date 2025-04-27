// patient.interface.ts
import { Types } from "mongoose";

export interface TPatient {
  user: Types.ObjectId;
  age: string;
  gender: "male" | "female";
  phone: string;
  address?: string;
  status: "approved" | "rejected";
  isDeleted?: boolean;
}
