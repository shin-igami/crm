import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Leads from './Components/Leads/Leads';
import LeadForms from './Components/LeadForms/LeadForms';
import LeadDetails from './Components/LeadDetails/LeadDetails';

function App() {
  return (
    <>

    <Navbar/>
    <Leads/>
    <LeadForms/>
    <LeadDetails/>
    </>
  );
}

export default App;
