import React, { Component } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChenge = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    const { name, number } = this.state;

    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    this.props.onSubmit(newContact);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  nameId = nanoid();
  numberId = nanoid();

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label htmlFor={this.nameId}>name</label>
        <input
          id={this.nameId}
          className={css.input}
          type="text"
          name="name"
          value={this.state.name}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChenge}
        />
        <label htmlFor={this.numberId}>number</label>
        <input
          id={this.numberId}
          className={css.input}
          type="tel"
          name="number"
          value={this.state.number}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChenge}
        />
        <button type="submit" className={css.addButton}>
          Add contact
        </button>
      </form>
    );
  }
}
