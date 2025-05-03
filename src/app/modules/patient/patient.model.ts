// patient.model.ts
import { Schema, model } from "mongoose";
import { IPatient } from "./patient.interface";

const patientSchema = new Schema<IPatient>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number },
    gender: { type: String, enum: ["male", "female"] },
    phone: { type: String },
    address: { type: String },
    isDeleted: { type: Boolean, default: false },
    status: { type: String, enum: ["approved", "rejected"] },
  },
  { timestamps: true }
);

export const Patient = model<IPatient>("Patient", patientSchema);
