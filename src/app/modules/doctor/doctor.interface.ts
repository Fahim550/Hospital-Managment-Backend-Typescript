// doctor.interface.ts
import { Types } from "mongoose";

export interface TAvilability {
  days: string[];
  timeSlots: string[];
}

export interface TDoctor {
  user: Types.ObjectId;
  specialty: string;
  graduation: string;
  specilities:
    | "Child-Care"
    | "Diabetes"
    | "Gynae"
    | "Kidny"
    | "Psychology"
    | "Skin"
    | "Orthopedics"
    | "General-Physician";
  workDetails: string;
  experience: string;
  consultationFee: string;
  phone: string;
  image?: string;
  status: "pending" | "approved" | "rejected";
  isConfirmed?: boolean;
  isDeleted?: boolean;
}
