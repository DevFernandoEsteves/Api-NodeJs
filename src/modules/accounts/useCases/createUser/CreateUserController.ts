import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateUserUseCare } from "@modules/accounts/useCases/createUser/CreateUserUseCase"

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password, driver_license }: any = request.body
        const createUserUseCare = container.resolve(CreateUserUseCare)
        await createUserUseCare.execute(
            { name, email, password, driver_license }
        )
        return response.status(201).send()
    }
}

export { CreateUserController }