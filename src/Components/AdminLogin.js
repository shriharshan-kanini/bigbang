import React from 'react';
import './AdminLogin.css';
import axios from 'axios';
import { useState } from 'react';
import { useRoutes, useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const api_url = "https://localhost:7033/api/Login/Admin";

  const [adminName, setAdminName] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [adminEmail, setAdminEmail] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      adminName,
      adminPassword,
      adminEmail
    };

    console.log(payload);

    axios
      .post(api_url, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        console.log('New item added:', response.data);
        navigate('/dashboard'); // Navigate to "/dashboard" after successful login
      })
      .catch((error) => {
        console.error('Error adding new item:', error);
      });
  };

  const navigate = useNavigate();

  const handleregisterClick = () => {
    navigate('/admin-register');
  };

  const routes = useRoutes([
    {
      path: '/',
      element: (
        <div>
          <img src="https://i.pinimg.com/564x/05/65/bf/0565bfd66594324aa6e3b0396c65c4ce.jpg" alt="Background" className='image' style={{ marginTop: '1%', marginLeft: '10%', width: '50%' }} />
          <div className="container">
            <div className="form login">
              <header>Admin Login</header>
              <form>
                <input
                  type="text"
                  value={adminName}
                  onChange={(e) => setAdminName(e.target.value)}
                  required
                  placeholder="Enter your Name"
                />
                <input
                  type="text"
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                />
                <input
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                />
                <a href="#">Forgot password?</a>
                <input
                  type="button"
                  className="button"
                  onClick={handleFormSubmit}
                  value="Login"
                />
              </form>
              <div className="signup">
                <span className="signup">Don't have an account? <label htmlFor="check" onClick={handleregisterClick}>Signup</label></span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]);

  return routes;
};

export default AdminLogin;
