import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './contacts/contacts-reducer';
import logger from 'redux-logger';
import { contactsApi } from './contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
    logger,
  ],
  devTools: process.env.NODE_ENV === 'development',
});
