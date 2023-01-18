import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import logger from 'redux-logger';
import user from './userSlice';
import { dummyApi, signUpApi } from './api';

export const store = configureStore({
  reducer: {
    user,
    [dummyApi.reducerPath]: dummyApi.reducer,
    [signUpApi.reducerPath]: signUpApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, dummyApi.middleware, signUpApi.middleware),
});
setupListeners(store.dispatch);
