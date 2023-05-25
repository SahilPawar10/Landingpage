import React from 'react';
import aboutImage from '../assets/Images/Frame 19.png';
import Navbar from '../Components/Navbar';
import './register.css';

import Header from '../Components/Header';
import About from '../Components/About';
import Features from '../Components/Features';
import aboutImage1 from '../assets/Images/download.png';

function Register() {
  return (
    <div id="App">
      <Navbar />
      <div id="register">
        <div className="about-image">
          <img src={aboutImage} alt="" />
        </div>

        <div className="register-text">
          <form>
            <h3>Registration Form</h3>
            <p>Create Your Account Now</p>
            <input type="tel" name="mobile" placeholder="Mobile" />
            <button className="verify" type="button">
              Verify
            </button>
            <input type="number" name="otp" placeholder="Otp" />
            <input type="email" name="email" placeholder="Email" />
            <input type="text" name="ComapnyName" placeholder="Comapny" />
            <input type="password" name="password" placeholder="Password" />
            <input
              type="password"
              name="password"
              placeholder="confirmPassword"
            />
            <button className="submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <About
        image={aboutImage1}
        title="Haazir - Virtually Everywhere..!"
        button="Get The App"
      />
      <h3 id="feature"></h3>
      <h6>Six reasons why you should choose Haazir over other options</h6>
      <Features />
    </div>
  );
}

export default Register;
