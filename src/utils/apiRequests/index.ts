import { CategoryAttributes } from 'models/category';
import { API_ROUTES } from './constant/apiRoutes';
import { Request } from './requestInstance';

export const API = {
  getCategories: async () => Request<CategoryAttributes[]>('GET', API_ROUTES.CATEGORIES),
};
