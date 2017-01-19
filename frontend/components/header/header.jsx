import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';

const Header = () => (
  <div className="header">
    <Link to="/" className="header-logo">

      <div className="header-icon">
        <img className="header-icon-image" src={'assets/header-icon.png'} />
      </div>

      <div className="header-title">
        <h2>Find A Pet!</h2>
      </div>

    </Link>

    <GreetingContainer />
  </div>
);


export default Header;
