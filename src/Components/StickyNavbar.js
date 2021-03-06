import React from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

import Home from './Home';
import BookList from './BookList';
import AboutUs from './AboutUs';
import LoginForm from './LoginForm';
import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './PrivacyPolicy';
import ReviewsList from './ReviewsList';
import Review from './Review';
import NoMatch from './NoMatch';

import './StickyNavbar.css';

import logo from './bookLogo.png';

export default function StickyNavbar() {
  return (
    <BrowserRouter>
      <nav className="navbar">
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
            <NavLink
              to="/aboutUs"
              className="nav-links"
              activeClassName="hurray"
            >
              About Us
            </NavLink>
            <NavLink to="/login" className="nav-links" activeClassName="hurray">
              Login
            </NavLink>
            <NavLink
              to="/bookList/reviewsList/:id"
              className="nav-links"
              activeClassName="hurray"
            >
              Reviews List
            </NavLink>
            <NavLink
              to="/termsandconditions"
              className="nav-links"
              activeClassName="hurray"
            >
              Terms and conditions
            </NavLink>
            <NavLink
              to="/privacypolicy"
              className="nav-links"
              activeClassName="hurray"
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="/review"
              className="nav-links"
              activeClassName="hurray"
            >
              Review
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/bookList" component={BookList} />
        <Route exact path="/aboutUs" component={AboutUs} />
        <Route path="/login" component={LoginForm} />
        <Route path="/termsandconditions" component={TermsAndConditions} />
        <Route path="/privacypolicy" component={PrivacyPolicy} />
        <Route path="/bookList/reviewsList/:id" component={ReviewsList} />
        <Route path="/review" component={Review} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
}
