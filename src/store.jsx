import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import user from './userSlice';
import { dummyApi } from './api';

export const store = configureStore({
  reducer: {
    user,
    [dummyApi.reducerPath]: dummyApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, dummyApi.middleware),
});
