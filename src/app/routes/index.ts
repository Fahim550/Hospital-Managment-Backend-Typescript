import { Router } from "express";
import { AdminRouter } from "../modules/admin/admin.route";
import { AppointmentRouter } from "../modules/appointment/appointment.route";
import { AuthRouter } from "../modules/auth/auth.route";
import { DoctorRouter } from "../modules/doctor/doctor.route";
import { PatientRouter } from "../modules/patient/patient.route";
import { UserRouter } from "../modules/user/user.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRouter,
  },
  {
    path: "/doctors",
    route: DoctorRouter,
  },
  {
    path: "/patients",
    route: PatientRouter,
  },
  {
    path: "/admin",
    route: AdminRouter,
  },
  {
    path: "/appointment",
    route: AppointmentRouter,
  },
  {
    path: "/auth",
    route: AuthRouter,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
