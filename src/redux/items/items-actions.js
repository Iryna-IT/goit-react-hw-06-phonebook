import types from './items-types';

const addContact = newContact => ({
  type: types.ADD,
  payload: newContact,
});

const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

export default {
  addContact,
  deleteContact,
};
