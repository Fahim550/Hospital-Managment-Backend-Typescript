import { Admin } from "./admin.model";

const createAdminDB = async (data: any) => {
  const alreadyAdmin = await Admin.findOne({});
  if (alreadyAdmin) throw new Error("Admin already exists!");
  const result = await Admin.create(data);
  return result;
};

const getAdminDB = async () => {
  const result = await Admin.findOne({});
  if (!result) throw new Error("Admin not found!");
  return result;
};

export const AdminServices = {
  createAdminDB,
  getAdminDB,
};
