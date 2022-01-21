import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const initialState = {
  contacts: {
    filter: '',
  },
};

export const filterReducer = createReducer(initialState.contacts.filter, {
  [actions.changeFilter]: (_, { payload }) => payload,
});
