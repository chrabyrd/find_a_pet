import merge from 'lodash/merge';
import { RECEIVE_PET_IMAGE, REMOVE_PET_IMAGE, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/pet_image_actions';

const petImageReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_PET_IMAGE:
      return merge({}, state, { petImage: action.petImage });
    case REMOVE_PET_IMAGE:
      delete newState[action.petImage.id];
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

export default petImageReducer;
