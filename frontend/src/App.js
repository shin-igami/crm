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
<<<<<<< HEAD
        {/* <ContactDBMSDeatails/> */}

=======
       
>>>>>>> 4493c1acc9d7db20e1cfb7dc3fc69c9840366739
        {/* Define Routes for different components */}
        <Routes>
          <Route path="/leads" element={<Leads />} />
          <Route path="/leads/add" element={<LeadForms />} />
          <Route path="/leads/details/:id" element={<LeadDetails />} />
          <Route path="/contact" element={<ContactDBMSlist/>} />
          <Route path="/contact/details/:id" element={ <ContactDBMSDeatails/>} />

        </Routes>
      </>
    </Router>
  );
}

export default App;
