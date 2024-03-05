import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import ContactList from './containers/ContactList/ContactList';
import ContactDetails from './containers/ContactDetails/ContactDetailes';
import AddEditContactPage from './containers/AddContact/AddContact';

const App: React.FC = () => {
  return (
      <>
      <Header />
      <Routes>
            <Route path="/" element={<ContactList />} />
            <Route path="/contacts/:id" element={<ContactDetails />} />
            <Route path="/add" element={<AddEditContactPage />} />
            <Route path="/edit/:id" element={<AddEditContactPage />} />
      </Routes>
      </>
  );
};

export default App;
