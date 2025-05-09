import express from "express";
import USER_ROLE from "../../constants/userRole";
import auth from "../../middleware/auth";
import { upload } from "../../utils/SendFileToCloudinary";
import { DoctorControllers } from "./doctor.controller";

const router = express.Router();

router.get("/", DoctorControllers.getAllDoctor);
router.get("/:id", DoctorControllers.getSingleDoctor);
router.post("/", DoctorControllers.createDoctor);
router.post(
  "/upload-image",
  auth(USER_ROLE.doctor),
  upload.single("file"),
  DoctorControllers.uploadDoctorImage
);
router.put("/:id", DoctorControllers.updateDoctor);
router.delete("/:id", DoctorControllers.deleteDoctor);
router.get("/register", DoctorControllers.getDoctorRegisterRequest);
router.patch("/confirmDoctor/:id", DoctorControllers.confirmDoctor);

export const DoctorRouter = router;
