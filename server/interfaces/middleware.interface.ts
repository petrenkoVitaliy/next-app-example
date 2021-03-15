import { Sequelize } from 'sequelize/types';

export interface ControllerBag {
  db: Sequelize | undefined;
}
