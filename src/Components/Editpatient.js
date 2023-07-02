import React, { useState } from 'react';
import axios from 'axios';
import './Editpatient.css';

export default function EditPatient({ showModal, closeModal, patient }) {
  const [updatedPatient, setUpdatedPatient] = useState({
    patientId: patient.patientId,
    patientName: patient.patientName,
    patientAge: patient.patientAge,
    patientGender: patient.patientGender,
    patientDescription: patient.patientDescription,
    patientEmail: patient.patientEmail,
    patientPass: patient.patientPass,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUpdatedPatient((prevPatient) => ({
      ...prevPatient,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://localhost:7033/api/Patient/${patient.patientId}`, updatedPatient, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Patient updated successfully');
      closeModal();
    } catch (error) {
      console.error('Error updating patient:', error);
    }
  };

  return (
    showModal && (
      <div className="edit-patient-modal">
        <div className="edit-patient-modal-content">
          <div className="edit-patient-modal-header">
            <h2>Edit Patient</h2>
            <button className="edit-patient-close-btn" onClick={closeModal}>
              <span>&times;</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="edit-patient-input-container">
              <label htmlFor="patientName">Name:</label>
              <input
                type="text"
                id="patientName"
                defaultValue={patient.patientName}
                onChange={handleChange}
              />
            </div>
            <div className="edit-patient-input-container">
              <label htmlFor="patientAge">Age:</label>
              <input
                type="text"
                id="patientAge"
                defaultValue={patient.patientAge}
                onChange={handleChange}
              />
            </div>
            <div className="edit-patient-input-container">
              <label htmlFor="patientGender">Gender:</label>
              <input
                type="text"
                id="patientGender"
                defaultValue={patient.patientGender}
                onChange={handleChange}
              />
            </div>
            <div className="edit-patient-input-container">
              <label htmlFor="patientDescription">Description:</label>
              <input
                type="text"
                id="patientDescription"
                defaultValue={patient.patientDescription}
                onChange={handleChange}
              />
            </div>
            <div className="edit-patient-input-container">
              <label htmlFor="patientEmail">Email:</label>
              <input
                type="text"
                id="patientEmail"
                defaultValue={patient.patientEmail}
                onChange={handleChange}
              />
            </div>
            <div className="edit-patient-input-container">
              <label htmlFor="patientPass">Password:</label>
              <input
                type="password"
                id="patientPass"
                defaultValue={patient.patientPass}
                onChange={handleChange}
              />
            </div>
            <div className="edit-patient-button-container">
              <button type="submit" className="edit-patient-submit">
                Save Changes
              </button>
              <button
                type="button"
                className="edit-patient-cancel"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}
