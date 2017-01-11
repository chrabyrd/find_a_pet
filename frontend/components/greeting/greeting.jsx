import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" activeClassName="current">Login</Link>
    <br />
    <Link to="/signup" activeClassName="current">Sign up!</Link>
  </nav>
);

const personalGreeting = (user, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {user.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ user, logout }) => (
  user ? personalGreeting(user, logout) : sessionLinks()
);

export default Greeting;