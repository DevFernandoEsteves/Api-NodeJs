import { Category } from "../../entities/category";
import { ICategoriesRepository, ICreateCateegoryDTO } from "../ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoriesRepository {
    categories: Category[] = []
    async findByName(name: string): Promise<Category> {

        const category: any = this.categories.find((category) => category.name === name)
        return category
    }

    async list(): Promise<Category[]> {
        const all = this.categories
        return all
    }
    async create({ name, description }: ICreateCateegoryDTO): Promise<void> {
        const category = new Category()
        Object.assign(category, {
            name, description
        })
        this.categories.push(category)
    }
}
export { CategoriesRepositoryInMemory }