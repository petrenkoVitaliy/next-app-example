import { FilledControllerBag } from '@server/interfaces/controllerBag.interface';
import { SectionModel } from 'models/section';

export const getSectionsService = async (
  controllerBag: FilledControllerBag,
): Promise<SectionModel[]> => {
  const { db } = controllerBag;

  const sections = await db.SectionModel.findAll({
    include: db.CategoryModel,
  });

  return sections;
};
