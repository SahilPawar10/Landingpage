import React from 'react';
import Navbar from './Navbar';
import Feature from './Features';

function Header() {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          <span>Face Recognition Attendance System</span>
          <br />

          <h2>Haazir</h2>
        </h1>
        <p className="details">
          AI enabled attendance application with real-time facial recognition,
          geo location tagging & organizational insights.
        </p>
        <a href="" className="cv-btn">
          Sign Up Now
        </a>
      </div>
    </div>
  );
}

export default Header;
