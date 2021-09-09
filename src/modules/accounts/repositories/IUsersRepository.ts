import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

interface IUsersReposirory {
    create(data: ICreateUserDTO): Promise<void>
}

export { IUsersReposirory }