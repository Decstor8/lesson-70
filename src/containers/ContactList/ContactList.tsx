import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { Contact } from '../../types';
import {Link} from "react-router-dom";

const ContactList: React.FC = () => {
    const contacts = useSelector((state: RootState) => state.contacts.contacts);
    console.log(contacts)
    return (
        <div>
            <h2 className='text-center fw-bold fs-3'>Контакты</h2>
            <ul className='text-center fs-2'>
                {contacts.map((contact: Contact) => (
                    <Link to={`/contacts/${contact.id}`} key={contact.id}>{contact.name}</Link>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;
