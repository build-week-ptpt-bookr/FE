import React from 'react';
import './Navbar.css';

import logo from '../bookLogo.png';

export default function Navbar() {
  return (
    <div className="app-header">
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <ul className="main-nav" id="js-menu">
          <li>
            <a href="#" className="nav-links">
              Home
            </a>
            <a href="#" className="nav-links">
              Product
            </a>
            <a href="#" className="nav-links">
              About
            </a>
            <a href="#" className="nav-links">
              My Cart
            </a>
            <a href="#" className="nav-links">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
