/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);


  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <nav className="Nav">
      <Link
        onClick={() => closeMenu()}
        to="/"
        className="Nav-brand"
      >
        Math Magicians
      </Link>
      <ul className={`Nav-links menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        <li className="Nav-item">
          <Link
            onClick={() => closeMenu()}
            className="Nav-link"
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="Nav-item">
          <Link
            onClick={() => closeMenu()}
            className="Nav-link"
            to="/calculator"
          >
            Calculator
          </Link>
        </li>
        <li className="Nav-item">
          <Link
            onClick={() => closeMenu()}
            className="Nav-link"
            to="/quote"
          >
            Quote
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;