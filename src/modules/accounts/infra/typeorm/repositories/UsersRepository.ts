import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { IUsersReposirory } from "@modules/accounts/repositories/IUsersRepository";

class UsersRepository implements IUsersReposirory {
    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User)
    }
    async create({ name, email, password, driver_license, avatar, id }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({ name, email, password, driver_license, avatar, id })
        await this.repository.save(user)
    }

    async findByEmail(email: string): Promise<User> {
        const user: any = await this.repository.findOne({ email })
        return user
    }

    async findById(id: string): Promise<User> {
        const user: any = await this.repository.findOne(id)
        return user
    }

}

export { UsersRepository }