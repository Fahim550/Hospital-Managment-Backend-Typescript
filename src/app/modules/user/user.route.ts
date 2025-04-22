import express from "express";
import { validateRequest } from "../../utils/ValidateRequest";
import { UserControllers } from "./user.controller";
import { UserValidations } from "./user.validation";

const router = express.Router();

router.post(
  "/",
  validateRequest(UserValidations.createUserValidationSchema),
  UserControllers.createUser
);
router.get("/", UserControllers.getAllUsers);
router.get("/:id", UserControllers.getUserById);
router.put("/:id", UserControllers.updateUser);
router.delete("/:id", UserControllers.deleteUser);

export const UserRouter = router;
