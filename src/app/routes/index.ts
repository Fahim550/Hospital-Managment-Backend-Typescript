import { Router } from "express";
import { DoctorRouter } from "../modules/doctor/doctor.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/doctor",
    route: DoctorRouter,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
