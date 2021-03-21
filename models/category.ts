import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface CategoryAttributes {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CategoryModel extends Model<CategoryAttributes>, CategoryAttributes {}

export type CategoryStatic = typeof Model & {
  new (values?: any, options?: BuildOptions): CategoryModel;
};

const modelDefiner = (sequelize: Sequelize) => {
  return <CategoryStatic>sequelize.define(
    'CategoryModel',
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
      tableName: 'Categories',
      timestamps: true,
    },
  );
};

const modelAssociationsDefiner = (sequelize: Sequelize) => {
  const { ItemModel, CategoryModel } = sequelize.models;

  CategoryModel.hasMany(ItemModel, { foreignKey: 'CategoryId' });
};

export default { modelAssociationsDefiner, modelDefiner };
