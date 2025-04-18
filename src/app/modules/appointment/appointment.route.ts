import express from "express";
import { AppointmentControllers } from "./appointment.controller";

const router = express.Router();

router.post("/create", AppointmentControllers.createAppointment);
router.get("/", AppointmentControllers.getAllAppointments);
router.get("/:id", AppointmentControllers.getSingleAppointment);

export const AppointmentRouter = router;
