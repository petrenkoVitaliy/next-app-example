import { SectionAttributes } from 'models/section';
import { CategoryInterface } from './categories.interface';

export type SectionInterface = SectionAttributes & { CategoryModels: CategoryInterface[] };
