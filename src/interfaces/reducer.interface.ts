import { itemInterface } from './items.interface';
import { SectionInterface } from './sections.interface';

export interface CommonReducer {
  message: string;
}

export interface SectionsReducer {
  sections: SectionInterface[];
  items: itemInterface[];
}

export interface RootReducer {
  common: CommonReducer;
  sections: SectionsReducer;
}

export type InitialStoreState = Partial<RootReducer>;
