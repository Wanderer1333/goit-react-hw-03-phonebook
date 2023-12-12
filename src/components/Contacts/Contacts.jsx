import css from './Contacts.module.css';

export const Contacts = ({ contacts, hendleDeleteContact }) => {
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id} className={css.item}>
            {contact.name}: {contact.number}
            <button
              className={css.button}
              onClick={() => hendleDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
