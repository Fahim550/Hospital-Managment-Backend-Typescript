import { Doctor } from "./doctor.model";

const getAllDoctorDB = async () => {
  return await Doctor.find({ isDeleted: false });
};

const getSingleDoctorDB = async (id: string) => {
  const doctor = await Doctor.findOne({
    _id: id,
    isDeleted: false,
    // isConfirmed: true,
  });
  if (!doctor) throw new Error("Doctor not found or not confirmed!");
  return doctor;
};

const getDoctorRegisterRequestDB = async () => {
  return await Doctor.find({ isDeleted: false, isConfirmed: false });
};

const createDoctorDB = async (data: any) => {
  const exists = await Doctor.findOne({ email: data.email });
  if (exists) throw new Error("Doctor already exists!");
  return await Doctor.create(data);
};

const updateDoctorDB = async (id: string, data: any) => {
  const doctor = await Doctor.findById(id);
  if (!doctor) throw new Error("Doctor not found!");
  return await Doctor.findByIdAndUpdate(id, data, { new: true });
};

const confirmDoctorByAdmin = async (id: string) => {
  const doctor = await Doctor.findById(id);
  if (!doctor) throw new Error("Doctor not found!");
  return await Doctor.findByIdAndUpdate(
    id,
    { isConfirmed: true },
    { new: true }
  );
};

const deleteDoctorByAdmin = async (id: string) => {
  const doctor = await Doctor.findById(id);
  if (!doctor) throw new Error("Doctor not found!");
  return await Doctor.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
};

export const DoctorServices = {
  getAllDoctorDB,
  getSingleDoctorDB,
  getDoctorRegisterRequestDB,
  createDoctorDB,
  updateDoctorDB,
  confirmDoctorByAdmin,
  deleteDoctorByAdmin,
};
