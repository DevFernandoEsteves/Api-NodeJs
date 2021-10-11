import { Specification } from '@modules/cars/infra/typeorm/entities/Specification';
import { ICreateSpecificationDTO, ISpecificationRepository } from '@modules/cars/repositories/ISpecificationRepository';



class SpecificationRepositoryInMemory implements ISpecificationRepository {
    specifications: Specification[] = [];

    async create({
        name,
        description,
    }: ICreateSpecificationDTO): Promise<Specification> {
        const specification = new Specification();
        Object.assign(specification, {
            name,
            description,
        });
        this.specifications.push(specification);
        return specification;
    }
    async findByName(name: string): Promise<Specification> {
        return this.specifications.find(spec => spec.name === name);
    }
    async list(): Promise<Specification[]> {
        return this.specifications;
    }
    async findByIds(ids: string[]): Promise<Specification[]> {
        const allSpecificaton = this.specifications.filter(specification =>
            ids.includes(specification.id),
        );
        return allSpecificaton;
    }
}
export { SpecificationRepositoryInMemory };