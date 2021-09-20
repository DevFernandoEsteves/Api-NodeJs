import { inject, injectable } from "tsyringe";
import { IUsersReposirory } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
    avatar_file: string;
}

@injectable()
class UpdateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersReposirory
    ) { }
    async execute({ user_id, avatar_file }: IRequest): Promise<void> {
        const user = await this.userRepository.findById(user_id)

        user.avatar = avatar_file

        await this.userRepository.create(user)
    }
}

export { UpdateUserUseCase }