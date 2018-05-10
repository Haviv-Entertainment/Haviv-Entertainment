import React from 'react';
import '../styling/nav.css';

const Nav = () => {
  return (
    <nav id="navContainer">
      <li className="navItem">Home</li>
      <li className="navItem">About Us</li>
      <li className="navItem">Packages</li>
      <li className="navItem">Weddings</li>
      <li className="navItem">Events</li>
      <li className="navItem">Ceremony</li>
      <li className="navItem">Acapella</li>
      <li className="navItem">Concerts</li>
    </nav>
  );
};

export default Nav;
