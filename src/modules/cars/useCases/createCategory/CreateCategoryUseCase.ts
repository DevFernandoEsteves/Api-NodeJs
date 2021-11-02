import { inject, injectable } from "tsyringe"

import { AppError } from "@shared/errors/AppError";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";


interface IRequest {
    name: string,
    description: string
}

@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) { }

    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlrightExist = await this.categoriesRepository.findByName(name)
        if (categoryAlrightExist) {
            throw new AppError("Category already exist!")
        }
        await this.categoriesRepository.create({ name, description })
    }

}

export { CreateCategoryUseCase }