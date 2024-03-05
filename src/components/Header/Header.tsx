import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
            <h1 className='text-center fs-1 mb-3'>Phone Book</h1>
            <Link className='text-center link-main' to="/add">Add new contact</Link>
        </header>
    );
};

export default Header;
