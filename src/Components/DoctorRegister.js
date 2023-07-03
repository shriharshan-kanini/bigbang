import React, { useState } from 'react';
import axios from 'axios';
import './DoctorRegister.css';
import { useNavigate } from 'react-router-dom';

const DoctorRegister = () => {
  const [formData, setFormData] = useState({
    docName: '',
    docSpecialty: '',
    docEmail: '',
    docPas: '',
    docActive: true,
    docImg: null
  });

  const handleChange = (e) => {
    if (e.target.name === 'docImg') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('docName', formData.docName);
      formDataToSend.append('docSpecialty', formData.docSpecialty);
      formDataToSend.append('docEmail', formData.docEmail);
      formDataToSend.append('docPas', formData.docPas);
      formDataToSend.append('docActive', formData.docActive);
      formDataToSend.append('docImg', formData.docImg);

      const response = await axios.post('https://localhost:7033/api/Doctor', formDataToSend);

      console.log('Response:', response.data);
      navigate('/login');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="docName" value={formData.docName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Specialty:
        <input type="text" name="docSpecialty" value={formData.docSpecialty} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="docEmail" value={formData.docEmail} onChange={handleChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="docPas" value={formData.docPas} onChange={handleChange} />
      </label>
      <br />
      <label>
        Active:
        <input type="checkbox" name="docActive" checked={formData.docActive} onChange={handleChange} />
      </label>
      <br />
      <label>
        Image:
        <input type="file" name="docImg" onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default DoctorRegister;