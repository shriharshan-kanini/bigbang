import React, { useState } from 'react';
import axios from 'axios';
import './Createpatient.css';

export default function CreatePatient() {
  const [patient, setPatient] = useState({
    patientName: '',
    patientAge: '',
    patientGender: '',
    patientDescription: '',
    patientEmail: '',
    patientPass: '',
    patientImg: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient((prevPatient) => ({
      ...prevPatient,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setPatient((prevPatient) => ({
      ...prevPatient,
      patientImg: imageFile,
    }));
  };  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(patient);
  
    try {
      await axios.post('https://localhost:7033/api/Patient', patient, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Patient created successfully');
    } catch (error) {
      console.error('Error creating patient:', error);
    }
  };
  
  return (
    <div className="con">
      <form className="form" onSubmit={handleSubmit}>
        <p className="form-title">Create Patient</p>
        <div className="input-container">
          <input
            type="text"
            placeholder="Patient Name"
            name="patientName"
            value={patient.patientName}
            onChange={handleChange}
          />
          <span></span>
        </div>
        <div className="input-container">
          <input
            type="number"
            placeholder="Age"
            name="patientAge"
            value={patient.patientAge}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="email"
            placeholder="Email"
            name="patientEmail"
            value={patient.patientEmail}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            name="patientPass"
            value={patient.patientPass}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Description"
            name="patientDescription"
            value={patient.patientDescription}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="patientGender"
            value={patient.patientGender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" className="submit">
          Create Patient
        </button>
      </form>
    </div>
  );
}
