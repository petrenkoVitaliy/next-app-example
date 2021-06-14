import { DataTypes, Model, Sequelize } from 'sequelize';

import { ModelInstanceStatic, ModelInstanceType } from '@server/interfaces/model.interface';
import { ImageType } from '@server/constants/image';

export interface ImageGatewayAttributes {
  id: number;
  reference_id: number;
  image_type: ImageType;

  createdAt: string;
  updatedAt: string;
}

export type ImageGatewayModel = ModelInstanceType<ImageGatewayAttributes>;

const imageTypes = [ImageType.category, ImageType.item, ImageType.section];

const modelDefiner = (sequelize: Sequelize) => {
  return <ModelInstanceStatic<ImageGatewayModel>>sequelize.define<
    Model,
    Omit<ImageGatewayAttributes, 'createdAt' | 'updatedAt'>
  >(
    'ImageGatewayModel',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      reference_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      image_type: {
        type: DataTypes.ENUM(...imageTypes),
        allowNull: false,
      },
    },
    {
      tableName: 'image_gateway',
      timestamps: true,
      hooks: {
        beforeFind: (...args: any) => {
          console.log(args);
        },
      },
    },
  );
};

const modelAssociationsDefiner = (sequelize: Sequelize) => {
  const { ImageGatewayModel, CategoryModel, ItemModel, SectionModel, ImageModel } =
    sequelize.models;

  ImageGatewayModel.belongsTo(CategoryModel, { foreignKey: 'reference_id', constraints: false });
  ImageGatewayModel.belongsTo(ItemModel, { foreignKey: 'reference_id', constraints: false });
  ImageGatewayModel.belongsTo(SectionModel, { foreignKey: 'reference_id', constraints: false });

  ImageGatewayModel.hasMany(ImageModel, { foreignKey: 'ImageGatewayId' });
};

export default { modelAssociationsDefiner, modelDefiner };
