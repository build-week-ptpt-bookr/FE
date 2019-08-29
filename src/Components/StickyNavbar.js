import React from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

import Home from './Home';
import BookList from './BookList';
import About from './About';
import MyCart from './MyCart';
import ContactUs from './ContactUs';
import LoginForm from './LoginForm';
import ReviewsList from './ReviewsList';
import NoMatch from './NoMatch';

import './StickyNavbar.css';

import logo from './bookLogo.png';

export default function StickyNavbar() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-fixed-left">
        <img src={logo} alt="logo" className="logo" />
        <ul className="main-nav" id="js-menu">
          <li>
            <NavLink to="/" className="nav-links" activeClassName="hurray">
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
              to="/reviewsList"
              className="nav-links"
              activeClassName="hurray"
            >
              Reviews List
            </NavLink>
            <NavLink
              to="/contactUs"
              className="nav-links"
              activeClassName="hurray"
            >
              Contact Us
            </NavLink>
            <NavLink to="/login" className="nav-links" activeClassName="hurray">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/bookList" component={BookList} />
        <Route exact path="/reviewsList" component={ReviewsList} />
        <Route exact path="/about" component={About} />
        <Route exact path="/myCart" component={MyCart} />
        <Route exact path="/contactUs" component={ContactUs} />
        <Route path="/login" component={LoginForm} />
        {/* NoMatch not quite working, not throwing errors */}
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
}
