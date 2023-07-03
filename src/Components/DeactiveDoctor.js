import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DeactiveDoctor.css';

export default function DeactiveDoctor() {
  const [deactiveDoctors, setDeactiveDoctors] = useState([]);

  useEffect(() => {
    fetchDeactiveDoctors();
  }, []);

  const fetchDeactiveDoctors = async () => {
    try {
      const response = await axios.get('https://localhost:7033/api/Doctor');
      const doctors = response.data;
      const pendingDoctors = doctors.filter((doctor) => doctor.status === 'Pending');
      setDeactiveDoctors(pendingDoctors);
    } catch (error) {
      console.error('Error fetching deactive doctors:', error);
    }
  };

  

  const handleApproveClick = async (doctorId) => {
    try {
      const response = await axios.post(
        `https://localhost:7033/api/Admins/ApproveDoctorRequest/${doctorId}`
      );
      console.log('Doctor approval successful:', response.data);
    } catch (error) {
      console.error('Error approving doctor:', error);
    }
  };
  


  return (
    <div className="card deactive-doctor-card">
      <div className="card-body">
        <h5 className="card-title">Pending Doctors</h5>
        <table className="deactive-doctor-table">
          <thead>
            <tr>
              <th>Doctor Name</th>
              <th>Specialty</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {deactiveDoctors.length === 0 ? (
              <tr>
                <td colSpan="2">No deactive doctors available</td>
              </tr>
            ) : (
              deactiveDoctors.map((doctor) => (
                <tr key={doctor.docId}>
                  <td>{doctor.docName}</td>
                  <td>{doctor.docSpecialty}</td>
                  <td>
                    <button onClick={() => handleApproveClick(doctor.docId)}>
                      Approve
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}