import express from "express";
import { DoctorControllers } from "./doctor.controller";

const router = express.Router();

router.get("/", DoctorControllers.getAllDoctor);
router.post("/", DoctorControllers.createDoctor);
router.put("/:id", DoctorControllers.updateDoctor);
router.delete("/:id", DoctorControllers.deleteDoctor);

export const DoctorRouter = router;
