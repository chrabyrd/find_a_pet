import merge from 'lodash/merge';
import { RECEIVE_SHELTER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/shelter_actions';

const shelterReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SHELTER:
      return merge({}, state, { shelter: action.shelter });
    case RECEIVE_ERRORS:
      return merge({}, state, { errors: action.errors });
    case CLEAR_ERRORS:
      let newState = merge({}, state);
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default shelterReducer;
