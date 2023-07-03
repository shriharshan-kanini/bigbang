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
      // Handle success or show a success message to the user
      navigate('/patient-login');
    } catch (error) {
      console.error('Error:', error);
      // Handle error or show an error message to the user
    }
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <label>
          Patient Name:
          <input type="text" name="PatientName" value={formData.PatientName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Patient Age:
          <input type="number" name="PatientAge" value={formData.PatientAge} onChange={handleChange} />
        </label>
        <br />
        <label>
          Patient Gender:
          <input type="text" name="PatientGender" value={formData.PatientGender} onChange={handleChange} />
        </label>
        <br />
        <label>
          Patient Description:
          <textarea name="PatientDescription" value={formData.PatientDescription} onChange={handleChange}></textarea>
        </label>
        <br />
        <label>
          Patient Email:
          <input type="email" name="PatientEmail" value={formData.PatientEmail} onChange={handleChange} />
        </label>
        <br />
        <label>
          Patient Password:
          <input type="password" name="PatientPass" value={formData.PatientPass} onChange={handleChange} />
        </label>
        <br />
        <label>
          Patient Image:
          <input type="file" name="PatientImg" onChange={handleFileChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PatientRegister;