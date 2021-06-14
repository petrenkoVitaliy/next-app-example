import { DataTypes, Model, Sequelize } from 'sequelize';

import { ModelInstanceStatic, ModelInstanceType } from '@server/interfaces/model.interface';
import { ImageType } from '@server/constants/image';

export interface SectionAttributes {
  id: number;
  name: string;

  createdAt: string;
  updatedAt: string;
}

export type SectionModel = ModelInstanceType<SectionAttributes>;

const modelDefiner = (sequelize: Sequelize) => {
  return <ModelInstanceStatic<SectionModel>>sequelize.define<
    Model,
    Omit<SectionAttributes, 'createdAt' | 'updatedAt'>
  >(
    'SectionModel',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'sections',
      timestamps: true,
    },
  );
};

const modelAssociationsDefiner = (sequelize: Sequelize) => {
  const { SectionModel, CategoryModel, ImageGatewayModel, ImageModel } = sequelize.models;

  SectionModel.hasMany(CategoryModel, { foreignKey: 'SectionId' });
  SectionModel.belongsToMany(ImageModel, {
    through: {
      model: ImageGatewayModel,
      unique: false,
      scope: {
        image_type: ImageType.section,
      },
    },
    targetKey: 'ImageGatewayId',
    foreignKey: 'reference_id',
    otherKey: 'id',
    constraints: false,
  });
};

export default { modelAssociationsDefiner, modelDefiner };
