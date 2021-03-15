import { createAsyncThunk } from '@reduxjs/toolkit';

import { getThunkPrefix } from '@src/utils/store';

import { actions } from './slice';

const thunkPrefix = getThunkPrefix('common');

// NOTE: just for example
export const setMessage = createAsyncThunk<{ message: string }, void>(
  thunkPrefix('setMessage'),
  async (_, thunkApi) => {
    const res = { message: new Date().toString() };

    thunkApi.dispatch(actions.updateMessage({ message: new Date().toString() }));

    return res;
  },
);
