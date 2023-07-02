import React, { useState } from 'react';
import axios from 'axios';
import './createdoctor.css';

export default function CreateDoctor() {
  const [doctor, setDoctor] = useState({
    name: '',
    specialty: '',
    email: '',
    password: '',
    active: false,
    image: null,
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
      image: imageFile,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestData = {
        docName: doctor.name,
        docSpecialty: doctor.specialty,
        docEmail: doctor.email,
        docPas: doctor.password,
        docActive: doctor.active
      };
  
      const response = await axios.post(
        'https://localhost:7033/api/Doctor',
        requestData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
  
      console.log('Doctor created:', response.data);
      setDoctor({
        name: '',
        specialty: '',
        email: '',
        password: '',
        active: false,
        image: null,
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
            name="name"
            value={doctor.name}
            onChange={handleChange}
          />
          <span></span>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Specialty"
            name="specialty"
            value={doctor.specialty}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={doctor.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={doctor.password}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="active">Active:</label>
          <select
            id="active"
            name="active"
            value={doctor.active}
            onChange={handleChange}
          >
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
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
        <button type="submit" className="submit">
          Create Doctor
        </button>
      </form>
    </div>
  );
}
