import React, { useState } from 'react';
import './Doctorfilter.css';

const DoctorFilter = () => {
  const [specialty, setSpecialty] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const handleSpecialtyChange = (event) => {
    const { value } = event.target;
    setSpecialty(value);
  };

  const fetchDoctors = async () => {
    try {
      const response = await fetch(`https://localhost:7288/api/Doctor/search/specialty/${specialty}`);
      const data = await response.json();
      setFilteredDoctors(data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const handleFetchDoctors = () => {
    fetchDoctors();
  };

  return (
    <div className="doctor-filter-container">
      <input
        type="text"
        value={specialty}
        onChange={handleSpecialtyChange}
        placeholder="Filter by specialty"
      />
      <button className="fetch-button" onClick={handleFetchDoctors}>
        Fetch Doctors
      </button>

      <ul className="doctor-list">
        {filteredDoctors.map((doctor) => (
          <li key={doctor.DocId} className="doctor-item">
            {Object.entries(doctor).map(([key, value]) => (
              <p key={key}>
                {key}: {value}
              </p>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorFilter;
