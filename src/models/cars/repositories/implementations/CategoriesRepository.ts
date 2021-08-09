import { Category } from "../../model/category";
import { ICreateCateegoryDTO, ICategoriesRepository } from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[]

    private static INSTANCE: CategoriesRepository

    private constructor() {
        this.categories = []
    }

    public static getInstance(): CategoriesRepository {
        if (!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository()
        }
        return CategoriesRepository.INSTANCE
    }

    findByName(name: string): Category {
        let category: any
        category = this.categories.find((category) => name === category.name)
        return category
    }

    list(): Category[] {
        return this.categories;
    }

    create({ name, description }: ICreateCateegoryDTO): void {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        })

        this.categories.push(category);
    }


    // findByName(name: string) {
    //     const category = this.categories.find(category => name === category.name)
    //     return category
    // }

}
export { CategoriesRepository }