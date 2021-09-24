import { container } from 'tsyringe';
import { UsersRepository } from '@modules/accounts/repositories/implementetions/UsersRepository';
import { IUsersReposirory } from '@modules/accounts/repositories/IUsersRepository';
import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository';
import { CategoriesRepository } from '@modules/cars/repositories/implementations/CategoriesRepository';
import { SpecificationRepository } from '@modules/cars/repositories/implementations/SpecificationRepository';
import { ISpecificationRepository } from '@modules/cars/repositories/ISpecificationRepository';

container.registerSingleton<ICategoriesRepository>('CategoriesRepository', CategoriesRepository);

container.registerSingleton<ISpecificationRepository>('SpecificationRepository', SpecificationRepository);

container.registerSingleton<IUsersReposirory>('UsersRepository', UsersRepository);
