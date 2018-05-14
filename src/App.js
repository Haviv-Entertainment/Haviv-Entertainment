import React from 'react';
import Nav from './components/Nav';
import ImgSlider from './components/Slider';
// import Home from './components/Home';
import './styling/app.css';
import Logo from './images/haviv2Optimized.png';

const App = () => (
  <div id="appContainer">
    <div className="logo-container">
      <img
        className="logo"
        src={Logo}
        alt="Haviv Entertainment Logo"
      />
    </div>
    <Nav />
    <ImgSlider />
  </div>
);

export default App;
