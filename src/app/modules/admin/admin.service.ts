import { Admin } from "./admin.model";

const getAllAdminDB = async () => {
  return await Admin.find();
};

const createAdminDB = async (data: any) => {
  const existingAdmins = await Admin.find();

  if (existingAdmins.length > 0) {
    throw new Error("Only one admin is allowed in the system!");
  }

  const result = await Admin.create(data);
  return result;
};

export const AdminServices = {
  getAllAdminDB,
  createAdminDB,
};
