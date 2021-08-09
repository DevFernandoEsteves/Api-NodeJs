import { Category } from "../model/category";

interface ICreateSpecificationDTO {
    name: string,
    description: string
}

interface ISpecificationRepository {
    findByName(name: string): Category
    // list(): Category[],
    create({ name, description }: ICreateSpecificationDTO): void
}

export { ISpecificationRepository, ICreateSpecificationDTO }