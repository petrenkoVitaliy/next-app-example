import { useMemo } from 'react';
import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';

type StoreState = ReturnType<typeof rootReducer>;
type InitialState = Partial<StoreState>;

const initStore = (initialState: InitialState) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
};

let store: Store<StoreState> | undefined;

export const initializeStore = (preloadedState: InitialState) => {
  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });

    store = undefined;
  }

  if (typeof window === 'undefined') {
    return _store;
  }

  if (!store) {
    store = _store;
  }

  return _store;
};

export const useStore = (initialState: InitialState) => {
  const store = useMemo(() => initializeStore(initialState), [initialState]);

  return store;
};
