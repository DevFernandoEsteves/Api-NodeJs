import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository"
import { CreateCategoryUseCase } from "./CreateCategiryUseCase"
import { CreateCategoryController } from "./CreateCategoryController"

export default (): CreateCategoryController => {

    const categoriesRepository = new CategoriesRepository()
    const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)
    const createCategiryController = new CreateCategoryController(createCategoryUseCase)

    return createCategiryController
}