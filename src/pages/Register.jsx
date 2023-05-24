import React from 'react';
import aboutImage from '../assets/Images/Frame 19.png';
import Navbar from '../Components/Navbar';
import './register.css';

function Register() {
  return (
    <div>
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
    </div>
  );
}

export default Register;
