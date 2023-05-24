import React from 'react';
import Header from './Header';
import Feature from './Features';
import About from './About';
import Presentation from './Presentation';
import aboutImage1 from '../assets/Images/download.png';

function Home() {
  return (
    <div id="App">
      <Header />
      <h3 id="feature"></h3>
      <h6>Six reasons why you should choose Haazir over other options</h6>
      <Feature />
      <About
        image={aboutImage1}
        title="Haazir - Virtually Everywhere..!"
        button="Get The App"
      />
      <Presentation />
    </div>
  );
}

export default Home;
