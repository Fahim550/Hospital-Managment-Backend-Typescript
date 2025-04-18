import httpStatus from "http-status";
import { catchAsync } from "../../utils/CatchAsync";
import sendResponse from "../../utils/SendResponse";
import { DoctorServices } from "./doctor.service";

const getAllDoctor = catchAsync(async (req, res, next) => {
  const result = await DoctorServices.getAllDoctorDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Doctor retrieved successfully",
    data: result,
  });
});
//   if (!result) {
//     res.status(404).json({
//       success: false,
//       message: "Doctor not found",
//     });
//   }
//   res.status(200).json({
//     success: true,
//     message: "Doctor retrieved successfully",
//     data: result,
//   });
// });

const createDoctor = catchAsync(async (req, res, next) => {
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
  console.log("id", id);
  const result = await DoctorServices.updateDoctorDB(id, req.body);

  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Doctor not found or update failed",
      data: null,
    });
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Doctor updated successfully",
    data: result,
  });
});

const deleteDoctor = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await DoctorServices.deleteDoctorDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Doctor deleted successfully",
    data: result,
  });
});

export const DoctorControllers = {
  getAllDoctor,
  createDoctor,
  updateDoctor,
  deleteDoctor,
};
