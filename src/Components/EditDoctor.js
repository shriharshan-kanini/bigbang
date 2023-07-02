import React, { useState } from 'react';
import axios from 'axios';
import './EditDoctor.css';

export default function EditDoctor({ showModal, closeModal, doctor }) {
    const [doctorData, setDoctorData] = useState({
        Id : doctor?.docId || '',
        name: doctor?.docName || '',
        specialty: doctor?.docSpecialty || '',
        email: doctor?.docEmail || '',
        password: doctor?.docPas || '',
        active: doctor?.docActive || false,
        image: null,
      });
      

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorData((prevDoctor) => ({
      ...prevDoctor,
      [name]: value,
    }));
  };
  

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setDoctorData((prevDoctor) => ({
      ...prevDoctor,
      image: imageFile,
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('id', doctorData.Id);
      formData.append('name', doctorData.name);
      formData.append('specialty', doctorData.specialty);
      formData.append('email', doctorData.email);
      formData.append('password', doctorData.password);
      formData.append('active', doctorData.active);
      formData.append('docImg', doctorData.image);

      const response = await axios.put(
        `https://localhost:7033/api/Doctor/${doctorData.Id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('Doctor updated:', response.data);
    } catch (error) {
      console.error('Error updating doctor:', error);
      // Handle any error messages
    }
    closeModal();
  };

  const handleClose = () => {
    closeModal();
  };

  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className="modal-content">
        <div className='modal-header'>
        <form className="form" onSubmit={handleSubmit}>
          <p className="form-title">Edit Doctor</p>
          <button className="close-btn" onClick={handleClose}>
            <span>&times;</span>
          </button>
          <div className="input-container">
            <input
              type="text"
              placeholder="Doctor Name"
              name="name"
              value={doctorData.name}
              onChange={handleChange}
            />
            <span></span>
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Specialty"
              name="specialty"
              value={doctorData.specialty}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={doctorData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={doctorData.password}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="active">Active:</label>
            <select
              id="active"
              name="active"
              value={doctorData.active}
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
              onChange={handleImageChange}
            />
          </div>
          <div className="button-container">
            <button type="submit" className="submit">
              Save Changes
            </button>
            <button type="button" className="cancel" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}
