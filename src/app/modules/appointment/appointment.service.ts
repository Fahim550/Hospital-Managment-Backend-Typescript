import { Appointment } from "./appointment.model";

const createAppointmentDB = async (data: any) => {
  const result = await Appointment.create(data);
  return result;
};

const getAllAppointmentsDB = async () => {
  const result = await Appointment.find()
    .populate("doctor")
    .populate("patient");
  return result;
};

const getSingleAppointmentDB = async (id: string) => {
  const result = await Appointment.findById(id)
    .populate("doctor")
    .populate("patient");
  return result;
};

export const AppointmentServices = {
  createAppointmentDB,
  getAllAppointmentsDB,
  getSingleAppointmentDB,
};
