import { Category } from '@src/interfaces/models/category.interface';
import { API_ROUTES } from './constant/apiRoutes';
import { Request } from './requestInstance';

export const API = {
  getCategories: async () => Request<Category[]>('GET', API_ROUTES.CATEGORIES),
};
