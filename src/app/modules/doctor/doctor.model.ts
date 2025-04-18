import { Schema, model } from "mongoose";
import { Tdoctor } from "./doctor.interface";

const doctorSchema = new Schema<Tdoctor>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: false,
      select: false,
    },
    image: {
      type: String,
      required: true,
    },
    graduation: {
      type: String,
      required: true,
    },
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
    workDetails: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    consultationFee: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Doctor = model<Tdoctor>("Doctor", doctorSchema);
