import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Doctorcard.css';
export function DoctorCard() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('https://localhost:7033/api/Doctor');
      setDoctors(response.data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const convertImageData = (imageData) => {
    const base64Image = `data:image/jpeg;base64,${imageData}`;
    return base64Image;
  };

  return (
    <div>
    <div className="cont">
      
      {doctors.map((doctor) => (
        <div key={doctor.docId} className="doctor-card">
          <div className="first-content">
            <div className="doc-image">
              {doctor.docImg && (
                <img src={convertImageData(doctor.docImg)} alt="Doctor" className="docimg" />
              )}
            </div>
            <div className="doc-name">
              <span>{doctor.docName}</span>
            </div>
          </div>
          <div className="second-content">
            <span className="desc">
              <strong>Specialty:</strong> {doctor.docSpecialty}
            </span>
            <span className="desc">
              <strong>Email:</strong> {doctor.docEmail}
            </span>
            <span className="desc">
              <strong>Active:</strong> {doctor.docActive ? 'Yes' : 'No'}
            </span>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default DoctorCard;