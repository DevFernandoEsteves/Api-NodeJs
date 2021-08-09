import { Request, Response } from "express"
import { ListCategoryUseCase } from "./listCategoryUseCase"

class ListCategoryController {
    constructor(private listCateegoryUseCase: ListCategoryUseCase) { }
    handle(request: Request, response: Response) {
        const all = this.listCateegoryUseCase.execute()
        return response.json(all)
    }
}

export { ListCategoryController }