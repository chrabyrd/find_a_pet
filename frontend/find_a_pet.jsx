import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';
import { fetchPet } from './actions/pet_actions';



document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.user) {
    const preloadedState = { session: { user: window.user, shelter: null } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }


  window.store = store;
  window.fetchPet = fetchPet;


  const root = document.getElementById('root');
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={store} />, root);

});
