import React from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';

import Home from './Home';
import BookList from './BookList';
import About from './About';
import MyCart from './MyCart';
import ContactUs from './ContactUs';

import './StickyNavbar.css';

import logo from '../bookLogo.png';

export default function StickyNavbar() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-fixed-left">
        <img src={logo} alt="logo" className="logo" />
        <h1>Bookr</h1>
        <ul className="main-nav" id="js-menu">
          <li>
            <NavLink to="/home" className="nav-links" activeClassName="hurray">
              Home
            </NavLink>

            <NavLink
              to="/bookList"
              className="nav-links"
              activeClassName="hurray"
            >
              Books
            </NavLink>
            <NavLink to="/about" className="nav-links" activeClassName="hurray">
              About
            </NavLink>
            <NavLink
              to="/myCart"
              className="nav-links"
              activeClassName="hurray"
            >
              My Cart
            </NavLink>
            <NavLink
              to="/contactUs"
              className="nav-links"
              activeClassName="hurray"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
      <Route path="/home" exact component={Home} />
      <Route path="/bookList" component={BookList} />
      <Route path="/about" component={About} />
      <Route path="/myCart" component={MyCart} />
      <Route path="/contactUs" component={ContactUs} />
    </BrowserRouter>
  );
}