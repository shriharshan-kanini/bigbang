import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {

  
  const handleCreateDoctor = () => {
    console.log('Creating a doctor');
  };

  const handleCreatePatient = () => {
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
