import { Router } from 'express';
import multer from 'multer';

import { createCategiryController } from '../models/cars/useCases/createCategory';
import { importCategoryController } from '../models/cars/useCases/importCategory';
import { listCategoryController } from '../models/cars/useCases/listCategory';

const categoriesRoutes = Router();
const upload = multer({
    dest: "./tmp"
})

categoriesRoutes.post('/', (request, response) => {
    return createCategiryController.handle(request, response)
});

categoriesRoutes.get('/', (request, response) => {
    return listCategoryController.handle(request, response)
})

categoriesRoutes.post('/import', upload.single("file"), (request, response) => {
    return importCategoryController.handle(request, response)
})
export { categoriesRoutes };
