import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/nav.css';

const Nav = () => {
  return (
    <nav>
      <ul id="navContainer">
        <li className="navItem">
          <Link
            to="/"
            className="linkStyle"
          >
            Home
          </Link>
        </li>
        <li className="navItem">
          <Link
            to="/about"
            className="linkStyle"
          >
            About Us
          </Link>
        </li>
        <li className="navItem">
          <Link
            to="/packages"
            className="linkStyle"
          >
            Packages
          </Link>
        </li>
        <li className="navItem">
          <Link
            to="/weddings"
            className="linkStyle"
          >
            Weddings
          </Link>
        </li>
        <li className="navItem">
          <Link
            to="/ceremony"
            className="linkStyle"
          >
            Ceremony
          </Link>
        </li>
        <li className="navItem">
          <Link
            to="/events"
            className="linkStyle"
          >
            Events
          </Link>
        </li>
        <li className="navItem">
          <Link
            to="/acapella"
            className="linkStyle"
          >
            Acapella
          </Link>
        </li>
        <li className="navItem">
          <Link
            to="/concerts"
            className="linkStyle"
          >
            Concerts
          </Link>
        </li>
        <li className="navItem">
          <Link
            to="/contact"
            className="linkStyle"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
