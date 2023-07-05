import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './patienttable.css';
import EditPatient from './Editpatient';

export default function PatientTable() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [patientsData, setPatientsData] = useState([]);

  useEffect(() => {
    fetchPatientsData();
  }, []);

  const fetchPatientsData = async () => {
    try {
      const response = await axios.get('https://localhost:7033/api/Patient');
      setPatientsData(response.data.value);
    } catch (error) {
      console.error('Error fetching patients data:', error);
    }
  };

  const handleEditClick = (patient) => {
    setSelectedPatient(patient);
    setShowModal(true);
  };

  const handleDeleteClick = async (patientId) => {
    try {
      await axios.delete(`https://localhost:7033/api/Patient/${patientId}`);
      console.log('Patient deleted successfully');
      fetchPatientsData(); // Refresh the patient data after deletion
    } catch (error) {
      console.error('Error deleting patient:', error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPatient(null);
  };

  return (
    <div>
      <table className="patient-table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Description</th>
            <th>Email</th>
            <th>Password</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {patientsData.length === 0 ? (
            <tr>
              <td colSpan="8">No patient data available</td>
            </tr>
          ) : (
            patientsData.map((patient, index) => (
              <tr key={index}>
                <td>{patient.patientName}</td>
                <td>{patient.patientAge}</td>
                <td>{patient.patientGender}</td>
                <td>{patient.patientDescription}</td>
                <td>{patient.patientEmail}</td>
                <td>{patient.patientPass}</td>
                <td>
                  <button onClick={() => handleEditClick(patient)}>
                    <span className="box">Edit</span>
                  </button>
                </td>
                <td>
                  <button className="delete" onClick={() => handleDeleteClick(patient.patientId)}>
                    <svg viewBox="0 0 448 512" className="svgIcon">
                      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                    </svg>
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {showModal && (
        <EditPatient
          showModal={showModal}
          closeModal={closeModal}
          patient={selectedPatient}
        />
      )}
    </div>
  );
}
