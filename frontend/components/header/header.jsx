import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';

const Header = () => (
  <div className="header">
    <h2>Everything's working!</h2>
    <GreetingContainer />
  </div>
);

export default Header;
