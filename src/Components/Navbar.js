import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  
  const handleCreateDoctor = () => {
    navigate('/create-doctor');
    console.log('Creating a doctor');
  };

  const handleCreatePatient = () => {
    navigate('/create-patient');
    console.log('Creating a patient');
  };

  return (
    <div className="navbar">
      <button onClick={handleCreateDoctor} className='doctor button'>Create Doctor</button>
      <button onClick={handleCreatePatient} className='patient button'>Create Patient</button>
    </div>
  );
};

export default Navbar;
