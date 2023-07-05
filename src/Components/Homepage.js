import React from 'react';
import './Homepage.css';
import { useNavigate } from 'react-router-dom';

export default function Homepage() {
  const navigate = useNavigate();

  const handleDoctorClick = () => {
    navigate('/login');
  };

  const handlePatientClick = () => {
    navigate('/patient-login');
  };

  const handleAdminClick = () => {
    navigate('/admin-login');
  };

  return (
    <div className="homepage-container">
      <img src="https://img.freepik.com/premium-vector/hospital-building-healthcare-cartoon-background-vector-illustration-with-ambulance-car-doctor-patient-nurses-medical-clinic-exterior_2175-1515.jpg?w=2000" className="hospital-image" alt="Hospital" />
      <div className="homepage-content">
        <div className="homepage-card">
          <img src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png" className="card-image" alt="Doctor" />
          <button className="card-button" onClick={handleDoctorClick}>Doctor</button>
        </div>
        <div className="homepage-card">
          <img src="https://cdn-icons-png.flaticon.com/512/2621/2621786.png" className="card-image" alt="Patient" />
          <p className="card-text" onClick={handlePatientClick}>Patient</p>
        </div>
        <div className="homepage-card">
          <img src="https://cdn-icons-png.flaticon.com/512/2206/2206368.png" className="card-image" alt="Admin" />
          <p className="card-text" onClick={handleAdminClick}>Admin</p>
        </div>
      </div>
    </div>
  );
}
