const isUnique = (contacts, searchName) => {
  if (
    contacts.find(({ name }) => name.toUpperCase() === searchName.toUpperCase())
  ) {
    return false;
  } else {
    return true;
  }
};

export default isUnique;
