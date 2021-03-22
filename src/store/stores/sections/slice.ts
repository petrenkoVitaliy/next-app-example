import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SectionsReducer } from '@src/interfaces/reducer.interface';

const initialState: SectionsReducer = { sections: [], items: [] };

const sectionsSlice = createSlice({
  name: 'sections',
  initialState: initialState,
  reducers: {
    setSections: (state, action: PayloadAction<{ sections: any[] }>) => {
      state.sections = action.payload.sections;
    },
  },
});

const { actions, reducer } = sectionsSlice;

export { actions, reducer };
