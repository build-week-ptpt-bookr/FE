import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './Home';
import ProductList from './ProductList';
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
        <ul className="main-nav" id="js-menu">
          <li>
            <Link to="/" className="nav-links">
              Home
            </Link>
            <Link to="/productList" className="nav-links">
              Product
            </Link>
            <Link to="/about" className="nav-links">
              About
            </Link>
            <Link to="/myCart" className="nav-links">
              My Cart
            </Link>
            <Link to="/contactUs" className="nav-links">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <Route path="/" exact component={Home} />
      <Route path="/product" component={ProductList} />
      <Route path="/about" component={About} />
      <Route path="/myCart" component={MyCart} />
      <Route path="/contactUs" component={ContactUs} />
    </BrowserRouter>
  );
}
