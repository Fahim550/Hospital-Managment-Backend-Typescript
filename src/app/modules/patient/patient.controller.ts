import httpStatus from "http-status";
import { catchAsync } from "../../utils/CatchAsync";
import sendResponse from "../../utils/SendResponse";
import { PatientServices } from "./patient.service";

const getAllPatient = catchAsync(async (req, res) => {
  const result = await PatientServices.getAllPatientDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Patients retrieved successfully",
    data: result,
  });
});

const getSinglePatient = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await PatientServices.getSinglePatientDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Patient retrieved successfully",
    data: result,
  });
});

const createPatient = catchAsync(async (req, res) => {
  const result = await PatientServices.createPatientDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Patient created successfully",
    data: result,
  });
});

const updatePatient = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await PatientServices.updatePatientDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Patient updated successfully",
    data: result,
  });
});

const deletePatient = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await PatientServices.deletePatientDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Patient deleted successfully",
    data: result,
  });
});

export const PatientControllers = {
  getAllPatient,
  getSinglePatient,
  createPatient,
  updatePatient,
  deletePatient,
};
