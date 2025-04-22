// admin.model.ts
import { Schema, model } from "mongoose";
import { TAdmin } from "./admin.interface";

const adminSchema = new Schema<TAdmin>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export const Admin = model<TAdmin>("Admin", adminSchema);
