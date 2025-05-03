import { Patient } from "./patient.model";

const getAllPatientDB = async () => {
  const patient = await Patient.find({ isDeleted: false }).populate("user");
  return patient;
};

const getSinglePatientDB = async (id: string) => {
  const patient = await Patient.findOne({
    _id: id,
    isDeleted: false,
    isConfirmed: true,
  }).populate("user");
  if (!Patient) throw new Error("Patient not found or not confirmed!");
  return patient;
};

const createPatientDB = async (data: any) => {
  const existingPatient = await Patient.findOne({ email: data.email });

  if (existingPatient) {
    throw new Error("Patient already exists!");
  }

  const patient = await Patient.create(data);
  return patient;
};

const updatePatientDB = async (id: string, data: any) => {
  const existingPatient = await Patient.findById(id).populate("user");

  if (!existingPatient) {
    throw new Error("Patient not found!");
  }

  const patient = await Patient.findByIdAndUpdate(id, data, { new: true });
  return patient;
};

const deletePatientDB = async (id: string) => {
  const existingPatient = await Patient.findById(id);

  if (!existingPatient) {
    throw new Error("Patient not found!");
  }

  const patient = await Patient.findByIdAndDelete(id);
  return patient;
};

export const PatientServices = {
  getAllPatientDB,
  getSinglePatientDB,
  createPatientDB,
  updatePatientDB,
  deletePatientDB,
};
