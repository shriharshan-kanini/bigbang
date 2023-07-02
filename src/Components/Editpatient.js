import React from 'react';
import './Editpatient.css';

export default function EditPatient({ showModal, closeModal, patient }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
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
              />
            </div>
            <div className="edit-patient-input-container">
              <label htmlFor="patientAge">Age:</label>
              <input
                type="text"
                id="patientAge"
                defaultValue={patient.patientAge}
              />
            </div>
            <div className="edit-patient-input-container">
              <label htmlFor="patientGender">Gender:</label>
              <input
                type="text"
                id="patientGender"
                defaultValue={patient.patientGender}
              />
            </div>
            <div className="edit-patient-input-container">
              <label htmlFor="patientDescription">Description:</label>
              <input
                type="text"
                id="patientDescription"
                defaultValue={patient.patientDescription}
              />
            </div>
            <div className="edit-patient-input-container">
              <label htmlFor="patientEmail">Email:</label>
              <input
                type="text"
                id="patientEmail"
                defaultValue={patient.patientEmail}
              />
            </div>
            <div className="edit-patient-input-container">
              <label htmlFor="patientPass">Password:</label>
              <input
                type="password"
                id="patientPass"
                defaultValue={patient.patientPass}
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
