// import { Logger } from '@server/utils/logger';
import { DatabaseMap } from 'models';
import { CategoryModel } from 'models/category';

export const getAllCategories = async (dbMap: DatabaseMap): Promise<CategoryModel[]> => {
  const categories = await dbMap.CategoryModel.findAll({
    include: dbMap.ItemModel,
  });

  // Logger.log(JSON.parse(JSON.stringify(categories)));

  return categories;
};
