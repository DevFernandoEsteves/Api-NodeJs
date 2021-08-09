import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository"
import { CreateCategoryUseCase } from "./CreateCategiryUseCase"
import { CreateCategoryController } from "./CreateCategoryController"

const categoriesRepository = CategoriesRepository.getInstance()
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)
const createCategiryController = new CreateCategoryController(createCategoryUseCase)

export { createCategiryController }