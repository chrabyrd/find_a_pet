import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import ShelterShowContainer from './shelters/shelter_show_container';

const Root = ({store}) => {

const _redirectIfLoggedIn = (nextState, replace) => {
  const currentUser = store.getState().session.user;
  if (currentUser) {
    replace('/');
  }
};

  return(
    <Provider store={store}>
      <Router history = {hashHistory}>
        <Route path='/' component={App} />
        <Route path="/shelters/:shelterId" component={ShelterShowContainer} />
      </Router>
    </Provider>
  );
};

export default Root;
