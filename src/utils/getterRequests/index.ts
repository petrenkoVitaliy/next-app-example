import { validateModel } from '../validators';

import { itemSchema, itemsSchema } from '../validators/items.schema';
import { categoriesSchema } from '../validators/categories.schema';
import {
  getAllItemsProvider,
  getItemByIdProvider,
  getItemsByCategoryProvider,
} from '@server/controllers/items';
import { getCategoriesProvider } from '@server/controllers/categories';
import { getSectionsProvider } from '@server/controllers/sections';
import { sectionsSchema } from '../validators/sections.schema';

export const GETTERS = {
  getItem: async (id: number) => {
    const res = await getItemByIdProvider.getter({
      id,
    });
    return validateModel(itemSchema)(res);
  },
  getItems: async (categoryName: string) => {
    const res = await getItemsByCategoryProvider.getter({
      categoryName,
    });
    return validateModel(itemsSchema)(res);
  },
  getAllItems: async () => {
    const res = await getAllItemsProvider.getter(undefined);
    return validateModel(itemsSchema)(res);
  },

  getCategories: async () => {
    const res = await getCategoriesProvider.getter(undefined);
    return validateModel(categoriesSchema)(res);
  },
  getSections: async () => {
    const res = await getSectionsProvider.getter(undefined);
    return validateModel(sectionsSchema)(res);
  },
};
