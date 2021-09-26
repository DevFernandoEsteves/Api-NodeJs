import { Category } from "@modules/cars/infra/typeorm/entities/category";

interface ICreateCateegoryDTO {
    name: string,
    description: string
}

interface ICategoriesRepository {
    create({ name, description }: ICreateCateegoryDTO): Promise<void>
    findByName(name: string): Promise<Category>
    list(): Promise<Category[]>,
}

export { ICategoriesRepository, ICreateCateegoryDTO }