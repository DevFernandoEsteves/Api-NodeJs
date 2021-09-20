import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IUsersReposirory } from "../../repositories/IUsersRepository";

interface IRequest {
    email: string,
    password: string
}
interface IResponse {
    user: {
        name: string
        email: string
    },
    token: string
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersReposirory
    ) { }

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(email)
        if (!user) {
            throw new AppError("Email or password incorrect")
        }
        const passwordMatch = await compare(password, user.password)
        if (!passwordMatch) {
            throw new AppError("Email or password incorrect")
        }
        const token = sign({}, "aecef7ac23458cbd7aa2c8e4a0db2862", {
            subject: user.id,
            expiresIn: "1d" //expira em um dia
        })
        const tokenReturn: IResponse = {
            user: {
                name: user.name,
                email: user.email
            },
            token
        }
        return tokenReturn
    }
}

export { AuthenticateUserUseCase }