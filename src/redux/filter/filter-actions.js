import { createAction } from '@reduxjs/toolkit';

const filterContacts = createAction('filterContacts', filter => ({
  payload: filter,
}));

export default filterContacts;
