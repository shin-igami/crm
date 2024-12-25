import React from 'react'
import './Leads.css'
function Leads() {
  // Example data array
  const leads = [
    { id: 1, name: "John Doe", company: "ABC Corp", email: "john@example.com", phone: "123-456-7890", source: "Website", items: "Item A" },
    { id: 2, name: "Jane Smith", company: "XYZ Inc", email: "jane@example.com", phone: "987-654-3210", source: "Referral", items: "Item B" },
    { id: 3, name: "Alice Johnson", company: "Tech Solutions", email: "alice@techsol.com", phone: "555-678-9012", source: "Social Media", items: "Item C" },
    { id: 4, name: "Bob Brown", company: "Innovate Ltd.", email: "bob@innovate.com", phone: "444-234-5678", source: "Email Campaign", items: "Item D" },
    { id: 5, name: "Cathy Wilson", company: "GrowthHub", email: "cathy@growthhub.com", phone: "333-567-8901", source: "Conference", items: "Item E" },
    { id: 6, name: "David Lee", company: "StartUp Inc", email: "david@startup.com", phone: "111-123-4567", source: "Cold Call", items: "Item F" },
    { id: 7, name: "Ella Green", company: "EcoWorld", email: "ella@ecoworld.com", phone: "222-345-6789", source: "Website", items: "Item G" },
    { id: 8, name: "Frank Harris", company: "NextGen Tech", email: "frank@nextgen.com", phone: "666-789-0123", source: "Referral", items: "Item H" },
    { id: 9, name: "Grace Miller", company: "Future Solutions", email: "grace@futuresol.com", phone: "777-890-1234", source: "Social Media", items: "Item I" },
    { id: 10, name: "Henry White", company: "Prime Partners", email: "henry@primepartners.com", phone: "888-901-2345", source: "Website", items: "Item J" },
  ];

// LeadData component
const LeadData = ({ lead }) => (
  <div className="LeadData">
    <div className="items ms-3">{lead.id}</div>
    <div className="items">{lead.name}</div>
    <div className="items">{lead.company}</div>
    <div className="items">{lead.email}</div>
    <div className="items">{lead.phone}</div>
    <div className="items">{lead.source}</div>
    <div className="items">{lead.items}</div>
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
            <div className="items">Items</div>
           </div>
           <div>
    {leads.map((lead) => (
      <LeadData key={lead.id} lead={lead} />
    ))}
  </div>
       </div>
      </div>

     

    </div>
  )
}

export default Leads
