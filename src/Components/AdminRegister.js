import React, { useState } from 'react';
import axios from 'axios';
import './AdminRegister.css';
import { useNavigate } from 'react-router-dom';

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    AdminId: 0,
    AdminName: '',
    AdminEmail: '',
    AdminPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:7033/api/Admins', formData);
      console.log('Response:', response.data);
      navigate('/Admin');
      // Handle success or show a success message to the user
    } catch (error) {
      console.error('Error:', error);
      // Handle error or show an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Admin Name:
        <input type="text" name="AdminName" value={formData.AdminName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Admin Email:
        <input type="email" name="AdminEmail" value={formData.AdminEmail} onChange={handleChange} />
      </label>
      <br />
      <label>
        Admin Password:
        <input type="password" name="AdminPassword" value={formData.AdminPassword} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AdminRegister;