import express from "express";
import { DoctorControllers } from "./doctor.controller";

const router = express.Router();

router.get("/", DoctorControllers.getAllDoctor);
router.get("/:id", DoctorControllers.getSingleDoctor);
router.post("/", DoctorControllers.createDoctor);
router.put("/:id", DoctorControllers.updateDoctor);
router.delete("/:id", DoctorControllers.deleteDoctor);
router.get("/register", DoctorControllers.getDoctorRegisterRequest);
router.patch("/confirmDoctor/:id", DoctorControllers.confirmDoctor);

export const DoctorRouter = router;
