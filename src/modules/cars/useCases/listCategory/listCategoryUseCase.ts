import { Category } from "../../entities/category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoryUseCase {
    constructor(private categoryesReposytories: ICategoriesRepository) { }

    async execute(): Promise<Category[]> {
        const categories = await this.categoryesReposytories.list()
        return categories
    }
}

export { ListCategoryUseCase }