import { createReducer } from '@reduxjs/toolkit';
import filterActions from './filter-actions';

const filter = createReducer('', {
  [filterActions.filterContacts]: (state, { payload }) => state + payload,
});

export default filter;
