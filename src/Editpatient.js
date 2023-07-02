import React, { useState } from 'react';
import './Editpatient.css';

export default function EditPatient() {
  const [patient, setPatient] = useState({
    name: '',
    age: '',
    email: '',
    address: '',
    active: false,
    image: null,
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
        <p className="form-title">Edit Patient</p>
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
            type="text"
            placeholder="Address"
            name="address"
            value={patient.address}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="active">Active:</label>
          <select
            id="active"
            name="active"
            value={patient.active}
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
          Save Changes
        </button>
      </form>
    </div>
  );
}
