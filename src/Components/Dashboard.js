import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
// eslint-disable-next-line
import '@fortawesome/fontawesome-free/css/all.min.css';
import DoctorTable from './Doctortable';
import ActiveDoctor from './ActiveDoctor';
import DeactiveDoctor from './DeactiveDoctor';
export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleDoctorClick = () => {
    navigate('/Doctor');
  };

  const handlePatientClick = () => {
    navigate('/patient');
  };

  const handleAdminClick = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <ActiveDoctor />
      <DeactiveDoctor />
      <DoctorTable />
      <div className={`dashboard-sidebar ${isOpen ? 'open' : ''}`}>
        <ul className="dashboard-sidebar-nav">
          <li className="dashboard-sidebar-item">
            <a className="dashboard-sidebar-link"
            onClick={handleAdminClick}
            >
              <i className="fas fa-home"></i> Home
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
