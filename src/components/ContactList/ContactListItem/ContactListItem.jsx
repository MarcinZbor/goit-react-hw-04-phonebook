import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <li key={id} className={styles.item}>
      <p className={styles.p}>
        {name}: {number}
      </p>
      <button
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;