import { getRepository, Repository } from "typeorm";
import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private repository: Repository<Specification>
    constructor() {
        this.repository = getRepository(Specification)
    }

    async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
        const specification = await this.repository.create({ description, name })
        await this.repository.save(specification)
    }
    async findByName(name: string): Promise<Specification> {
        const specificatoin: any = await this.repository.findOne({ name })
        return specificatoin
    }
}
export { SpecificationRepository }