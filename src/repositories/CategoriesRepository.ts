import { Category } from "../model/category";

interface ICreateCateegoryDTO {
    name: string,
    description: string
}

class CategoriesRepository {
    private categories: Category[]

    constructor() {
        this.categories = []
    }

    create({ description, name }: ICreateCateegoryDTO) {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        })

        this.categories.push(category);

    }
}
export { CategoriesRepository }