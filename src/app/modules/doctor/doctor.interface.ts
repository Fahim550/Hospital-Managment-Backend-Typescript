// doctor.interface.ts
import { Types } from "mongoose";

export interface TDoctor {
  user: Types.ObjectId;
  specialty: string;
  image?: string;
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
  isConfirmed?: boolean;
  isDeleted?: boolean;
}
