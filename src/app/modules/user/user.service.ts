import bcrypt from "bcrypt";
import httpStatus from "http-status";
import config from "../../config";
import ApiError from "../../utils/ApiError";
import { Doctor } from "../doctor/doctor.model";
import { Patient } from "../patient/patient.model";
import { IUser } from "./user.interface";
import { User } from "./user.model";

const getAllUsersDB = async () => {
  return await User.find({ isDeleted: false }).populate("roleRef");
};

const getUserByIdDB = async (id: string) => {
  const user = await User.findOne({ _id: id, isDeleted: false }).populate(
    "roleRef"
  );
  if (!user) throw new Error("User not found!");
  return user;
};

const createUserDB = async (payload: IUser) => {
  const exists = await User.findOne({ email: payload.email });
  if (exists) throw new ApiError(httpStatus.CONFLICT, "User already exists!");

  const hashedPassword = await bcrypt.hash(
    payload.password,
    Number(config.salt_round)
  );
  payload.password = hashedPassword;

  const user = await User.create(payload);

  const userData = {
    name: user.name,
    email: user.email,
    user: user._id,
  };

  if (payload.role == "doctor") {
    await Doctor.create(userData);
  } else if (payload.role == "patient") {
    await Patient.create(userData);
  }

  return user;
};

// const createUserDB = async (data: TUser) => {
//   const exists = await User.findOne({ email: data.email });
//   if (exists) throw new ApiError(httpStatus.CONFLICT, "User already exists!");

//   const newHashPassword = await bcrypt.hash(
//     data.password,
//     Number(config.salt_round)
//   );
//   data.password = newHashPassword;

//   const userResult = await User.create(data);
//   // const userData = {
//   //   name: data.name,
//   //   email: data.email,
//   //   user: result._id,
//   // };

//   if (data.role === "patient") {
//     await Patient.create({
//       user: userResult._id, // ✅ শুধু User Id দিবে
//       age: data.age,
//       gender: data.gender,
//       phone: data.phone,
//       address: data.address,
//     });
//   } else if (data.role === "doctor") {
//     await Doctor.create({
//       user: userResult._id, // ✅ User Id
//       specialty: data.specialty,
//       graduation: data.graduation,
//       specilities: data.specilities,
//       workDetails: data.workDetails,
//       experience: data.experience,
//       consultationFee: data.consultationFee,
//       phone: data.phone,
//       image: data.image || "", // optional
//     });
//   }
//   return userResult;
// };

const updateUserDB = async (id: string, data: any) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

const deleteUserDB = async (id: string) => {
  return await User.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
};

export const UserServices = {
  createUserDB,
  getAllUsersDB,
  getUserByIdDB,
  updateUserDB,
  deleteUserDB,
};
