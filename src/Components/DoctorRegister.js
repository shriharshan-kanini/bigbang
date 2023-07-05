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
    <div className="doctor-register-container">
      <img
        src="https://i.pinimg.com/564x/05/65/bf/0565bfd66594324aa6e3b0396c65c4ce.jpg"
        alt="Background"
        className="image"
      />
      <div className="container">
        <div className="form registration">
          <header>Doctor Registration</header>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="docName"
              value={formData.docName}
              onChange={handleChange}
              required
              placeholder="Enter your Name"
            />
            <input
              type="text"
              name="docSpecialty"
              value={formData.docSpecialty}
              onChange={handleChange}
              required
              placeholder="Enter your Specialty"
            />
            <input
              type="email"
              name="docEmail"
              value={formData.docEmail}
              onChange={handleChange}
              required
              placeholder="Enter your Email"
            />
            <input
              type="password"
              name="docPas"
              value={formData.docPas}
              onChange={handleChange}
              required
              placeholder="Enter your Password"
            />
            <button type="submit" className="button">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorRegister;
