import { useDeleteContactMutation } from '../../redux/contacts/contactsSlice';
import Icon from '../Icon/Icon';
import s from './ContactList.module.css';

export default function ContactItem({ id, name, number }) {
  const [deleteContact] = useDeleteContactMutation();
  return (
    <li className={s.item}>
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
        <Icon iconName="iconBin" width="18" height="18" className={s.iconBin} />
      </button>
    </li>
  );
}
