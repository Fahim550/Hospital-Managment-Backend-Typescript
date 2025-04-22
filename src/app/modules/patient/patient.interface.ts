// patient.interface.ts
import { Types } from "mongoose";

export interface TPatient {
  user: Types.ObjectId;
  age: number;
  gender: "male" | "female";
  phone: string;
  address?: string;
  isDeleted?: boolean;
}
