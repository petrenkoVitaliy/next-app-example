import { FilledControllerBag } from '@server/interfaces/controllerBag.interface';
import { CategoryModel } from 'database/models/category';

export const getCategoriesService = async (
  controllerBag: FilledControllerBag,
): Promise<CategoryModel[]> => {
  const { db } = controllerBag;

  const categories = await db.CategoryModel.findAll({
    include: [
      {
        model: db.ImageModel,
        through: {
          attributes: [],
        },
      },
    ],
    order: [['id', 'ASC']],
  });

  return categories;
};
