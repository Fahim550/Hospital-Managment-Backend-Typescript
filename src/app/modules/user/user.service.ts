import { User } from "./user.model";

const createUserDB = async (data: any) => {
  const exists = await User.findOne({ email: data.email });
  if (exists) throw new Error("User already exists!");
  return await User.create(data);
};

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
