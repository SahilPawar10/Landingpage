import React, { useState } from 'react';
import logo from '../assets/Images/logo.png';
import { Link } from 'react-scroll';

function Navbar() {
  const [nav, setnav] = useState(false);

  const changebackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };

  window.addEventListener('scroll', changebackground);

  return (
    <nav className={nav ? 'nav active' : 'nav'}>
      <a href="#" className="logo">
        <img src={logo} alt="" />
      </a>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="feature">Feature</Link>
        </li>
        <li>
          <Link to="presentaion">Demo</Link>
        </li>
        <li>
          <Link to="presentaion" className="active">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
