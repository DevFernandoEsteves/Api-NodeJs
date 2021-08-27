import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/category";
import { ICreateCateegoryDTO, ICategoriesRepository } from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category);
    }
    async create({ name, description }: ICreateCateegoryDTO): Promise<void> {
        const category = this.repository.create({
            name,
            description,
        });

        await this.repository.save(category);
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    }

    async findByName(name: string): Promise<Category> {
        const category: any = await this.repository.findOne({ name });
        return category;
    }
}

export { CategoriesRepository };