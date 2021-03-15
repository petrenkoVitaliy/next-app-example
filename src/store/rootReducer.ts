import { RootReducer } from 'interfaces/store/reducer';
import { combineReducers } from 'redux';

import { reducer as common } from './stores/common';

const rootReducer = combineReducers<RootReducer>({
  common,
});

export default rootReducer;
