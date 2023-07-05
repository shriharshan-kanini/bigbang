import React, { useState } from 'react';
import axios from 'axios';
import './PatientRegister.css';
import { useNavigate } from 'react-router-dom';

const PatientRegister = () => {
  const [formData, setFormData] = useState({
    PatientId: null,
    PatientName: '',
    PatientAge: null,
    PatientGender: '',
    PatientDescription: '',
    PatientEmail: '',
    PatientPass: '',
    PatientImg: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      PatientImg: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new FormData();
    payload.append('PatientName', formData.PatientName);
    payload.append('PatientAge', formData.PatientAge);
    payload.append('PatientGender', formData.PatientGender);
    payload.append('PatientDescription', formData.PatientDescription);
    payload.append('PatientEmail', formData.PatientEmail);
    payload.append('PatientPass', formData.PatientPass);
    payload.append('PatientImg', formData.PatientImg);

    try {
      const response = await axios.post('https://localhost:7033/api/Patient', payload, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Response:', response.data);
      navigate('/patient-login');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="patient-register-container">
      <div className="patient-register-image-container">
        <img src="https://i.pinimg.com/564x/35/35/1e/35351edc2a8dc23392089b89a43cad03.jpg" alt="Background" className="patient-register-image" />
      </div>
      <div className="patient-register-form-container">
        <div className="patient-register-form">
          <header>Patient Registration</header>
          <form onSubmit={handleSubmit}>
            <input type="text" name="PatientName" value={formData.PatientName} onChange={handleChange} placeholder="Patient Name" required />
            <input type="number" name="PatientAge" value={formData.PatientAge} onChange={handleChange} placeholder="Patient Age" required />
            <input type="text" name="PatientGender" value={formData.PatientGender} onChange={handleChange} placeholder="Patient Gender" required />
            <textarea name="PatientDescription" value={formData.PatientDescription} onChange={handleChange} placeholder="Patient Description" required></textarea>
            <input type="email" name="PatientEmail" value={formData.PatientEmail} onChange={handleChange} placeholder="Patient Email" required />
            <input type="password" name="PatientPass" value={formData.PatientPass} onChange={handleChange} placeholder="Patient Password" required />
            <input type="file" name="PatientImg" accept="image/*" onChange={handleFileChange} placeholder="Patient Image" required />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PatientRegister;
