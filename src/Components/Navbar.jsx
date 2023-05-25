// import React, { useState } from 'react';
// import logo from '../assets/Images/logo.png';
// import { Link as ScrollLink } from 'react-scroll';
// import { Link as RouterLink } from 'react-router-dom';

// function Navbar() {
//   const [nav, setnav] = useState(false);

//   const changebackground = () => {
//     if (window.scrollY >= 50) {
//       setnav(true);
//     } else {
//       setnav(false);
//     }
//   };

//   window.addEventListener('scroll', changebackground);

//   return (
//     <nav className={nav ? 'nav active' : 'nav'}>
//       <a href="#" className="logo">
//         <img src={logo} alt="" />
//       </a>
//       <input type="checkbox" className="menu-btn" id="menu-btn" />
//       <label className="menu-icon" for="menu-btn">
//         <span className="nav-icon"></span>
//       </label>
//       <ul className="menu">
//         <li>
//           <a href="/">Home</a>
//         </li>
//         <li>
//           <ScrollLink to="about">About</ScrollLink>
//         </li>
//         <li>
//           <ScrollLink to="feature">Feature</ScrollLink>
//         </li>
//         <li>
//           <ScrollLink to="presentaion">Demo</ScrollLink>
//         </li>
//         <li>
//           <RouterLink to={'/login'} className="active">
//             Login
//           </RouterLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import logo from '../assets/Images/logo.png';

import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

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
      <a href="/" className="logo">
        <img src={logo} alt="" />
      </a>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          {/* <ScrollLink to="/" smooth={true} duration={500}>
            Home
          </ScrollLink> */}
          <a href="/">Home</a>
        </li>
        <li>
          <ScrollLink to="about" smooth={true} duration={500}>
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="feature" smooth={true} duration={500}>
            Feature
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="presentation" smooth={true} duration={500}>
            Demo
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="register" smooth={true} duration={500}>
            Login
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
