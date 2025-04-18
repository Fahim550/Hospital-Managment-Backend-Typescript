import express from "express";
import { AdminControllers } from "./admin.controller";

const router = express.Router();

router.get("/", AdminControllers.getAllAdmin);
router.post("/", AdminControllers.createAdmin);

export const AdminRouter = router;
