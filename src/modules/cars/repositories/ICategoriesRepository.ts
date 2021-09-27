import { Category } from "@modules/cars/infra/typeorm/entities/category";

interface ICreateCategoryDTO {
    name: string,
    description: string
}

interface ICategoriesRepository {
    create({ name, description }: ICreateCategoryDTO): Promise<void>
    findByName(name: string): Promise<Category>
    list(): Promise<Category[]>,
}

export { ICategoriesRepository, ICreateCategoryDTO }