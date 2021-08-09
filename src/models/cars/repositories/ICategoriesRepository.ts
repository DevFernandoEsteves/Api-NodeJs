import { Category } from "../model/category";

interface ICreateCateegoryDTO {
    name: string,
    description: string
}

interface ICategoriesRepository {
    findByName(name: string): Category
    list(): Category[],
    create({ name, description }: ICreateCateegoryDTO): void
}

export { ICategoriesRepository, ICreateCateegoryDTO }