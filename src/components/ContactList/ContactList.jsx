import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.list}>
      {contacts.length !== 0 &&
        contacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
          />
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;