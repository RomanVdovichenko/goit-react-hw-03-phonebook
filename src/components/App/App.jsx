import React, { Component } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { nanoid } from 'nanoid/non-secure';
import { ContactList } from '../ContactList/ContactList';
import css from './App.module.css';
import { Filter } from '../Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  formSubmitHandle = data => {
    if (this.state.contacts.some(({ name }) => name === data.name)) {
      alert(`${data.name} is already contacts`);
      return;
    }
    const contactid = nanoid();
    data.id = contactid;
    this.setState(({ contacts }) => {
      return { contacts: [data, ...contacts] };
    });
  };

  chengeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleContact = () => {
    const { filter, contacts } = this.state;
    const normalizedContact = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedContact)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContact = this.getVisibleContact();

    return (
      <div className={css.div}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandle} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.chengeFilter} />
        <ContactList
          contact={visibleContact}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
