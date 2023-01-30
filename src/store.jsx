import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import logger from 'redux-logger';
import user from './userSlice';
import { dummyApi, api } from './api';

export const store = configureStore({
  reducer: {
    user,
    [dummyApi.reducerPath]: dummyApi.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, dummyApi.middleware, api.middleware),
});
setupListeners(store.dispatch);
