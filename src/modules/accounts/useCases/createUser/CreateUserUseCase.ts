import { hash } from "bcryptjs";
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
        const userAlreadyExists = await this.userRepository.findByEmail(email)
        if (userAlreadyExists) {
            throw new Error("User already exists")
        }
        const passwordHash = await hash(password, 8)
        await this.userRepository.create({ name, email, password: passwordHash, driver_license })
    }
}

export { CreateUserUseCare }