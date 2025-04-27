// user.model.ts
import { Schema, Types, model } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>(
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
    roleRef: { type: Types.ObjectId, refPath: "roleModel" },
    roleModel: {
      type: String,
      enum: ["Admin", "Doctor", "Patient"],
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export const User = model<TUser>("User", userSchema);
