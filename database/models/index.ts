import { ModelInstanceStatic } from '@server/interfaces/model.interface';
import { Sequelize } from 'sequelize/types';
import categoryModelDefiner, { CategoryModel } from './category';
import itemModelDefiner, { ItemModel } from './item';
import sectionModelDefiner, { SectionModel } from './section';
import imageGatewayModelDefiner, { ImageGatewayModel } from './image_gateway';
import ImageModelDefiner, { ImageModel } from './image';
import ItemTagModelDefiner, { ItemTagModel } from './item_tag';

interface ModelsMap {
  CategoryModel: ModelInstanceStatic<CategoryModel>;
  ItemModel: ModelInstanceStatic<ItemModel>;
  SectionModel: ModelInstanceStatic<SectionModel>;
  ImageGatewayModel: ModelInstanceStatic<ImageGatewayModel>;
  ImageModel: ModelInstanceStatic<ImageModel>;
  ItemTagModel: ModelInstanceStatic<ItemTagModel>;
}

type SequelizeWithModels = Sequelize & { models: ModelsMap };

export interface DatabaseMap extends ModelsMap {
  sequelize: SequelizeWithModels;
}

const associationDefiners = [
  categoryModelDefiner,
  itemModelDefiner,
  sectionModelDefiner,
  imageGatewayModelDefiner,
  ImageModelDefiner,
  ItemTagModelDefiner,
].map(({ modelAssociationsDefiner }) => modelAssociationsDefiner);

export const addModelDefiners = (sequelize: Sequelize): DatabaseMap => {
  const CategoryModel = categoryModelDefiner.modelDefiner(sequelize);
  const ItemModel = itemModelDefiner.modelDefiner(sequelize);
  const SectionModel = sectionModelDefiner.modelDefiner(sequelize);
  const ImageGatewayModel = imageGatewayModelDefiner.modelDefiner(sequelize);
  const ImageModel = ImageModelDefiner.modelDefiner(sequelize);
  const ItemTagModel = ItemTagModelDefiner.modelDefiner(sequelize);

  const sequelizeWithModels = sequelize as SequelizeWithModels;
  const sequelizeModelsMap = {
    sequelize: sequelizeWithModels,
    CategoryModel,
    ItemModel,
    SectionModel,
    ImageModel,
    ItemTagModel,
    ImageGatewayModel,
  };

  addModelAssociations(sequelize);

  return sequelizeModelsMap;
};

const addModelAssociations = (sequelize: Sequelize) => {
  for (const associationDefiner of associationDefiners) {
    associationDefiner(sequelize);
  }
};
