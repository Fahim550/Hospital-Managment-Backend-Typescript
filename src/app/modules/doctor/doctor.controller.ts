import { Request, Response } from "express";
import { DoctorServices } from "./doctor.service";

const getAllDoctor = async (req: Request, res: Response) => {
  try {
    const result = await DoctorServices.getAllDoctorDB();
    if (!result) {
      res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Doctor retrieved successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const DoctorControllers = {
  getAllDoctor,
};
