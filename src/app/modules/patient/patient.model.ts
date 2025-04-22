// patient.model.ts
import { Schema, model } from "mongoose";
import { TPatient } from "./patient.interface";

const patientSchema = new Schema<TPatient>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    age: { type: Number, required: true },
    gender: { type: String, enum: ["male", "female"], required: true },
    phone: { type: String, required: true },
    address: { type: String },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Patient = model<TPatient>("Patient", patientSchema);
