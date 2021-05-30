import { ItemInterface } from './items.interface';
import { SectionInterface } from './sections.interface';
import { WindowSize } from './windowSize.interface';

export interface CommonReducer {
  message: string;
  windowSize: WindowSize | null;
}

export interface SectionsReducer {
  sections: SectionInterface[];
  items: ItemInterface[];
}

export interface RootReducer {
  common: CommonReducer;
  sections: SectionsReducer;
}

export type InitialStoreState = Partial<RootReducer>;
