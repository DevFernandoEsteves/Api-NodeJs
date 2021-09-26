import { getRepository, Repository } from "typeorm";
import { Specification } from "modules/cars/infra/typeorm/entities/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";

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