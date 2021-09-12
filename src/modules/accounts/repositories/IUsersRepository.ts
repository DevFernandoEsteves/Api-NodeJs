import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUsersReposirory {
    create(data: ICreateUserDTO): Promise<void>
    findByEmail(email: string): Promise<User>
}

export { IUsersReposirory }