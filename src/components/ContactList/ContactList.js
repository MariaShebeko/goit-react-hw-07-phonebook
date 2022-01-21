import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import s from './ContactList.module.css';
import Icon from '../Icon/Icon';
import contactsActions from '../../redux/contacts/contacts-actions';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactsActions.deleteContact(id));

  return (
    <ul className={s.list}>
      <p className={s.total}>Total amount of contacts: {contacts.length}</p>
      {contacts.map(({ id, name, number }) => (
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
          <button onClick={() => onDeleteContact(id)} className={s.button}>
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
  );
};

export default ContactList;
