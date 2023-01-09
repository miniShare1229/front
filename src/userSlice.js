import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  _userId: '',
  nickName: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn(state, action) {
      // 로그인 api에 맞춰 적용예정
      state._userId = action.payload;
      state.nickName = action.payload;
    },
  },
});

export const { signIn } = userSlice.actions;

export default userSlice.reducer;
