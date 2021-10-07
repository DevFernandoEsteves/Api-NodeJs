import { CarsRepositoryInMemory } from '@modules/cars/repositories/In-memory/CarsRepositoryInMemory';
import { SpecificationRepositoryInMemory } from '@modules/cars/repositories/In-memory/SpecificationRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';
import { CreateCarSpecificationUseCase } from './CreateCarSpecificationUseCase';

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationRepositoryInMemory: SpecificationRepositoryInMemory;

describe('Create Car Specification', () => {
	beforeEach(() => {
		carsRepositoryInMemory = new CarsRepositoryInMemory();
		specificationRepositoryInMemory = new SpecificationRepositoryInMemory();
		createCarSpecificationUseCase = new CreateCarSpecificationUseCase(carsRepositoryInMemory, specificationRepositoryInMemory);
	});

	it('shold be able to add a new specification to the car', async () => {
		expect(async () => {
			const car_id = '1234';
			const specifications_id: any = ['54321'];

			await createCarSpecificationUseCase.execute({ car_id, specifications_id });
		}).rejects.toBeInstanceOf(AppError);
	});

	it('shold be able to add a new specification to the car', async () => {
		const car = await carsRepositoryInMemory.create({
			name: 'Name Car',
			description: 'Description Car',
			daily_rate: 100,
			license_plate: 'ABC-1234',
			fine_amount: 60,
			brand: 'Brand',
			category_id: 'category',
		});
		const specifications_id: any = ['54321'];

		await createCarSpecificationUseCase.execute({ car_id: car.id, specifications_id });
	});
});
