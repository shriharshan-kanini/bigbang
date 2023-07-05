import React, { useState } from 'react';
import axios from 'axios';
import './EditDoctor.css';

export default function EditDoctor({ showModal, closeModal, doctor }) {
  const [doctorData, setDoctorData] = useState({
    docId: doctor?.docId || '',
    docName: doctor?.docName || '',
    docSpecialty: doctor?.docSpecialty || '',
    docEmail: doctor?.docEmail || '',
    docPas: doctor?.docPas || '',
    docActive: doctor?.docActive || false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorData((prevDoctor) => ({
      ...prevDoctor,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://localhost:7033/api/Doctor/${doctorData.docId}`, doctorData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Doctor updated successfully');
    } catch (error) {
      console.error('Error updating doctor:', error);
    }
    closeModal();
  };

  const handleClose = () => {
    closeModal();
  };

  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className="modal-content">
        <div className="modal-header">
          <form className="form" onSubmit={handleSubmit}>
            <p className="form-title">Edit Doctor</p>
            <button className="close-btn" onClick={handleClose}>
              <span>&times;</span>
            </button>
            <div className="input-container">
              <label htmlFor="docName">Name:</label>
              <input
                type="text"
                id="docName"
                placeholder="Doctor Name"
                name="docName"
                value={doctorData.docName}
                onChange={handleChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="docSpecialty">Specialty:</label>
              <input
                type="text"
                id="docSpecialty"
                placeholder="Specialty"
                name="docSpecialty"
                value={doctorData.docSpecialty}
                onChange={handleChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="docEmail">Email:</label>
              <input
                type="email"
                id="docEmail"
                placeholder="Email"
                name="docEmail"
                value={doctorData.docEmail}
                onChange={handleChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="docPas">Password:</label>
              <input
                type="password"
                id="docPas"
                placeholder="Password"
                name="docPas"
                value={doctorData.docPas}
                onChange={handleChange}
              />
            </div>
            <div className="button-container">
              <button type="submit" className="submit">
                Save Changes
              </button>
              <button type="button" className="cancel" onClick={handleClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
