import PropTypes from 'prop-types'
import css from './ContactList.module.css'


const ContactList = ({ contacts, onDeleteContact }) => (
    
    <ul className={css.phonebookContactList}>
        {contacts.map(({ id, name, number}) => (
            <li key={id} className={css.phonebookContactListItem}>
                <p>{name} : { number}</p>
                <button type="button"
                    onClick={() => onDeleteContact(id)}
                    className={css.phonebookContactListBtn}>
                Delete
                </button>
            </li>
            
            ))}
    </ul>
) 

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })),
    onDeleteContact: PropTypes.func.isRequired,
}

export default ContactList;