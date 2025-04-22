import httpStatus from "http-status";
import { catchAsync } from "../../utils/CatchAsync";
import sendResponse from "../../utils/SendResponse";
import { AdminServices } from "./admin.service";

const createAdmin = catchAsync(async (req, res) => {
  const result = await AdminServices.createAdminDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin created successfully",
    data: result,
  });
});

const getAdmin = catchAsync(async (req, res) => {
  const result = await AdminServices.getAdminDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin fetched successfully",
    data: result,
  });
});

export const AdminControllers = {
  createAdmin,
  getAdmin,
};
