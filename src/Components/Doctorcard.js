/* Doctorcard.js */
import React from 'react';
import './Doctorcard.css';
import Navbar from './Navbar';

export default function Doctorcard() {
  return (
    <div>
    {/* <Navbar/> */}
    <div className="cont">
      <div className="doctor-card">
        <div className="first-content">
          <div className="doc-image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991300.png"
              className="docimg"
              alt="Doctor"
            />
          </div>
          <div className="doc-name">
            <span>Doctor Name</span>
          </div>

        </div>
        <div className="second-content">
          <span className="desc">doctor description</span>
          <button className='Edit'>
          Edit
          </button>
        </div>
      </div>
      <br />
      <div className="doctor-card">
        <div className="first-content">
          <div className="doc-image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991300.png"
              className="docimg"
              alt="Doctor"
            />
          </div>
          <div className="doc-name">
            <span>Doctor Name</span>
          </div>
        </div>
        <div className="second-content">
          <span className="desc">doctor description</span>
        </div>
      </div>
      <div className="doctor-card">
        <div className="first-content">
          <div className="doc-image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991300.png"
              className="docimg"
              alt="Doctor"
            />
          </div>
          <div className="doc-name">
            <span>Doctor Name</span>
          </div>
        </div>
        <div className="second-content">
          <span className="desc">doctor description</span>
        </div>
      </div>
      <div className="doctor-card">
        <div className="first-content">
          <div className="doc-image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991300.png"
              className="docimg"
              alt="Doctor"
            />
          </div>
          <div className="doc-name">
            <span>Doctor Name</span>
          </div>
        </div>
        <div className="second-content">
          <span className="desc">doctor description</span>
        </div>
      </div>
      <div className="doctor-card">
        <div className="first-content">
          <div className="doc-image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991300.png"
              className="docimg"
              alt="Doctor"
            />
          </div>
          <div className="doc-name">
            <span>Doctor Name</span>
          </div>
        </div>
        <div className="second-content">
          <span className="desc">doctor description</span>
        </div>
      </div>
      <div className="doctor-card">
        <div className="first-content">
          <div className="doc-image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991300.png"
              className="docimg"
              alt="Doctor"
            />
          </div>
          <div className="doc-name">
            <span>Doctor Name</span>
          </div>
        </div>
        <div className="second-content">
          <span className="desc">doctor description</span>
        </div>
      </div>
      <div className="doctor-card">
        <div className="first-content">
          <div className="doc-image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991300.png"
              className="docimg"
              alt="Doctor"
            />
          </div>
          <div className="doc-name">
            <span>Doctor Name</span>
          </div>
        </div>
        <div className="second-content">
          <span className="desc">doctor description</span>
        </div>
      </div>
      <div className="doctor-card">
        <div className="first-content">
          <div className="doc-image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991300.png"
              className="docimg"
              alt="Doctor"
            />
          </div>
          <div className="doc-name">
            <span>Doctor Name</span>
          </div>
        </div>
        <div className="second-content">
          <span className="desc">doctor description</span>
        </div>
      </div>
    </div>
    </div>
  );
}
