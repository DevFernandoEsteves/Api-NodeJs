import { ResetPesswordUserController } from "@modules/accounts/useCases/resetPesswordUser/ResetPesswordUserController";
import { SendForgotPasswordMailController } from "@modules/accounts/useCases/sendForgotPasswordMail/SendForgotPasswordMailController";
import { Router } from "express";

const passwordRoures = Router()

const sendForgotPasswordMailController = new SendForgotPasswordMailController()
const resetPesswordUserController = new ResetPesswordUserController()

passwordRoures.post("/forgot", sendForgotPasswordMailController.handle)
passwordRoures.post("/reset", resetPesswordUserController.handle)

export { passwordRoures }
