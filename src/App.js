import React from 'react';
import Container from './components/Container';
import Section from './components/Section';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <>
      <Toaster />
      <Container>
        <Section title={'Phonebook'}>
          <ContactForm />
        </Section>
        <Section title={'Contacts'}>
          <Filter />
          <ContactList />
        </Section>
      </Container>
    </>
  );
}
