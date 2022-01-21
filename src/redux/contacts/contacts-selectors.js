export const getItems = state => state.items;
export const getFilter = state => state.filter;

export const getVisibleContacts = state => {
  const { items, filter } = state;
  const normalizedFilter = filter.toLowerCase();
  return items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};
