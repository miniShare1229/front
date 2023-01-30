import { createSlice } from '@reduxjs/toolkit';
import { asyncSignOut, asyncSignIn } from './api';

const initialState = {
  isLogin: false,
  loading: false,
  nickName: null,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [asyncSignOut.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [asyncSignOut.fulfilled]: (state, { payload }) => {
      state = initialState;
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
      state.nickName = payload.nickName;
    },
    [asyncSignIn.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default userSlice.reducer;
