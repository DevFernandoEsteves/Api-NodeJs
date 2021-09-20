import { Router } from "express";
import { AuthenticateUserController } from "../modules/accounts/useCases/authenticateUser/AuthenticateUserController";

const authenciateRoutes = Router()

const authenticateUserController = new AuthenticateUserController()

authenciateRoutes.post("/sessions", authenticateUserController.handle)

export { authenciateRoutes }