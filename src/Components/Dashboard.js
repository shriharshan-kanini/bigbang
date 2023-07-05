import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
// eslint-disable-next-line
// import Navbar from './Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import DoctorTable from './Doctortable';
import ActiveDoctor from './ActiveDoctor';
import DeactiveDoctor from './DeactiveDoctor';
import PatientTable from './patienttable';

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleDoctorClick = () => {
    navigate('/Doctor');
  };

  const handlePatientClick = () => {
    navigate('/patient');
  };

  return (
    <div>
      {/* <Navbar /> */}
      <ActiveDoctor />
      <DeactiveDoctor />
      {/* <Doctorcard/> */}
      <DoctorTable />
      {/* <PatientTable /> */}
      <div className={`dashboard-sidebar ${isOpen ? 'open' : ''}`}>
        <ul className="dashboard-sidebar-nav">
          <li className="dashboard-sidebar-item">
            <a href="#home" className="dashboard-sidebar-link">
              <i className="fas fa-home"></i> Home
            </a>
          </li>
          <li className="dashboard-sidebar-item">
            <a href="#about" className="dashboard-sidebar-link">
              <i className="fas fa-info-circle"></i> About
            </a>
          </li>
          <li className="dashboard-sidebar-item">
            <button
              href="#contact"
              className="dashboard-sidebar-link"
              onClick={handlePatientClick}
            >
              <i className="fas fa-user"></i> Patients
            </button>
          </li>
          <li className="dashboard-sidebar-item">
            <button
              href="#contact"
              className="dashboard-sidebar-link"
              onClick={handleDoctorClick}
            >
              <i className="fas fa-medkit"></i> Doctor
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
