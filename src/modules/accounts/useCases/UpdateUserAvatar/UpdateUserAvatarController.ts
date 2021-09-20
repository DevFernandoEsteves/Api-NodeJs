import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserAvatarController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user

        const avatar_file: any = request.file?.filename

        const updateUserUseCase = container.resolve(UpdateUserUseCase)

        await updateUserUseCase.execute({ user_id: id, avatar_file })

        return response.status(204).send()
    }
}
export { UpdateUserAvatarController }