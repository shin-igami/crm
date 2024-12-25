import React, { useState, useEffect } from "react";

import './Leads.css'
function Leads() {
  // Example data array
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/api/leads"); // Replace with your API URL
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const result = await response.json();
          setData(result);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

   
  
      fetchData();
    }, []); // Empty dependency array ensures the fetch runs only once on component mount.
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  
    const handleLeadClick = (id) => {
      alert(`Lead ID: ${id}`);
      // Add additional functionality here
    };



// LeadData component
const LeadData = ({ data,onClick }) => (
  <div className="LeadData"  onClick={() => onClick(data._id)}  >
    <div className="items ms-3"></div>
    <div className="items">{data.firstName}</div>
    <div className="items">{data.company}</div>
    <div className="items">{data.emailAddress}</div>
    <div className="items">{data.phone}</div>
    <div className="items">{data.leadSource}</div>
    <div className="items">{data.leadStatus}</div>
  </div>
);
  return (
    <div className='Leadsmainframe'>
      <div className='Leadstoolbar'>
 
      <div class="dropdown me-4 py-1 px-3">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<button type="button" class="btn btn-success py-1 px-3">Success</button>      
      </div>
      <div className='LeadsContent'>
       <div className="LeadLeftContent">
        left
       </div>
       <div className="LeadRightContent">
           <div className="headline">
            <div className="items"> </div>
            <div className="items">Lead Name </div>
            <div className="items">Company  </div>
            <div className="items">Email lorem</div>
            <div className="items">Phone</div>
            <div className="items">Lead Source</div>
            <div className="items">Leade Status</div>
           </div>
           <div>
    {data && data.map((lead) => (
      <LeadData  key={lead.id} data={lead} onClick={handleLeadClick} />
    ))}
  </div>
       </div>
      </div>

     

    </div>
  )
}

export default Leads
