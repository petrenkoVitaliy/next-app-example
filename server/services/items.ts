import { FilledControllerBag } from '@server/interfaces/controllerBag.interface';
import { ItemModel } from 'models/item';

export const getItem = async (
  controllerBag: FilledControllerBag,
  params: { id: number },
): Promise<ItemModel | null> => {
  const { db } = controllerBag;

  const item = await db.ItemModel.findOne({
    where: {
      id: params.id,
    },
    include: [
      {
        model: db.ImageModel,
        through: {
          attributes: [],
        },
      },
    ],
  });

  return item;
};

export const getItemsByCategoryService = async (
  controllerBag: FilledControllerBag,
  params: { categoryName: string },
): Promise<ItemModel[]> => {
  const { db } = controllerBag;

  const category = await db.CategoryModel.findOne({ where: { name: params.categoryName } });

  const items = category
    ? await db.ItemModel.findAll({
        where: { CategoryId: category.id },
        include: [
          {
            model: db.ImageModel,
            through: {
              attributes: [],
            },
          },
        ],
      })
    : [];

  return items;
};

export const getAllItems = async (controllerBag: FilledControllerBag): Promise<ItemModel[]> => {
  const { db } = controllerBag;

  const items = await db.ItemModel.findAll({
    include: db.ImageModel,
  });
  return items;
};
