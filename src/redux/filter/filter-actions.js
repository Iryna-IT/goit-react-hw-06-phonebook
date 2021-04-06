import types from './filter-types';

const filterContact = filter => ({
  type: types.FILTER,
  payload: filter,
});

export default filterContact;
