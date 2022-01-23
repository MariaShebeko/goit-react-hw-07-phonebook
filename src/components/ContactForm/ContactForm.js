import { useState } from 'react';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/contactsSlice';
import Icon from '../Icon/Icon';
import { warningNotification, successNotification } from 'helpers/notification';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const { data: contacts } = useFetchContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    if (event.target.name === 'name') setName(event.target.value);
    if (event.target.name === 'number') setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const similarName = contacts.find(contact => contact.name === name);
    const similarNumber = contacts.find(contact => contact.number === number);
    if (similarName) {
      return warningNotification('This name is allready exist');
    } else if (similarNumber) {
      return warningNotification('This number is allready exist');
    }
    addContact({ name, number });
    successNotification('Contact added');
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={s.inputWrapper}>
        <input
          type="text"
          id="nameInputId"
          className={s.input}
          value={name}
          onChange={handleChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={s.label} htmlFor="nameInputId">
          Name
        </label>
      </div>
      <div className={s.inputWrapper}>
        <input
          type="tel"
          id="numberInputId"
          className={s.input}
          value={number}
          onChange={handleChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <label className={s.label} htmlFor="numberInputId">
          Number
        </label>
      </div>
      <button className={s.button} type="submit" disabled={isLoading}>
        {isLoading ? 'Adding...' : 'Add contact'}
        <Icon
          iconName="iconUserPlus"
          width="18"
          height="18"
          className={s.iconUserPlus}
        />
      </button>
    </form>
  );
}
