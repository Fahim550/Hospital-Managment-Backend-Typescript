import { Types } from "mongoose";

export interface TAppointment {
  appointmentDate: string;
  appointmentTime: string;
  status: "pending" | "confirmed" | "cancelled";
  doctor: Types.ObjectId;
  patient: Types.ObjectId;
}
