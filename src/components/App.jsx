import { Component } from 'react';
// import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
  };

  onContactFormSubmit = newContact => {
    console.log('newContact', newContact);
    this.setState({
      contacts: [...this.state.contacts, newContact],
    });
  };

  render() {
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.onContactFormSubmit} />

          <h2>Contacts</h2>
          <ul>
            {this.state.contacts.map(contact => {
              const { id, name, number } = contact;
              return <li key={id}>{`${name}:${number}`}</li>;
            })}
          </ul>
          {/* <Filter /> */}
          {/* <ContactList /> */}
        </div>
      </>
    );
  }
}
