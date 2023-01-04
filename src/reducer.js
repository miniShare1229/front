import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 };

const slice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    plus(state) {
      state.value++;
    },
    minus(state) {
      state.value--;
    },
    increment(state, action) {
      state.value += action.payload;
    },
  },
});

export const { plus, minus, increment } = slice.actions;
export default slice.reducer;
