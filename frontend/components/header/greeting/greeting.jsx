import React from 'react';
import { Link } from 'react-router';
import SessionFormContainer from '../../session_form/session_form_container';

const personalGreeting = (user, logout) => (
	<hgroup className = "greeting">
    <div className="greeting-name">Hi, {user.username}! </div>
		<Link to={`/users/${user.id}`} className="greeting-button">My Profile</Link>
    <button className="greeting-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ user, logout }) => (
	<div className = "greeting-container">
  	{user ? personalGreeting(user, logout) : <SessionFormContainer />}
	</div>
);

export default Greeting;
