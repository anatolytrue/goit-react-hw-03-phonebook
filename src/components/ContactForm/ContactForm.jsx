import React, { Component } from "react";
import PropTypes from 'prop-types'
import css from './ContactForm.module.css'

class ContactForm extends Component{
    state = {
        name: '',
        number: '',
    }

    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }

    handleChange = e => {

    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    }

    handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
    }

    reset = () => {
        this.setState({name: '', number: ''})
    }

    render() {
        return (
            <form className={css.phonebookForm} onSubmit={this.handleSubmit}>
            <label className={css.phonebookLabel} htmlFor={this.nameId}>
            Name
                <input
                className={css.phonebookInput}
                type="text"
                name="name"
                value={this.state.name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onChange={this.handleChange}
                required
                />
                <input
                type="tel"
                name='number'
                value={this.state.number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.handleChange}
                />
                
                <button
                        type='submit'
                        className={css.phonebookBtnAdd}>
                    Add contact
                </button>
            </label>
            </form>
        )
    }
}

export default ContactForm;