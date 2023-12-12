import { Component } from 'react';
import { nanoid } from 'nanoid';

import { PhoneForm } from './PhoneForm/PhoneForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

import css from './App.module.css';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (!parsedContacts) return;

    this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleAddNewContact = formData => {
    const isNameExist = this.state.contacts.some(
      contact => contact.name.toLowerCase() === formData.name.toLowerCase()
    );

    if (isNameExist) {
      alert(`${formData.name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      ...formData,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilterChange = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  hendleDeleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  render() {
    const { filter } = this.state;
    const contactsToShow = this.getFilteredContacts();

    return (
      <div className={css.container}>
        <PhoneForm onSubmit={this.handleAddNewContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleFilterChange={this.handleFilterChange} />
        <Contacts
          contacts={contactsToShow}
          hendleDeleteContact={this.hendleDeleteContact}
        />
      </div>
    );
  }
}
