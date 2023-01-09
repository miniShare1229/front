import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import test from './reducer';
import user from './userSlice';

export const store = configureStore({
  reducer: {
    test,
    user,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
