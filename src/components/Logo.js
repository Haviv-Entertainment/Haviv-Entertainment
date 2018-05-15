import React from 'react';
import '../styling/logo.css';
import HavivLogo from '../images/haviv2Optimized.png';


const Logo = () => (
  <div id="appContainer">
    <div className="logo-container">
      <img
        className="logo"
        src={HavivLogo}
        alt="Haviv Entertainment Logo"
      />
    </div>
  </div>
);

export default Logo;
