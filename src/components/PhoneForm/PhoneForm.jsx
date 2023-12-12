import { Component } from 'react';

import css from './PhoneForm.module.css';

export class PhoneForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit({ ...this.state });

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <label>
            <span className={css.title}>Name</span>
            <input
              className={css.input}
              onChange={this.handleInputChange}
              value={this.state.name}
              name="name"
              type="text"
              required
              placeholder="Enter name"
            />
            <span className={css.title}>Number</span>
            <input
              className={css.input}
              onChange={this.handleInputChange}
              value={this.state.number}
              type="tel"
              name="number"
              required
              placeholder="Number"
              minLength="7"
              maxLength="12"
            />
          </label>
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
