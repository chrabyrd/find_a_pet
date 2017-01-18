import { merge } from 'lodash';

import {
  RECEIVE_SHELTER,
  RECEIVE_NEW_SHELTER,
  CLEAR_SHELTERS
} from '../actions/shelter_actions';

const defaultShelter = {
  shelter_name: '',
  email: '',
  address: '',
  phone_number: '',
  user_id: ''
};

export default (state = defaultShelter, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SHELTER:
    case RECEIVE_NEW_SHELTER:
      return merge({}, action.shelter);
    case CLEAR_SHELTERS:
    let newState = merge({}, defaultShelter);
      newState.errors = [];
    return newState;
    default:
      return state;
  }
};
