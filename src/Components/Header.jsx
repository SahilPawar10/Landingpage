import React from 'react';
import Navbar from './Navbar';
import Feature from './Features';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h2 id="introducing-haazir">
          Introducing <span> Haazir</span>
        </h2>
        <h1 id="attendance-system">
          <span>Face Recognition Attendance System</span>
          <br />
        </h1>
        <p className="details">
          AI enabled attendance application with real-time facial recognition,
          geo location tagging & organizational insights.
        </p>
        <a>
          <Link className="cv-btn" to={'/register'}>
            Sign Up Now
          </Link>
        </a>
      </div>
    </div>
  );
}

export default Header;
