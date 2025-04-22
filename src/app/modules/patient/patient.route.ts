import express from "express";
import { PatientControllers } from "./patient.controller";

const router = express.Router();

router.get("/", PatientControllers.getAllPatient);
router.get("/:id", PatientControllers.getSinglePatient);
router.post("/create-patient", PatientControllers.createPatient);
router.put("/:id", PatientControllers.updatePatient);
router.delete("/:id", PatientControllers.deletePatient);

export const PatientRouter = router;
