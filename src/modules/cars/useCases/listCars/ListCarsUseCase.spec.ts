import { CarsRepositoryInMemory } from "@modules/cars/repositories/In-memory/CarsRepositoryInMemory"
import { ListCarsUseCase } from "./ListCarsUseCase";

let carsRepositoryInMemory: CarsRepositoryInMemory
let listCarsUseCase: ListCarsUseCase
describe("List Cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory()
        listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory)
    })

    it("should be able to list all available cars", async () => {
        const car = await carsRepositoryInMemory.create({
            name: 'Car1',
            description: 'Description Car',
            daily_rate: 110.0,
            license_plate: 'DEF-1234',
            fine_amount: 40,
            brand: 'Car_brand',
            category_id: 'category_id',
        })

        const cars = await listCarsUseCase.execute({})

        // console.log('cars:', cars)
        expect(cars).toEqual([car])
    })

    it("should be able to list all available cars by brand", async () => {
        const car = await carsRepositoryInMemory.create({
            name: 'Car2',
            description: 'Car Description',
            daily_rate: 110.0,
            license_plate: 'DEF-1234',
            fine_amount: 40,
            brand: 'Car_brand_teste',
            category_id: 'category_id',
        })

        const cars = await listCarsUseCase.execute({
            brand: 'Car_brand_teste'
        })

        // console.log('cars:', cars)
        expect(cars).toEqual([car])
    })

    it("should be able to list all available cars by name", async () => {
        const car = await carsRepositoryInMemory.create({
            name: 'Car3',
            description: 'Car Description',
            daily_rate: 110.0,
            license_plate: 'DEF-1235',
            fine_amount: 40,
            brand: 'Car_brand_teste',
            category_id: 'category_id',
        })

        const cars = await listCarsUseCase.execute({
            name: 'Car3'
        })

        // console.log('cars:', cars)
        expect(cars).toEqual([car])
    })

    it("should be able to list all available cars by category", async () => {
        const car = await carsRepositoryInMemory.create({
            name: 'Car3',
            description: 'Car Description',
            daily_rate: 110.0,
            license_plate: 'EFG-1235',
            fine_amount: 40,
            brand: 'Car_brand_teste',
            category_id: '12345',
        })

        const cars = await listCarsUseCase.execute({
            category_id: '12345'
        })

        // console.log('cars:', cars)
        expect(cars).toEqual([car])
    })
})