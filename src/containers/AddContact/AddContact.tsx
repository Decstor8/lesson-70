import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../app/store';
import { addContact } from '../../store/contactsSlice';
import ContactForm from "../ContactForm/ContactForm";

const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
};

const AddEditContactPage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const contacts = useSelector((state: RootState) => state.contacts.contacts);

    const handleSaveContact = (formData: any) => {
        const newContact = { ...formData, id: generateId() };
        dispatch(addContact(newContact));
        navigate('/');
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div>
            <h2>Add/Edit Contact</h2>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>{contact.name}</li>
                ))}
            </ul>
            <ContactForm onSubmit={handleSaveContact} onCancel={handleCancel} />
        </div>
    );
};

export default AddEditContactPage;
