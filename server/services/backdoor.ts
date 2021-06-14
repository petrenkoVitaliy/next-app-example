import { FilledControllerBag } from '@server/interfaces/controllerBag.interface';

export const getImagesTest = async (controllerBag: FilledControllerBag): Promise<any> => {
  const { db } = controllerBag;

  const sections = await db.ItemModel.findAll({
    include: [
      {
        model: db.ImageModel,
        through: {
          attributes: [],
        },
      },
    ],
    attributes: ['id'],
  });

  return { sections };
};
