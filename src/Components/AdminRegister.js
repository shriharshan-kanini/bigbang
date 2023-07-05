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
    <div className="admin-register-container">
      <img
        src="https://i.pinimg.com/564x/05/65/bf/0565bfd66594324aa6e3b0396c65c4ce.jpg"
        alt="Background"
        className="image"
      />
      <div className="container">
        <div className="form registration">
          <header>Admin Registration</header>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="AdminName"
              value={formData.AdminName}
              onChange={handleChange}
              required
              placeholder="Enter your Name"
            />
            <input
              type="email"
              name="AdminEmail"
              value={formData.AdminEmail}
              onChange={handleChange}
              required
              placeholder="Enter your Email"
            />
            <input
              type="password"
              name="AdminPassword"
              value={formData.AdminPassword}
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

export default AdminRegister;