import React, { useState } from 'react';
import './Createpatient.css';

export default function CreatePatient() {
  const [patient, setPatient] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
    active: false,
    image: null,
    description: '',
    gender: '',
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
      image: imageFile,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(patient);
    // Handle form submission logic here
  };

  return (
    <div className="con">
      <form className="form" onSubmit={handleSubmit}>
        <p className="form-title">Create Patient</p>
        <div className="input-container">
          <input
            type="text"
            placeholder="Patient Name"
            name="name"
            value={patient.name}
            onChange={handleChange}
          />
          <span></span>
        </div>
        <div className="input-container">
          <input
            type="number"
            placeholder="Age"
            name="age"
            value={patient.age}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={patient.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={patient.password}
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
            name="description"
            value={patient.description}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={patient.gender}
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
