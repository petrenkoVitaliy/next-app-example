import { DataTypes, Sequelize } from 'sequelize';

import { ModelInstanceStatic, ModelInstanceType } from '@server/interfaces/model.interface';

export interface SectionAttributes {
  id: number;
  name: string;

  createdAt: string;
  updatedAt: string;
}

export type SectionModel = ModelInstanceType<SectionAttributes>;

const modelDefiner = (sequelize: Sequelize) => {
  return <ModelInstanceStatic<SectionModel>>sequelize.define(
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
  const { SectionModel, CategoryModel } = sequelize.models;

  SectionModel.hasMany(CategoryModel, { foreignKey: 'SectionId' });
};

export default { modelAssociationsDefiner, modelDefiner };
