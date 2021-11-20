import { SendForgotPasswordMailController } from "@modules/accounts/useCases/sendForgotPasswordMail/SendForgotPasswordMailController";
import { Router } from "express";

const passwordRoures = Router()

const sendForgotPasswordMailController = new SendForgotPasswordMailController()

passwordRoures.post("/forgot", sendForgotPasswordMailController.handle)

export { passwordRoures }