// doctor.model.ts
import { Schema, model } from "mongoose";
import { TDoctor } from "./doctor.interface";

const doctorSchema = new Schema<TDoctor>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    specialty: { type: String, required: true },
    graduation: { type: String, required: true },
    specilities: {
      type: String,
      required: true,
      enum: [
        "Child-Care",
        "Diabetes",
        "Gynae",
        "Kidny",
        "Psychology",
        "Skin",
        "Orthopedics",
        "General-Physician",
      ],
    },
    workDetails: { type: String, required: true },
    experience: { type: String, required: true },
    consultationFee: { type: String, required: true },
    phone: { type: String, required: true },
    image: { type: String },
    isConfirmed: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Doctor = model<TDoctor>("Doctor", doctorSchema);
