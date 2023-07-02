import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Components/DoctorRegister';
import Login from './Components/DoctorLogin';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import Doctorcard from './Components/Doctorcard';
import Doctortable from './Components/Doctortable';
import ActiveDoctor from './Components/ActiveDoctor';
import DeactiveDoctor from './Components/DeactiveDoctor';
import Patientcard from './Components/patientcard';
import Billing from './Components/Billing';
import CreateDoctor from './Components/Createdoctor';
import CreatePatient from './Components/Createpatient';
import EditDoctor from './Components/EditDoctor';
import EditPatient from './Editpatient';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Doctor" element={<Doctorcard />} />
        <Route path="/table" element={<Doctortable />} />
        <Route path="/active" element={<ActiveDoctor />} />
        <Route path="/deactive" element={<DeactiveDoctor />} />
        <Route path="/patient" element={<Patientcard />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/createdoctor" element={<CreateDoctor />} />
        <Route path="/createpatient" element={<CreatePatient />} />
        <Route path="/editdoctor" element={<EditDoctor />} />
        <Route path="/editpatient" element={<EditPatient />} />
      </Routes>
    </Router>
  );
}

export default App;
