import { ModelInstanceStatic } from '@server/interfaces/model.interface';
import { Sequelize } from 'sequelize/types';
import categoryModelDefiner, { CategoryModel } from './category';
import itemModelDefiner, { ItemModel } from './item';
import sectionModelDefiner, { SectionModel } from './section';
import imageModelDefiner, { ImageModel } from './image';

interface ModelsMap {
  CategoryModel: ModelInstanceStatic<CategoryModel>;
  ItemModel: ModelInstanceStatic<ItemModel>;
  SectionModel: ModelInstanceStatic<SectionModel>;
  ImageModel: ModelInstanceStatic<ImageModel>;
}

type SequelizeWithModels = Sequelize & { models: ModelsMap };

export interface DatabaseMap extends ModelsMap {
  sequelize: SequelizeWithModels;
}

const associationDefiners = [categoryModelDefiner, itemModelDefiner, sectionModelDefiner].map(
  ({ modelAssociationsDefiner }) => modelAssociationsDefiner,
);

export const addModelDefiners = (sequelize: Sequelize): DatabaseMap => {
  const CategoryModel = categoryModelDefiner.modelDefiner(sequelize);
  const ItemModel = itemModelDefiner.modelDefiner(sequelize);
  const SectionModel = sectionModelDefiner.modelDefiner(sequelize);
  const ImageModel = imageModelDefiner.modelDefiner(sequelize);

  const sequelizeWithModels = sequelize as SequelizeWithModels;
  const sequelizeModelsMap = {
    sequelize: sequelizeWithModels,
    CategoryModel,
    ItemModel,
    SectionModel,
    ImageModel,
  };

  addModelAssociations(sequelize);

  return sequelizeModelsMap;
};

const addModelAssociations = (sequelize: Sequelize) => {
  for (const associationDefiner of associationDefiners) {
    associationDefiner(sequelize);
  }
};
