import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload"
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";
import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "@modules/accounts/useCases/UpdateUserAvatar/UpdateUserAvatarController";

const usersRoutes = Router()

const uplouadAvatar = multer(uploadConfig.uploud("./tmp/avatar"))
const createUserController = new CreateUserController()
const updateUserAvatarController = new UpdateUserAvatarController()

usersRoutes.post("/", createUserController.handle)

usersRoutes.patch("/avatar", ensureAuthenticated, uplouadAvatar.single("avatar"), updateUserAvatarController.handle)

export { usersRoutes }