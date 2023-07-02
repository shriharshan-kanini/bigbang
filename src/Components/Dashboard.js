import React, { useState } from 'react';
import './Dashboard.css';
import Navbar from './Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Doctorcard from './Doctorcard';
import Doctortable from './Doctortable';
import ActiveDoctor from './ActiveDoctor';
import DeactiveDoctor from './DeactiveDoctor';
import Patienttable from './patienttable';

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <div>
        <Navbar />
        <ActiveDoctor/>
        <DeactiveDoctor/>
        {/* <Doctorcard/> */}
        <Doctortable/>
        <Patienttable/>
      <div className={`dashboard-navbar ${isOpen ? 'open' : ''}`}>
        <ul className="dashboard-navbar-nav">
          <li className="dashboard-nav-item">
            <a href="#home" className="dashboard-nav-link">
              <i className="fas fa-home"></i> Home
            </a>
          </li><br></br>
          <li className="dashboard-nav-item">
            <a href="#about" className="dashboard-nav-link">
              <i className="fas fa-info-circle"></i> About
            </a>
          </li><br></br>
          <li className="dashboard-nav-item">
            <a href="#services" className="dashboard-nav-link">
              <i className="fas fa-cogs"></i> Services
            </a>
          </li><br></br>
          <li className="dashboard-nav-item">
            <a href="#contact" className="dashboard-nav-link">
              <i className="fas fa-envelope"></i> Contact
            </a>
          </li><br></br>
          <li className="dashboard-nav-item">
            <a href="#contact" className="dashboard-nav-link">
            <i className="fas fa-user"></i> Patients
            </a>
          </li><br></br>
          <li className="dashboard-nav-item">
            <a href="#contact" className="dashboard-nav-link">
            <i className="fas fa-medkit"></i> Medications
            </a>
          </li><br></br>
          <li className="dashboard-nav-item">
            <a href="#contact" className="dashboard-nav-link">
            <i className="fas fa-dollar-sign"></i> Billings
            </a>
          </li>
        </ul>
      </div>
      </div>
  );
}
