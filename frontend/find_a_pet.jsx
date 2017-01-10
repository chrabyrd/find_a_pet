import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>FindAPet!</h1>, root);

  // window.signup = signup;
  // window.login = login;
  // window.logout = logout;
  // window.store = configureStore();
});
