import { Patient } from "./patient.model";

const getAllPatientDB = async () => {
  const result = await Patient.find();
  return result;
};

const createPatientDB = async (data: any) => {
  const existingPatient = await Patient.findOne({ email: data.email });

  if (existingPatient) {
    throw new Error("Patient already exists!");
  }

  const result = await Patient.create(data);
  return result;
};

const updatePatientDB = async (id: string, data: any) => {
  const existingPatient = await Patient.findById(id);

  if (!existingPatient) {
    throw new Error("Patient not found!");
  }

  const result = await Patient.findByIdAndUpdate(id, data, { new: true });
  return result;
};

const deletePatientDB = async (id: string) => {
  const existingPatient = await Patient.findById(id);

  if (!existingPatient) {
    throw new Error("Patient not found!");
  }

  const result = await Patient.findByIdAndDelete(id);
  return result;
};

export const PatientServices = {
  getAllPatientDB,
  createPatientDB,
  updatePatientDB,
  deletePatientDB,
};
