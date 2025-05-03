// user.model.ts
import { Schema, Types, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    role: {
      type: String,
      enum: ["admin", "doctor", "patient"],
      required: true,
    },
    isDeleted: { type: Boolean, default: false },
    status: { type: String, enum: ["in-progress", "blocked"] },
    roleRef: { type: Types.ObjectId, refPath: "roleModel" },
    roleModel: {
      type: String,
      enum: ["Admin", "Doctor", "Patient"],
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export const User = model<IUser>("User", userSchema);
