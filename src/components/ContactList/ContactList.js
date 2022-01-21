import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contacts/contactsSlice';
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import s from './ContactList.module.css';
import Icon from '../Icon/Icon';
import { LoaderOval } from '../Loader/Loader';

const ContactList = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filter = useSelector(getFilter);
  // console.log('getFilter', getFilter);
  // console.log('filter', filter);

  return (
    <>
      {isFetching && <LoaderOval />}
      {contacts && (
        <ul className={s.list}>
          <p className={s.total}>Total amount of contacts: {contacts.length}</p>
          {contacts
            .filter(contact =>
              contact.name.toLowerCase().includes(filter.toLowerCase()),
            )
            .map(({ id, name, number }) => (
              <li key={id} className={s.item}>
                <p className={s.text}>
                  <Icon
                    iconName="iconAddressBook"
                    width="18"
                    height="18"
                    className={s.iconAddressBook}
                  />
                  {name}: {number}
                </p>
                <button onClick={() => deleteContact(id)} className={s.button}>
                  Delete
                  <Icon
                    iconName="iconBin"
                    width="18"
                    height="18"
                    className={s.iconBin}
                  />
                </button>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
