import merge from 'lodash/merge';
import { RECEIVE_PETS, RECEIVE_PET, REMOVE_PET} from '../actions/pet_actions';

const petReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PETS:
      return action.pets;
    case RECEIVE_PET:
      return merge({}, state, { [action.pet.id]: action.pet });
    case REMOVE_PET:
      let newState = merge({}, state);
      delete newState[action.pet.id];
      return newState;
    default:
      return state;
  }
};

export default petReducer;
