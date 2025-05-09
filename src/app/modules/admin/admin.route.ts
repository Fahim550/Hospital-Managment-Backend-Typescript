import express from "express";
import { AdminControllers } from "./admin.controller";

const router = express.Router();

router.post("/", AdminControllers.createAdmin);
router.get("/", AdminControllers.getAdmin);

export const AdminRouter = router;
