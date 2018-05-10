import React from 'react';
import Nav from './components/Nav';
import ImgSlider from './components/Slider';
// import Home from './components/Home';
import './styling/app.css';
import Logo from './images/haviv2.png';

const App = () => (
  <div id="appContainer">
    <img
      className="logo"
      src={Logo}
      alt="Haviv Entertainment Logo"
    />
    <Nav />
    <ImgSlider />
  </div>
);

export default App;
