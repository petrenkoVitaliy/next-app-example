import { Sequelize } from 'sequelize/types';
import categoryModelDefiner, { CategoryStatic } from './category';
import itemModelDefiner, { ItemStatic } from './item';

export interface DatabaseMap {
  sequelize: Sequelize;
  CategoryModel: CategoryStatic;
  ItemModel: ItemStatic;
}

export const addModelDefiners = (sequelize: Sequelize): DatabaseMap => {
  const CategoryModel = categoryModelDefiner.modelDefiner(sequelize);
  const ItemModel = itemModelDefiner.modelDefiner(sequelize);

  const sequelizeWithModels = {
    sequelize,
    CategoryModel,
    ItemModel,
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
