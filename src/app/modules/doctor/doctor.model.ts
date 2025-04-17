import { model, Schema } from "mongoose";
import { Tdoctor } from "./doctor.interface";

const doctorSchema = new Schema<Tdoctor>({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    select: 0,
  },
  image: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  // name:{
  //     type:String,
  //     require:true
  // },
});

export const Doctor = model<Tdoctor>("doctor", doctorSchema);
