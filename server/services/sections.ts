import { FilledControllerBag } from '@server/interfaces/controllerBag.interface';
import { SectionModel } from 'models/section';

export const getSectionsService = async (
  controllerBag: FilledControllerBag,
): Promise<SectionModel[]> => {
  const { db } = controllerBag;

  const sections = await db.SectionModel.findAll({
    include: [
      {
        model: db.CategoryModel,
        include: [
          {
            model: db.ImageModel,
            through: {
              attributes: [],
            },
          },
        ],
      },
      {
        model: db.ImageModel,
        through: {
          attributes: [],
        },
      },
    ],
  });

  return sections;
};
