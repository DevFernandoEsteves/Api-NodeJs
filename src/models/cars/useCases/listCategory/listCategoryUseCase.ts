import { Category } from "../../model/category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoryUseCase {
    constructor(private categoryesReposytories: ICategoriesRepository) { }

    execute(): Category[] {
        const categories = this.categoryesReposytories.list()
        return categories
    }
}

export { ListCategoryUseCase }