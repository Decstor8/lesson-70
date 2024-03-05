import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import ContactModal from '../ContactModal/ContactModal';
import { Contact } from '../../types';

const ContactDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    // думаю ошибка где-то тут.. успеть вернуться
    const contact = useSelector((state: RootState) => {
        if (id) {
            return state.contacts.contacts.find((contact: Contact) => contact.id === parseInt(id));
        }
        return null;
    });

    return (
        <div>
            <h2>Contact Details</h2>
            {contact && <ContactModal contact={contact} editMode={false} onClose={() => {}} onSave={() => {}} />}
        </div>
    );
};

export default ContactDetailsPage;
