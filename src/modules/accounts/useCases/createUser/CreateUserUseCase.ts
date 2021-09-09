import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersReposirory } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCare {
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersReposirory
    ) { }

    async execute({ name, email, password, driver_license }: ICreateUserDTO): Promise<void> {
        await this.userRepository.create({ name, email, password, driver_license })
    }
}

export { CreateUserUseCare }