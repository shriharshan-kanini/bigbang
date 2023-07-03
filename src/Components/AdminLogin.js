import React from 'react';
import './AdminLogin.css';
import axios from 'axios';
import { useState } from 'react';
import { useRoutes } from 'react-router-dom';

const AdminLogin = () => {
  const api_url = "https://localhost:7033/api/Admins";

  const [adminName, setEmailOrPhone] = useState('');
  const [adminPassword, setPassword] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create a payload object with the user input
    const payload = {
        adminName,
        adminPassword
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
        // Perform any necessary actions after successful POST request
      })
      .catch((error) => {
        console.error('Error adding new item:', error);
        // Perform any necessary actions for error handling
      });
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
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  required
                  placeholder="Enter your Name"
                />
                <input
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setPassword(e.target.value)}
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
                <span className="signup">Don't have an account? <label htmlFor="check">Signup</label></span>
              </div>
            </div>
            <div className="form registration">
              {/* Add your registration form here */}
            </div>
          </div>
        </div>
      )
    }
  ]);

  return routes;
};

export default AdminLogin;