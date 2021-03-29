import { DatabaseMap } from 'models';

export interface ControllerBag {
  db: DatabaseMap | undefined;
}

export type FilledControllerBag = ControllerBag & { db: DatabaseMap };
