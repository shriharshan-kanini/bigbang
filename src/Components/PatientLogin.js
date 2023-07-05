import './PatientLogin.css';
import axios from 'axios';
import { useState } from 'react';
import { useRoutes, useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com'

const PatientLogin = () => {
  const api_url = "https://localhost:7033/api/Login/Patient";

  const [patientEmail, setEmailOrPhone] = useState('');
  const [patientPass, setPassword] = useState('');
  const [generatedNumber, setRandomNumber] = useState('');
  
  
  function sendEmail(patientEmail) {
    
    const generatedNumber = Math.floor(Math.random() * 9000) + 1000;

    setRandomNumber(generatedNumber);

    const templateParams = {
      to_name: 'shriharshan',
      from_name: 'Shriharshan',
      message: 'The OTP is ' + generatedNumber,
      to_email: patientEmail
    };
    setTimeout(() => {
      emailjs
        .send('service_1cdsp1r', 'template_rwtrr5a', templateParams, 'hkxQmw_NUnAl2TqaQ')
        .then((response) => {
          console.log(generatedNumber)
          console.log('Email sent successfully:', response);
          const Otpnum = prompt("Enter the OTP:");
          const parsedNum = parseInt(Otpnum);
          if (parsedNum === generatedNumber) {
            navigate('/Doctor');
          } else {
            alert("Incorrect OTP!");
          }
        });
    }, 5000);
  }
  
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      patientEmail,
      patientPass
    };

    console.log(payload);

    axios
      .post(api_url, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        sendEmail(patientEmail)
        console.log('New item added:', response.data);
        localStorage.setItem('token', response.data);
        console.log(generatedNumber)
      })
      .catch((error) => {
        console.error('Error adding new item:', error);
      });
  };

  const handleregisterClick = () => {
    navigate('/patient-register');
  };

  const routes = useRoutes([
    {
      path: '/',
      element: (
        <div>
          <img src="https://i.pinimg.com/564x/35/35/1e/35351edc2a8dc23392089b89a43cad03.jpg" alt="Background" className='image' style={{ marginTop: '1%', marginLeft: '10%', width: '50%' }} />
          <div className="container">
            <div className="form login">
              <header>Patient Login</header>
              <form>
                <input
                  type="text"
                  value={patientEmail}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  required
                  placeholder="Enter your email"
                />
                <input
                  type="password"
                  value={patientPass}
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

export default PatientLogin;