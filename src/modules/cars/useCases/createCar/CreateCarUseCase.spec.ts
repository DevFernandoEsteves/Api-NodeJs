import { CarsRepositoryInMemory } from '@modules/cars/repositories/In-memory/CarsRepositoryInMemory'
import { AppError } from '@shared/errors/AppError'

import { CreateCarUseCase } from './CreateCarUseCase'

let createCarUseCase: CreateCarUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory

describe('Create Car', () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory()
        createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory)
    })

    it('shoud be able to create a new car', async () => {
        const car = await createCarUseCase.execute({
            name: 'Name Car',
            description: 'Description Car',
            daily_rate: 100,
            license_plate: 'ABC-1234',
            fine_amount: 60,
            brand: 'Brand',
            category_id: 'category',
        })

        expect(car).toHaveProperty('id')
    })

    it('shuld nod be able to create a car with exists license plate', async () => {
        await createCarUseCase.execute({
            name: 'Car 1',
            description: 'Description Car',
            daily_rate: 100,
            license_plate: 'ABD-1234',
            fine_amount: 60,
            brand: 'Brand',
            category_id: 'category',
        })
        await expect(
            createCarUseCase.execute({
                name: 'Car 2',
                description: 'Description Car',
                daily_rate: 100,
                license_plate: 'ABD-1234',
                fine_amount: 60,
                brand: 'Brand',
                category_id: 'category',
            })
        ).rejects.toEqual(new AppError("Car already exists"))
    })

    it('should not be able to create a car with available true by default', async () => {
        const car: any = await createCarUseCase.execute({
            name: 'Car Avaliable',
            description: 'Description Car',
            daily_rate: 100,
            license_plate: 'ABE-1234',
            fine_amount: 60,
            brand: 'Brand',
            category_id: 'category',
        })

        // console.log(car)

        expect(car.available).toBe(true)
    })
})
