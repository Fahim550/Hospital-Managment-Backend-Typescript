import { Schema, model } from "mongoose";
import { TAppointment } from "./appointment.interface";

const appointmentSchema = new Schema<TAppointment>(
  {
    appointmentDate: {
      type: String,
      required: true,
    },
    appointmentTime: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
    doctor: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    patient: {
      type: Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Appointment = model<TAppointment>(
  "Appointment",
  appointmentSchema
);
