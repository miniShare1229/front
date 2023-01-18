import { createSlice } from '@reduxjs/toolkit';

// 편의성 위해 상태 임시 적용
const initialState = {
  isLogin: true,
  _userId: 'test',
  nickName: 'test',
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
