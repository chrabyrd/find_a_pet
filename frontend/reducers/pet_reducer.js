import merge from 'lodash/merge';
import { RECEIVE_PET, REMOVE_PET, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/pet_actions';

const petReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_PET:
      return merge({}, state, { pet: action.pet });
    case REMOVE_PET:
      delete newState[action.pet.id];
      return newState;
    case RECEIVE_ERRORS:
      return merge({}, state, { errors: action.errors });
    case CLEAR_ERRORS:
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default petReducer;
