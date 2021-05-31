import { createSelector } from 'reselect';
import { RootReducer, SectionsReducer } from '@src/interfaces/reducer.interface';

const rootCommonSelector = (state: RootReducer): SectionsReducer => state.sections;

export const getSections = () =>
  createSelector(rootCommonSelector, (commonState) => commonState.sections);

export const getItems = () =>
  createSelector(rootCommonSelector, (commonState) => commonState.items);

export const getItem = () => createSelector(rootCommonSelector, (commonState) => commonState.item);
