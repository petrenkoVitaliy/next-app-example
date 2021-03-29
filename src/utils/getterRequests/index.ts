import { validateModel } from '../validators';

import { itemsSchema } from '../validators/items.schema';
import { categoriesSchema } from '../validators/categories.schema';
import { getItemsByCategoryProvider } from '@server/controllers/items';
import { getCategoriesProvider } from '@server/controllers/categories';
import { getSectionsProvider } from '@server/controllers/sections';
import { sectionsSchema } from '../validators/sections.schema';

export const GETTERS = {
  getItems: async (categoryName: string) => {
    const res = await getItemsByCategoryProvider.getter({
      categoryName,
    });
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
