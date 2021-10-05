import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '@modules/cars/useCases/createCategory/CreateCategoryController';
import { ImportCategoryController } from '@modules/cars/useCases/importCategory/IimportCategoryController';
import { ListCategoryController } from '@modules/cars/useCases/listCategory/ListCategoryController';
import { ensureAuthenticated } from '../middleweres/ensureAuthenticated';
import { ensureAdmin } from '../middleweres/ensureAdmin';

const categoriesRoutes = Router();
const upload = multer({
    dest: "./tmp"
})

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoryController();

categoriesRoutes.post("/", ensureAuthenticated, ensureAdmin, createCategoryController.handle);

categoriesRoutes.get('/', ensureAuthenticated, ensureAdmin, listCategoryController.handle)

categoriesRoutes.post('/import', upload.single("file"), importCategoryController.handle)

export { categoriesRoutes };
