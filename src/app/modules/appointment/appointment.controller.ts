import httpStatus from "http-status";
import { catchAsync } from "../../utils/CatchAsync";
import sendResponse from "../../utils/SendResponse";
import { AppointmentServices } from "./appointment.service";

const createAppointment = catchAsync(async (req, res) => {
  const result = await AppointmentServices.createAppointmentDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Appointment created successfully",
    data: result,
  });
});

const getAllAppointments = catchAsync(async (req, res) => {
  const result = await AppointmentServices.getAllAppointmentsDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Appointments retrieved successfully",
    data: result,
  });
});

const getSingleAppointment = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AppointmentServices.getSingleAppointmentDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Appointment retrieved successfully",
    data: result,
  });
});

export const AppointmentControllers = {
  createAppointment,
  getAllAppointments,
  getSingleAppointment,
};
