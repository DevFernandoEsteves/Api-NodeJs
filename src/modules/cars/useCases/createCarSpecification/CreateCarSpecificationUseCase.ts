import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { ISpecificationRepository } from '@modules/cars/repositories/ISpecificationRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
	car_id: string;
	specifications_id: string[];
}

class CreateCarSpecificationUseCase {
	constructor(private carsRepository: ICarsRepository, private specificationRepository: ISpecificationRepository) {}
	async execute({ car_id, specifications_id }: IRequest): Promise<void> {
		const carExists: any = await this.carsRepository.findById(car_id);
		if (!carExists) {
			throw new AppError('Car does not exists!');
		}
		const specification = await this.specificationRepository.findByIds(specifications_id);
		carExists.specifications = specification;
		await this.carsRepository.create(carExists);
	}
}

export { CreateCarSpecificationUseCase };
