import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import {Contact, ContactFormData} from '../../types';

interface ContactModalProps {
    contact?: Contact;
    editMode?: boolean;
    onClose: () => void;
    onSave: (contact: Contact) => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ contact, editMode = false, onClose, onSave }) => {
    const handleSubmit = (formData: ContactFormData) => {

        const newContact: Contact = {
            id: contact?.id ? Number(contact.id) : 0,
            ...formData,
        };
        onSave(newContact);
        onClose();
    };

    const handleCancel = () => {
        onClose();
    };
    return (
        <div>
            <h2>{editMode ? 'Edit Contact' : 'Add New Contact'}</h2>
            <ContactForm contact={contact} onSubmit={handleSubmit} onCancel={handleCancel} />
        </div>
    );
};

export default ContactModal;
