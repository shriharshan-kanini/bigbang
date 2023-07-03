import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ActiveDoctor.css';

export default function ActiveDoctor() {
  const [activeDoctors, setActiveDoctors] = useState([]);

  useEffect(() => {
    fetchActiveDoctors();
  }, []);

  const fetchActiveDoctors = async () => {
    try {
      const response = await axios.get('https://localhost:7033/api/Doctor');
      const doctors = response.data;
      const approvedDoctors = doctors.filter((doctor) => doctor.status === 'Approved');
      setActiveDoctors(approvedDoctors);
    } catch (error) {
      console.error('Error fetching active doctors:', error);
    }
  };

  return (
    <div className="card active-doctor-card">
      <div className="card-body">
        <h5 className="card-title">Active Doctors</h5>
        <table className="active-doctor-table">
          <thead>
            <tr>
              <th>Doctor Name</th>
              <th>Specialty</th>
            </tr>
          </thead>
          <tbody>
            {activeDoctors.length === 0 ? (
              <tr>
                <td colSpan="2">No active doctors available</td>
              </tr>
            ) : (
              activeDoctors.map((doctor) => (
                <tr key={doctor.docId}>
                  <td>{doctor.docName}</td>
                  <td>{doctor.docSpecialty}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
