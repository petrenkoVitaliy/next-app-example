import { BuildOptions, Model } from 'sequelize/types';

export type ModelInstanceType<Attributes, Associations = Record<string, unknown>> =
  Model<Attributes> & Attributes & Associations;

export type ModelInstanceStatic<ModelInstance> = typeof Model & {
  new (values?: any, options?: BuildOptions): ModelInstance;
};
