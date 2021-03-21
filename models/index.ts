import { ModelInstanceStatic } from '@server/interfaces/model.interface';
import { Sequelize } from 'sequelize/types';
import categoryModelDefiner, { CategoryModel } from './category';
import itemModelDefiner, { ItemModel } from './item';
import sectionModelDefiner, { SectionModel } from './section';

export interface DatabaseMap {
  sequelize: Sequelize;
  CategoryModel: ModelInstanceStatic<CategoryModel>;
  ItemModel: ModelInstanceStatic<ItemModel>;
  SectionModel: ModelInstanceStatic<SectionModel>;
}

export const addModelDefiners = (sequelize: Sequelize): DatabaseMap => {
  const CategoryModel = categoryModelDefiner.modelDefiner(sequelize);
  const ItemModel = itemModelDefiner.modelDefiner(sequelize);
  const SectionModel = sectionModelDefiner.modelDefiner(sequelize);

  const sequelizeWithModels = {
    sequelize,
    CategoryModel,
    ItemModel,
    SectionModel,
  };

  addModelAssociations(sequelize);

  return sequelizeWithModels;
};

const associationDefiners = [categoryModelDefiner, itemModelDefiner].map(
  ({ modelAssociationsDefiner }) => modelAssociationsDefiner,
);

const addModelAssociations = (sequelize: Sequelize) => {
  for (const associationDefiner of associationDefiners) {
    associationDefiner(sequelize);
  }
};
