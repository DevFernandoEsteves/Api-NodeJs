import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./IimportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance()
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository)
const importCategoryController = new ImportCategoryController(importCategoryUseCase)

export { importCategoryController }