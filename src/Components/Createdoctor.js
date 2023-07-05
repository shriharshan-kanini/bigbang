import React, { useState } from 'react';
import axios from 'axios';
import './createdoctor.css';

export default function CreateDoctor() {
  const [doctor, setDoctor] = useState({
    docName: '',
    docSpecialty: '',
    docEmail: '',
    docPas: '',
    status: false,
    docImg: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor((prevDoctor) => ({
      ...prevDoctor,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setDoctor((prevDoctor) => ({
      ...prevDoctor,
      docImg: imageFile,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('docName', doctor.docName);
      formData.append('docSpecialty', doctor.docSpecialty);
      formData.append('docEmail', doctor.docEmail);
      formData.append('docPas', doctor.docPas);
      formData.append('status', doctor.status);
      formData.append('imageFile', doctor.docImg);

      const response = await axios.post(
        'https://localhost:7033/api/Doctor',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('Doctor created:', response.data);
      setDoctor({
        docName: '',
        docSpecialty: '',
        docEmail: '',
        docPas: '',
        status: false,
        docImg: null,
      });
    } catch (error) {
      console.error('Error creating doctor:', error);
    }
  };

  return (
    <div className="con">
      <form className="form" onSubmit={handleSubmit}>
        <p className="form-title">Create Doctor</p>
        <div className="input-container">
          <input
            type="text"
            placeholder="Doctor Name"
            name="docName"
            value={doctor.docName}
            onChange={handleChange}
          />
          <span></span>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Specialty"
            name="docSpecialty"
            value={doctor.docSpecialty}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="email"
            placeholder="Email"
            name="docEmail"
            value={doctor.docEmail}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            name="docPas"
            value={doctor.docPas}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="imageFile"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit" className="submit">
          Create Doctor
        </button>
      </form>
    </div>
  );
}