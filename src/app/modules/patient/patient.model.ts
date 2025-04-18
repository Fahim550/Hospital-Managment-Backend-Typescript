import { Schema, model } from "mongoose";
import { TPatient } from "./patient.interface";

const patientSchema = new Schema<TPatient>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: 0 },
  age: { type: Number, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  phone: { type: String },
  address: { type: String },
  isDeleted: { type: Boolean, default: false },
});

export const Patient = model<TPatient>("Patient", patientSchema);
