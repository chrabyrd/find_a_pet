import merge from 'lodash/merge';
import { RECEIVE_SHELTERS, RECEIVE_SHELTER, REMOVE_SHELTER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/shelter_actions';

const shelterReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_SHELTERS:
      return action.shelters;
    case RECEIVE_SHELTER:
      return merge({}, state, { [action.shelter.id]: action.shelter });
    case REMOVE_SHELTER:
      delete newState[action.shelter.id];
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

export default shelterReducer;
