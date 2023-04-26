import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList = ({ contact, onDeleteContact }) => {
  return (
    <>
      {!contact.length ? (
        <p>
          <b>No contacts</b>
        </p>
      ) : (
        <ul>
          {contact.map(({ id, name, number }) => (
            <ContactItem
              key={id}
              contactId={id}
              contactName={name}
              contactNumber={number}
              onDeleteContact={onDeleteContact}
            />
          ))}
        </ul>
      )}
    </>
  );
};

ContactList.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
