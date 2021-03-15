import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommonReducer } from 'interfaces/store/reducer';

const initialState: CommonReducer = { message: '' };

const commonSlice = createSlice({
  name: 'common',
  initialState: initialState,
  reducers: {
    updateMessage: (state, action: PayloadAction<{ message: string }>) => {
      state.message = action.payload.message;
    },
  },
});

const { actions, reducer } = commonSlice;

export { actions, reducer };
