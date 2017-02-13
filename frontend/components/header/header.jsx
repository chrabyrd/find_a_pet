import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting_container';
import SearchBarContainer from './search_bar_container';

const Header = () => (
  <div className="header">
    <div className="header-info">
      <Link to="/" className="header-logo">
        <div className="header-title">
          <h2>Find A Pet!</h2>
        </div>
      </Link>
      <GreetingContainer />
    </div>

    <div>
      <SearchBarContainer />
    </div>
  </div>
);


export default Header;
