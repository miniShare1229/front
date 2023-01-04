import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import test from './reducer';

export const store = configureStore({
  reducer: {
    test,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
