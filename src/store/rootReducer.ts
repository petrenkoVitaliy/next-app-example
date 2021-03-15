import { RootReducer } from '@src/interfaces/store/reducer.interface';
import { combineReducers } from 'redux';

import { reducer as common } from './stores/common';

const rootReducer = combineReducers<RootReducer>({
  common,
});

export default rootReducer;
