import { Request, Response } from "express";
import { container } from "tsyringe";

import { ResetPesswordUserUseCase } from "./ResetPesswordUserUseCase";

class ResetPesswordUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { token } = request.query
        const { password } = request.body

        const resetPesswordUserUseCase = container.resolve(
            ResetPesswordUserUseCase
        )

        await resetPesswordUserUseCase.execute({ token: String(token), password })

        return response.send()
    }
}

export { ResetPesswordUserController }