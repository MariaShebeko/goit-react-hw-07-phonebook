import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/contacts-selectors';
import ContactItem from './ContactItem';
import { LoaderOval } from '../Loader/Loader';
import s from './ContactList.module.css';

const ContactList = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const filter = useSelector(getFilter);

  return (
    <>
      {isFetching && <LoaderOval />}

      {contacts && (
        <>
          {
            <p className={s.total}>
              Total amount of contacts: {contacts.length}
            </p>
          }
          {
            <ul className={s.list}>
              {contacts
                .filter(contact =>
                  contact.name.toLowerCase().includes(filter.toLowerCase()),
                )
                .map(contact => (
                  <ContactItem key={contact.id} {...contact} />
                ))}
            </ul>
          }
        </>
      )}
    </>
  );
};

export default ContactList;
