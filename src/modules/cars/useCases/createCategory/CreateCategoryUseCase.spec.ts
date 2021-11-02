import { AppError } from "@shared/errors/AppError"
import { CategoriesRepositoryInMemory } from "@modules/cars/repositories/In-memory/CategoriesRepositoryInMemory"

import { CreateCategoryUseCase } from "@modules/cars/useCases/createCategory/CreateCategoryUseCase"

let createCategoryUseCase: CreateCategoryUseCase
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory

describe("Create Category", () => {
    beforeEach(() => {
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory()
        createCategoryUseCase = new CreateCategoryUseCase(
            categoriesRepositoryInMemory
        )
    })

    it("should be able to create new category", async () => {
        const category = {
            name: "Category Test",
            description: " Category description Test"
        }

        await createCategoryUseCase.execute({
            name: category.name,
            description: category.description
        })

        const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name)

        // console.log(categoryCreated)

        expect(categoryCreated).toHaveProperty("id")
    })

    it("should not be able to create new category with name exists", async () => {
        const category = {
            name: "Category Test",
            description: " Category description Test"
        }

        await createCategoryUseCase.execute({
            name: category.name,
            description: category.description
        })

        await expect(
            createCategoryUseCase.execute({
                name: category.name,
                description: category.description
            })
        ).rejects.toEqual(new AppError("Category already exist!"))
    })
})