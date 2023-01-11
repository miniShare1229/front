import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  _userId: '',
  nickName: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn(state, action) {
      // 로그인 api에 맞춰 적용예정
      state._userId = action.payload._userId;
      state.nickName = action.payload.nickName;
      state.isLogin = action.payload.isLogin;
    },
    signOut(state) {
      state = initialState;
    },
  },
});

export const { signIn } = userSlice.actions;

export default userSlice.reducer;
