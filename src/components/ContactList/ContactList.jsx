import css from './contactList.module.css';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <li key={id} className={css.contactsItem}>
            <p>{`${name} : ${number}`}</p>
            <button
              onClick={() => {
                onDelete(id);
              }}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
