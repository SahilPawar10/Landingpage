import React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';

import Feature from './Components/Features.jsx';
import About from './Components/About.jsx';
import Presentation from './Components/Presentation.jsx';
import './index.css';
import Home from './Components/Home.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/about" element={<About />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
