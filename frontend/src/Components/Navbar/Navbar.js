import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div>
       <nav>

    <input type="checkbox" id="check"/>
    
    <label for="check" class="checkbtn">
      <i class="fas fa-bars"></i>
    </label>
    <label class="logo">CRM</label>
    <ul>
      <li><a class="active" href="/leads">Home</a></li>
      <li><a href="/leads">Leads</a></li>
      <li><a href="/contact">ContactDBMS</a></li>
      <li><a href="#">Contact</a></li>
      
    </ul>
  </nav>
    </div>
  )
}

export default Navbar
