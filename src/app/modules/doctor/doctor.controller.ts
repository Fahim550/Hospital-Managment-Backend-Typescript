import httpStatus from "http-status";
import { catchAsync } from "../../utils/CatchAsync";
import sendResponse from "../../utils/SendResponse";
import { DoctorServices } from "./doctor.service";

const getAllDoctor = catchAsync(async (req, res) => {
  const result = await DoctorServices.getAllDoctorDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Confirmed doctors retrieved successfully",
    data: result,
  });
});

const getSingleDoctor = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await DoctorServices.getSingleDoctorDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Doctor retrieved successfully",
    data: result,
  });
});
const uploadDoctorImage = catchAsync(async (req, res, next) => {
  console.log(req.file);
  const result = await DoctorServices.uploadDoctorImageDB(req.file);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Doctor image upload successfully",
    data: result,
  });
});

const getDoctorRegisterRequest = catchAsync(async (req, res) => {
  const result = await DoctorServices.getDoctorRegisterRequestDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Doctor register requests retrieved successfully",
    data: result,
  });
});

const createDoctor = catchAsync(async (req, res) => {
  const result = await DoctorServices.createDoctorDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Doctor created successfully",
    data: result,
  });
});

const updateDoctor = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await DoctorServices.updateDoctorDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Doctor updated successfully",
    data: result,
  });
});

const confirmDoctor = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await DoctorServices.confirmDoctorByAdmin(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Doctor confirmed successfully",
    data: result,
  });
});

const deleteDoctor = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await DoctorServices.deleteDoctorByAdmin(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Doctor deleted successfully",
    data: result,
  });
});

export const DoctorControllers = {
  getAllDoctor,
  getSingleDoctor,
  uploadDoctorImage,
  getDoctorRegisterRequest,
  createDoctor,
  updateDoctor,
  confirmDoctor,
  deleteDoctor,
};
