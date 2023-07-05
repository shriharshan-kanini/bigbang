import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Patientbutton.css'

export default function Patientbutton() {

    const navigate = useNavigate();

    const handleCreatePatient = () => {
        navigate('/create-patient');
        console.log('Creating a patient');
      };


  return (
    <div className="patient-navbar">
      <button onClick={handleCreatePatient} className='patient button'>Create Patient</button>
    </div> 
     )
}
