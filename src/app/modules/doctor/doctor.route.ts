import express from "express";
import { DoctorControllers } from "./doctor.controller";

const router = express.Router();

router.get("/", DoctorControllers.getAllDoctor);

export const DoctorRouter = router;
