import React, { Component } from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={css.formContact} onSubmit={this.handleSubmit}>
        <label>
          <p className={css.text}>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            value={name}
          />
        </label>
        <label>
          <p>Number</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            value={number}
          />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
