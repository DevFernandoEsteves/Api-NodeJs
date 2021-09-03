import { inject, injectable } from "tsyringe";

import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string,
    description: string
}

@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationRepository")
        private specificationsRepository: ISpecificationRepository
    ) {

    }
    async execute({ name, description }: IRequest): Promise<void> {
        const specificationAlLreadyExist = await this.specificationsRepository.findByName(name)
        if (specificationAlLreadyExist) {
            throw new Error("Specification already exists!")
        }
        await this.specificationsRepository.create({ name, description })
    }
}
export { CreateSpecificationUseCase }