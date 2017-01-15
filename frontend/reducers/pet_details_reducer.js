import { merge } from 'lodash';

import {
  RECEIVE_PET,
  RECEIVE_NEW_PET
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
  switch(action.type){
    case RECEIVE_PET:
    case RECEIVE_NEW_PET:
      return merge({}, action.pet);
    default:
      return state;
  }
};
