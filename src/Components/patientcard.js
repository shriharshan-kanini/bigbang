import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './patientcard.css';
import Navbar from './Navbar';
export function Patientcard() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await axios.get('https://localhost:7033/api/Patient');
      setPatients(response.data.value);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  const convertImageData = (imageData) => {
    const base64Image = `data:image/jpeg;base64,${imageData}`;
    return base64Image;
  };

  return (
    <div>
    <Navbar/>
    <div className="cont">
      
      {patients.map((patient) => (
        <div key={patient.patientId} className="doctor-card">
          <div className="first-content">
            <div className="doc-image">
              {patient.patientImg && (
                <img src={convertImageData(patient.patientImg)} alt="Doctor" className="docimg" />
              )}
            </div>
            <div className="doc-name">
              <span>{patient.patientName}</span>
            </div>
          </div>
          <div className="second-content">
            <span className="desc">
              <strong>Age</strong> {patient.patientAge}
            </span>
            <span className="desc">
              <strong>patient Gender:</strong> {patient.patientGender}
            </span>
            <span className="desc">
              <strong>patientDescription</strong> {patient.patientDescription}
            </span>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Patientcard;