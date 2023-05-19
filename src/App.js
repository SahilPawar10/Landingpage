import React from 'react';
import Header from './Components/Header.jsx';
import Feature from './Components/Features.jsx';
import About from './Components/About.jsx';
import Presentation from './Components/Presentation.jsx';
import aboutImage from './assets/Images/Frame 19.png';
import aboutImage1 from './assets/Images/download.png';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <h3 id="feature">
        <u> Features</u>
      </h3>
      <h6>Six reasons why you should choose Haazir over other options</h6>
      <Feature />
      <About
        image={aboutImage1}
        title="Haazir - Virtyally Everywhere..!"
        button="Get The App"
      />
      <Presentation />
    </div>
  );
}

export default App;
