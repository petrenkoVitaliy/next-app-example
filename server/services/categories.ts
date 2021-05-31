import { FilledControllerBag } from '@server/interfaces/controllerBag.interface';
import { CategoryModel } from 'models/category';

export const getCategoriesService = async (
  controllerBag: FilledControllerBag,
): Promise<CategoryModel[]> => {
  const { db } = controllerBag;

  const categories = await db.CategoryModel.findAll({
    include: db.ImageModel,
    order: [['id', 'ASC']],
  });

  return categories;
};
