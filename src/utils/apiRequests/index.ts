import { API_ROUTES } from './constant/apiRoutes';
import { Request } from './requestInstance';
import { validateResponse } from './validators';
import { CategoryInterface } from '@src/interfaces/categories.interface';
import { SectionInterface } from '@src/interfaces/sections.interface';
import { categoriesSchema } from './validators/categories.schema';
import { sectionsSchema } from './validators/sections.schema';
import { itemInterface } from '@src/interfaces/items.interface';
import { itemsSchema } from './validators/items.schema';

export const API = {
  getCategories: async () =>
    Request<CategoryInterface[]>(
      'GET',
      API_ROUTES.CATEGORIES,
      undefined,
      validateResponse(categoriesSchema),
    ),

  getItems: async (categoryName: string) =>
    Request<itemInterface[]>(
      'GET',
      API_ROUTES.ITEMS(categoryName),
      undefined,
      validateResponse(itemsSchema),
    ),

  getSections: async () => {
    return await Request<SectionInterface[]>(
      'GET',
      API_ROUTES.SECTIONS,
      undefined,
      validateResponse(sectionsSchema),
    );
  },
};
