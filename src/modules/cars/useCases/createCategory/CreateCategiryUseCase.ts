import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"

interface IRequest {
    name: string,
    description: string
}

class CreateCategoryUseCase {

    constructor(private categoriesRepository: ICategoriesRepository) { }

    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadyExist = await this.categoriesRepository.findByName(name)
        if (categoryAlreadyExist) {
            throw new Error('Categori already exist!')
        }
        this.categoriesRepository.create({ name, description })
    }
}

export { CreateCategoryUseCase }