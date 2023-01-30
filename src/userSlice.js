import { createSlice } from '@reduxjs/toolkit';
import { asyncSignOut, asyncSignIn } from './api';

const initialState = {
  isLogin: false,
  loading: false,
  userInfo: {},
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSignIn: (state, payload) => {
      state.userInfo = payload;
    },
    setSignOut(state) {
      state = initialState;
    },
  },
  extraReducers: {
    [asyncSignOut.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [asyncSignOut.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.isLogin = false;
    },
    [asyncSignOut.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [asyncSignIn.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [asyncSignIn.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.isLogin = true;
      state.userInfo = payload;
    },
    [asyncSignIn.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { setSignIn, setSignOut } = userSlice.actions;

export default userSlice.reducer;
