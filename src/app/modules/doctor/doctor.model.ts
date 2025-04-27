// doctor.model.ts
import { Schema, model } from "mongoose";
import { IDoctor } from "./doctor.interface";

const doctorSchema = new Schema<IDoctor>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    graduation: { type: String },
    specilities: {
      type: String,
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
    workDetails: { type: String },
    experience: { type: String },
    consultationFee: { type: String },
    phone: { type: String },
    image: { type: String },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      require: true,
      default: "pending",
    },
    isConfirmed: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Doctor = model<IDoctor>("Doctor", doctorSchema);
