import { inject, injectable } from "tsyringe";

import { Category } from "@modules/cars/infra/typeorm/entities/category";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";

@injectable()
class ListCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoryesReposytories: ICategoriesRepository
    ) { }

    async execute(): Promise<Category[]> {
        const categories = await this.categoryesReposytories.list()
        return categories
    }
}

export { ListCategoryUseCase }