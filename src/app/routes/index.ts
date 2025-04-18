import { Router } from "express";
import { AdminRouter } from "../modules/admin/admin.route";
import { DoctorRouter } from "../modules/doctor/doctor.route";
import { PatientRouter } from "../modules/patient/patient.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/doctor",
    route: DoctorRouter,
  },
  {
    path: "/patient",
    route: PatientRouter,
  },
  {
    path: "/admin",
    route: AdminRouter,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
