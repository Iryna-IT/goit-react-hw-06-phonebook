// import { combineReducers } from 'redux';
import types from './filter-types';

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER:
      return payload;

    default:
      return state;
  }
};

export default filter;
