import { Category } from "../entities/category";

interface ICreateCateegoryDTO {
    name: string,
    description: string
}

interface ICategoriesRepository {
    findByName(name: string): Promise<Category>
    list(): Promise<Category[]>,
    create({ name, description }: ICreateCateegoryDTO): Promise<void>
}

export { ICategoriesRepository, ICreateCateegoryDTO }