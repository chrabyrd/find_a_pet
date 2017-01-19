import merge from 'lodash/merge';
import { RECEIVE_SHELTERS, RECEIVE_SHELTER, REMOVE_SHELTER } from '../actions/shelter_actions';

const shelterReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SHELTERS:
      return action.shelters;
    case RECEIVE_SHELTER:
      return merge({}, state, { [action.shelter.id]: action.shelter });
    case REMOVE_SHELTER:
      let newState = merge({}, state);
      delete newState[action.shelter.id];
      return newState;
    default:
      return state;
  }
};

export default shelterReducer;
