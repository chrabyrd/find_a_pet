import React from 'react';
import SessionFormContainer from '../../session_form/session_form_container';

const personalGreeting = (user, logout) => (
	<hgroup className = "greeting">
    <div className="greeting-name">Hi, {user.username}! </div>
    <button className="greeting-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ user, logout }) => (
	<div className = "greeting-container">
  	{user ? personalGreeting(user, logout) : <SessionFormContainer />}
	</div>
);

export default Greeting;
