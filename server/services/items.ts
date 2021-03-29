import { FilledControllerBag } from '@server/interfaces/controllerBag.interface';
import { ItemModel } from 'models/item';

export const getItemsByCategoryService = async (
  controllerBag: FilledControllerBag,
  params: { categoryName: string },
): Promise<ItemModel[]> => {
  const { db } = controllerBag;

  const category = await db.CategoryModel.findOne({ where: { name: params.categoryName } });

  const sections = category
    ? await db.ItemModel.findAll({
        where: { CategoryId: category.id },
      })
    : [];

  return sections;
};
