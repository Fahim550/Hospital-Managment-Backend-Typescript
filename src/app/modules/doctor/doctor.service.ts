import { Doctor } from "./doctor.model";

const getAllDoctorDB = async () => {
  const result = await Doctor.find();
  return result;
};

const createDoctorDB = async (data: any) => {
  const existingDoctor = await Doctor.findOne({ email: data.email });

  if (existingDoctor) {
    throw new Error("Doctor already exists!");
  }

  const result = await Doctor.create(data);
  return result;
};

const updateDoctorDB = async (id: string, data: any) => {
  const existingDoctor = await Doctor.findById(id);

  if (!existingDoctor) {
    throw new Error("Doctor not found!");
  }

  const result = await Doctor.findByIdAndUpdate(id, data, { new: true });
  return result;
};

const deleteDoctorDB = async (id: string) => {
  const existingDoctor = await Doctor.findById(id);

  if (!existingDoctor) {
    throw new Error("Doctor not found!");
  }

  const result = await Doctor.findByIdAndDelete(id);
  return result;
};

export const DoctorServices = {
  getAllDoctorDB,
  createDoctorDB,
  updateDoctorDB,
  deleteDoctorDB,
};
