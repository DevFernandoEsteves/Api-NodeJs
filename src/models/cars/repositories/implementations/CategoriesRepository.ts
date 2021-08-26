import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/category";
import { ICreateCateegoryDTO, ICategoriesRepository } from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {

    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category)
    }

    async findByName(name: string): Promise<Category> {
        let category: any
        category = await this.repository.findOne(name)
        return category
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find()
        return categories
    }

    async create({ name, description }: ICreateCateegoryDTO): Promise<void> {
        const category = this.repository.create({
            description, name
        })
        await this.repository.save(category)
    }
}
export { CategoriesRepository }