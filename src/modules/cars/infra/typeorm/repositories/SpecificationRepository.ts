import { getRepository, Repository } from "typeorm";
import { Specification } from "modules/cars/infra/typeorm/entities/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private repository: Repository<Specification>
    constructor() {
        this.repository = getRepository(Specification)
    }

    async create({ description, name }: ICreateSpecificationDTO): Promise<Specification> {
        const specification = await this.repository.create({ description, name })
        await this.repository.save(specification)
        return specification
    }
    async findByName(name: string): Promise<Specification> {
        const specificatoin: any = await this.repository.findOne({ name })
        return specificatoin
    }

    async findByIds(ids: string[]): Promise<Specification[]> {
        const specification = await this.repository.findByIds(ids)
        return specification
    }
}
export { SpecificationRepository }