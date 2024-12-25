import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar.js';
import Leads from './Components/Leads/Leads.js';
import LeadForms from './Components/LeadForms/LeadForms.js';
import LeadDetails from './Components/LeadDetails/LeadDetails.js';

import './App.css';

function App() {
  return (
    <Router>
      <>
        {/* Navbar will always be visible */}
        <Navbar />

        {/* Define Routes for different components */}
        <Routes>
          <Route path="/leads" element={<Leads />} />
          <Route path="/leads/add" element={<LeadForms />} />
          <Route path="/leads/details/:id" element={<LeadDetails />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
