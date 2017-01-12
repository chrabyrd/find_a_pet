import React from 'react';
import SessionFormContainer from '../../session_form/session_form_container';

const personalGreeting = (user, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {user.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ user, logout }) => (
	<div id="greeting">
  	{user ? personalGreeting(user, logout) : <SessionFormContainer />}
	</div>
);

export default Greeting;
