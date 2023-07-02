import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Doctortable.css';
import EditDoctor from './EditDoctor';

export default function Doctortable() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [doctorsData, setDoctorsData] = useState([]);

  useEffect(() => {
    fetchDoctorsData();
  }, []);

  const fetchDoctorsData = async () => {
    try {
      const response = await axios.get('https://localhost:7033/api/Doctor');
      setDoctorsData(response.data);
    } catch (error) {
      console.error('Error fetching doctors data:', error);
    }
  };

  const handleEditClick = (doctor) => {
    setSelectedDoctor(doctor);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <table className="doctor-table">
        <thead>
          <tr>
            <th>Doctor Name</th>
            <th>Specialty</th>
            <th>Email</th>
            <th>Password</th>
            <th>Active</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {doctorsData.map((doctor, index) => (
            <tr key={index}>
              <td>{doctor.docName}</td>
              <td>{doctor.docSpecialty}</td>
              <td>{doctor.docEmail}</td>
              <td>{doctor.docPas}</td>
              <td>{doctor.docActive ? 'Active' : 'Inactive'}</td>
              <td>
                <button onClick={() => handleEditClick(doctor)}>
                  <span className="box">Edit</span>
                </button>
              </td>
              <td>
                <button className="delete">
                  <svg viewBox="0 0 448 512" className="svgIcon">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <EditDoctor
          showModal={showModal}
          closeModal={closeModal}
          doctor={selectedDoctor}
        />
      )}
    </div>
  );
}
