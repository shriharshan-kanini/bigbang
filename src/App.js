import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DoctorRegister from './Components/DoctorRegister';
import  DoctorLogin  from './Components/DoctorLogin';
import Dashboard from './Components/Dashboard';
// import Navbar from './Components/Navbar';
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
import PatientRegister from './Components/PatientRegister';
import PatientLogin from './Components/PatientLogin';
import AdminLogin from './Components/AdminLogin';
import AdminRegister from './Components/AdminRegister';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<DoctorRegister />} />
        <Route path="/login" element={<DoctorLogin />} />
        <Route path="/Doctor" element={<Doctorcard />} />
        <Route path="/table" element={<Doctortable />} />
        <Route path="/active" element={<ActiveDoctor />} />
        <Route path="/deactive" element={<DeactiveDoctor />} />
        <Route path="/patient" element={<Patientcard />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/create-doctor" element={<CreateDoctor />} />
        <Route path="/create-patient" element={<CreatePatient />} />
        <Route path="/edit-doctor" element={<EditDoctor />} />
        <Route path="/edit-patient" element={<EditPatient />} />
        <Route path="/patient-register" element={<PatientRegister />} />
        <Route path="/patient-login" element={<PatientLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-register" element={<AdminRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
