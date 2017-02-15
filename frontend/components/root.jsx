import React from 'react';
import { Provider } from 'react-redux';
import { Router, Redirect, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';

// Components

import SessionFormContainer from './session_form/session_form_container';
import UserShowContainer from './users/user_show_container';
import ShelterShowContainer from './shelters/shelter_show_container';
import PetShowContainer from './pets/pet_show_container';
import PetIndexContainer from './pets/pet_index_container';
import PetImageShowContainer from './pets/pet_image_show_container';
import SearchResultsContainer from './content/SearchResultsContainer';
import Welcome from './content/welcome';

const Root = ({store}) => {

  const _redirectIfNotLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.user;
    if (!currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={store}>
      <Router history = {hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Welcome} />
          <Route path="/users/:userId" component={UserShowContainer} onEnter={_redirectIfNotLoggedIn}/>
          <Route path="/shelters/:shelterId" component={ShelterShowContainer} />
          <Route path="/pets/:petId" component={PetShowContainer} />
          <Route path="/search" component={SearchResultsContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
