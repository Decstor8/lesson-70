import React, { useState } from 'react';

interface ContactFormData {
    name: string;
    phoneNumber: string;
    email: string;
    photo: string;
}

interface ContactFormProps {
    contact?: ContactFormData;
    onSubmit: (formData: ContactFormData) => void;
    onCancel: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ contact, onSubmit, onCancel }) => {
    const [formData, setFormData] = useState<ContactFormData>(contact || {
        name: '',
        phoneNumber: '',
        email: '',
        photo: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form className='text-center' onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
            />
            <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                required
            />
            <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
            />
            <input
                type="text"
                name="photo"
                value={formData.photo}
                onChange={handleChange}
                placeholder="Photo URL"
                required
            />
            {formData.photo && (
                <div className="photo-preview">
                    <img src={formData.photo} alt="Photo Preview" />
                </div>
            )}
            <button type="submit">Save</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default ContactForm;
