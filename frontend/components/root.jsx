import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';

// Components

import SessionFormContainer from './session_form/session_form_container';
import UserShowContainer from './users/user_show_container';
import ShelterShowContainer from './shelters/shelter_show_container';
import PetShowContainer from './pets/pet_show_container';
import PetIndexContainer from './pets/pet_index_container';
import PetImageShowContainer from './pets/pet_image_show_container';

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
        <Route path="/users/:userId" component={UserShowContainer} />
        <Route path="/shelters/:shelterId" component={ShelterShowContainer} />
        <Route path="/pets" component={PetIndexContainer} />
        <Route path="/pets/:petId" component={PetShowContainer} />
        <Route path="/pet_images/:petImageId" component={PetImageShowContainer} />
      </Router>
    </Provider>
  );
};

export default Root;
