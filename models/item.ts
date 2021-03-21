import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';
import { CategoryModel } from './category';

export interface ItemAttributes {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  CategoryId: number | null;
}

export interface ItemModel extends Model<ItemAttributes>, ItemAttributes {
  CategoryModel?: CategoryModel;
}

export type ItemStatic = typeof Model & {
  new (values?: any, options?: BuildOptions): ItemModel;
};

const modelDefiner = (sequelize: Sequelize) => {
  return <ItemStatic>sequelize.define(
    'ItemModel',
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
      CategoryId: {
        type: DataTypes.NUMBER,
        references: {
          model: 'CategoryModel',
          key: 'id',
        },
      },
    },
    {
      tableName: 'Items',
      timestamps: true,
    },
  );
};

const modelAssociationsDefiner = (sequelize: Sequelize) => {
  const { ItemModel, CategoryModel } = sequelize.models;

  ItemModel.belongsTo(CategoryModel, { foreignKey: 'CategoryId' });
};

export default { modelAssociationsDefiner, modelDefiner };
