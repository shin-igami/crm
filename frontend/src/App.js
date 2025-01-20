import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar.js';
import Leads from './Components/Leads/Leads.js';
import LeadForms from './Components/LeadForms/LeadForms.js';
import LeadDetails from './Components/LeadDetails/LeadDetails.js';

import './App.css';
import ContactDBMSlist from './Components/ContactDBMS/ContactDBMSlist.js';
import ContactDBMSForm from './Components/ContactDBMS/ContactDBMSForm.js';
import ContactDBMSDeatails from './Components/ContactDBMS/ContactDBMSDeatails.js';

function App() {
  return (
    <Router>
      <>
        {/* Navbar will always be visible */}
        <Navbar />
        {/* <ContactDBMSForm/> */}
       
        {/* Define Routes for different components */}
        <Routes>
          <Route path="/" element={<Leads />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/leads/add" element={<LeadForms />} />
          <Route path="/leads/details/:id" element={<LeadDetails />} />
          <Route path="/contact" element={<ContactDBMSlist/>} />
          <Route path="/contact/add" element={<ContactDBMSForm/>} />
          <Route path="/contact/details/:id" element={ <ContactDBMSDeatails/>} />

        </Routes>
      </>
    </Router>
  );
}

export default App;
