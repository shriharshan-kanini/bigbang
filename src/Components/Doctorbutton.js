import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Doctorbutton.css';

const Doctorbutton = () => {
  const navigate = useNavigate();
  
  const handleCreateDoctor = () => {
    navigate('/create-doctor');
    console.log('Creating a doctor');
  };


  return (
    <div className="doctor-navbar">
      <button onClick={handleCreateDoctor} className='doctor button'>Create Doctor</button>
    </div>
  );
};

export default Doctorbutton;
