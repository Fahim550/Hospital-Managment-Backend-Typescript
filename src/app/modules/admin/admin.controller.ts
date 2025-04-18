import httpStatus from "http-status";
import { catchAsync } from "../../utils/CatchAsync";
import sendResponse from "../../utils/SendResponse";
import { AdminServices } from "./admin.service";

const getAllAdmin = catchAsync(async (req, res) => {
  const result = await AdminServices.getAllAdminDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admins retrieved successfully",
    data: result,
  });
});

const createAdmin = catchAsync(async (req, res) => {
  const result = await AdminServices.createAdminDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Admin created successfully",
    data: result,
  });
});

export const AdminControllers = {
  getAllAdmin,
  createAdmin,
};
