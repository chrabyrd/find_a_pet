import { merge } from 'lodash';

import {
  RECEIVE_PET,
  RECEIVE_NEW_PET,
  RECEIVE_PET_ERRORS,
  CLEAR_PETS,
  CLEAR_PET_ERRORS
} from '../actions/pet_actions';

const defaultPet = {
  name: '',
  pet_type: '',
  breed: '',
  age: '',
  gender: '',
  description: '',
  shelter_id: ''
};

export default (state = defaultPet, action) => {
  Object.freeze(state);
  let newState = merge({}, defaultPet);
  console.log('pet-detail-reducer');
  console.log(action);
  switch(action.type){
    case RECEIVE_PET:
    case RECEIVE_NEW_PET:
      return merge({}, action.pet);
    case CLEAR_PETS:
      newState.errors = [];
      return newState;
    case RECEIVE_PET_ERRORS:
      return merge({}, state, { errors: action.errors });
    case CLEAR_PET_ERRORS:
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};
