import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './DoctorLogin.css';

const DoctorLogin = () => {
  const api_url = "https://localhost:7033/api/Login/Doctor";

  const [docEmail, setEmail] = useState('');
  const [docPas, setPassword] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create a payload object with the user input
    const payload
    
    
    
    
    = {
      docEmail,
      docPas
    };

    console.log(payload);

    try {
      const response = await axios.post(api_url, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('New item added:', response.data);
      // Perform any necessary actions after successful POST request
      navigate('/patient'); // Redirect to "/patient" route
    } catch (error) {
      console.error('Error adding new item:', error);
      // Perform any necessary actions for error handling
    }
  };

  return (
    <div>
      <img src="https://techcrunch.com/wp-content/uploads/2020/09/GettyImages-1211152561.jpg?w=713" alt="Background" className='image' style={{ marginTop: '7%', marginLeft: '10%', width: '50%' }} />
      <div className="container">
        <div className="form login">
          <header>Doctor Login</header>
          <form>
            <input
              type="text"
              value={docEmail}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
            <input
              type="password"
              value={docPas}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
            <a href="#">Forgot password?</a>
            <input
              type="submit"
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
  );
};

export default DoctorLogin;