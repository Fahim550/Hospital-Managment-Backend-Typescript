import { Doctor } from "./doctor.model";

const getAllDoctorDB = async () => {
  const result = await Doctor;
  return result;
};

export const DoctorServices = {
  getAllDoctorDB,
};
